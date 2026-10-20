import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

export const runtime = "nodejs";
const contactDestinationEmail = "jacksonduardo6@gmail.com";

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > 16_384) {
    return Response.json(
      { error: "Request body is too large" },
      { status: 413 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;
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
      subject: `New portfolio message from ${name}`,
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
