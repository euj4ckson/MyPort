import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt =
  "Jackson Eduardo — Desenvolvedor Backend .NET Pleno. APIs, integrações e sistemas de gestão.";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px",
        background: "linear-gradient(120deg, #0e1111 0%, #111d19 100%)",
        color: "#f8fafc",
        fontSize: 72,
        fontWeight: 700,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            fontSize: 20,
            color: "#6de5b4",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          Código com propósito / Portfólio
        </div>
        <div>{profile.name}</div>
        <div style={{ fontSize: 30, fontWeight: 400, color: "#b4c3bd" }}>
          {profile.headline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            borderTop: "1px solid #304038",
            paddingTop: 28,
            fontSize: 22,
            fontWeight: 400,
            color: "#6de5b4",
          }}
        >
          C# · ASP.NET Core · APIs · SQL · Automação com IA
        </div>
      </div>
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: 24,
          background: "#6de5b4",
          color: "#0e1111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
        }}
      >
        J.
      </div>
    </div>,
    { ...size },
  );
}
