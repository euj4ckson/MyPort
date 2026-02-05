import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #38bdf8 120%)",
          color: "#f8fafc",
          fontSize: 52,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 24, textTransform: "uppercase", letterSpacing: "0.2em" }}>
            Portfólio
          </div>
          <div>{profile.name}</div>
          <div style={{ fontSize: 28, fontWeight: 400, color: "#bae6fd" }}>
            {profile.headline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
