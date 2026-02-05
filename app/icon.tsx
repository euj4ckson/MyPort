import { ImageResponse } from "next/og";

export const size = {
  width: 128,
  height: 128,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 72,
          fontWeight: 700,
          color: "#0f172a",
          background: "#e2e8f0",
          borderRadius: 32,
        }}
      >
        J
      </div>
    ),
    {
      ...size,
    },
  );
}
