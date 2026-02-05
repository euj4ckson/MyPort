import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0ea5e9 120%)",
          color: "#f8fafc",
          fontSize: 54,
          fontWeight: 700,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 26, textTransform: "uppercase", letterSpacing: "0.2em" }}>
            Portfólio
          </div>
          <div>{profile.name}</div>
          <div style={{ fontSize: 28, fontWeight: 400, color: "#cbd5f5" }}>
            {profile.headline}
          </div>
        </div>
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: 36,
            background: "rgba(15, 23, 42, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
          }}
        >
          J
        </div>
      </div>
    ),
    { ...size },
  );
}
