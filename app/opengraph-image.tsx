import { ImageResponse } from "next/og";
import { profile } from "@/content";

export const alt = `${profile.name.first} ${profile.name.last}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Spectral matches the banner. If the download fails at build time the image
// still renders, in the default sans font.
async function loadSpectral() {
  try {
    const css = await (
      await fetch("https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;1,300")
    ).text();
    const load = async (style: "normal" | "italic") => {
      const url = css.match(new RegExp(`font-style: ${style};[^}]*?src: url\\((.+?)\\)`))?.[1];
      if (!url) throw new Error(`No ${style} Spectral in the font response`);
      return { name: "Spectral", data: await (await fetch(url)).arrayBuffer(), weight: 300 as const, style };
    };
    return await Promise.all([load("normal"), load("italic")]);
  } catch {
    return undefined;
  }
}

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0F5A52",
        color: "#F5F6F2",
        fontFamily: "Spectral",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "flex-start",
          gap: 14,
          padding: "10px 26px",
          marginBottom: 44,
          borderRadius: 999,
          background: "rgba(255,255,255,.1)",
          fontSize: 28,
        }}
      >
        <div style={{ width: 14, height: 14, borderRadius: 7, background: "#D9A02B" }} />
        {profile.status}
      </div>
      <div style={{ display: "flex", fontSize: 104, lineHeight: 1, letterSpacing: "-.02em" }}>{profile.name.first}</div>
      <div
        style={{
          display: "flex",
          fontSize: 104,
          lineHeight: 1,
          letterSpacing: "-.02em",
          fontStyle: "italic",
          paddingLeft: 94,
          marginBottom: 44,
        }}
      >
        {profile.name.last}
      </div>
      <div style={{ display: "flex", fontSize: 40 }}>{profile.role}</div>
    </div>,
    { ...size, fonts: await loadSpectral() },
  );
}
