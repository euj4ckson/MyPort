import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(200).optional().default(""),
});

export const runtime = "nodejs";
const contactDestinationEmail = "jacksonduardo6@gmail.com";
const maxBodyBytes = 32_768;
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxRequests = 5;
// Best-effort per-instance throttling; use a shared store if this endpoint scales out.
const requestsByIp = new Map<string, { count: number; resetAt: number }>();

async function readLimitedBody(request: Request) {
  if (!request.body) return { kind: "invalid" as const };

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > maxBodyBytes) {
        await reader.cancel();
        return { kind: "too_large" as const };
      }
      chunks.push(value);
    }
  } catch {
    return { kind: "invalid" as const };
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return {
      kind: "ok" as const,
      text: new TextDecoder("utf-8", { fatal: true }).decode(bytes),
    };
  } catch {
    return { kind: "invalid" as const };
  }
}

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp =
    forwardedFor?.split(",").at(-1)?.trim() ||
    request.headers.get("x-real-ip")?.trim();

  // Local development and non-proxy deployments may not provide a trusted IP.
  if (!clientIp) return false;

  const now = Date.now();
  const current = requestsByIp.get(clientIp);
  if (!current && requestsByIp.size >= 10_000) {
    for (const [ip, entry] of requestsByIp) {
      if (entry.resetAt <= now) requestsByIp.delete(ip);
    }
    if (requestsByIp.size >= 10_000) return true;
  }

  if (!current || current.resetAt <= now) {
    requestsByIp.set(clientIp, { count: 1, resetAt: now + rateLimitWindowMs });
  } else if (current.count >= rateLimitMaxRequests) {
    return true;
  } else {
    current.count += 1;
  }

  if (requestsByIp.size > 1000) {
    for (const [ip, entry] of requestsByIp) {
      if (entry.resetAt <= now) requestsByIp.delete(ip);
    }
  }

  return false;
}

export async function POST(request: Request) {
  const contentType = request.headers
    .get("content-type")
    ?.split(";", 1)[0]
    .trim()
    .toLowerCase();
  if (contentType !== "application/json") {
    return Response.json(
      { error: "Content-Type must be application/json" },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return Response.json(
      { error: "Request body is too large" },
      { status: 413 },
    );
  }

  const bodyResult = await readLimitedBody(request);
  if (bodyResult.kind === "too_large") {
    return Response.json(
      { error: "Request body is too large" },
      { status: 413 },
    );
  }
  if (bodyResult.kind !== "ok") {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  let body: unknown;
  try {
    body = JSON.parse(bodyResult.text) as unknown;
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, message, website } = parsed.data;
  if (website) return Response.json({ ok: true });

  if (isRateLimited(request)) {
    return Response.json(
      { error: "Too many messages. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimitWindowMs / 1000) },
      },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    return Response.json(
      {
        error: "Email service is not configured",
        missing: ["RESEND_API_KEY"],
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: contactDestinationEmail,
      subject: "New message from the portfolio contact form",
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (resendError) {
      return Response.json(
        {
          error: "Failed to send message",
          details:
            process.env.NODE_ENV === "development"
              ? resendError.message
              : undefined,
        },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      {
        error: "Failed to send message",
        details:
          process.env.NODE_ENV === "development"
            ? "Unexpected server error while sending email"
            : undefined,
      },
      { status: 500 },
    );
  }
}
