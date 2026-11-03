import type { Metadata } from "next";
import { Spectral, Manrope, Hind_Siliguri } from "next/font/google";
import { profile, SITE_URL } from "@/content";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "600"],
  variable: "--font-hind-siliguri",
});

const title = `${profile.name.first} ${profile.name.last} — Frontend Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: profile.lede,
  openGraph: { title, description: profile.lede, url: "/", type: "website" },
  twitter: { card: "summary_large_image", title, description: profile.lede },
};

// Runs before paint so a saved theme never flashes the wrong colors.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${manrope.variable} ${hindSiliguri.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
