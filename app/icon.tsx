import { ImageResponse } from "next/og";
import { nav } from "@/content";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0F5A52",
        color: "#F5F6F2",
        borderRadius: 14,
        fontSize: 21,
        fontWeight: 700,
      }}
    >
      {nav.monogram}
    </div>,
    size,
  );
}
