import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["300", "400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Model Art — Cinematic Real Estate Visualizations",
  description:
    "Model Art crafts immersive real estate visualization experiences with cinematic storytelling, architectural precision, and interactive depth.",
  openGraph: {
    title: "Model Art Portfolio",
    description:
      "Experience luxury architectural visualization through Model Art's cinematic portfolio of immersive real estate environments.",
    url: "https://agentic-88323d93.vercel.app",
    type: "website"
  },
  metadataBase: new URL("https://agentic-88323d93.vercel.app")
};

export const viewport: Viewport = {
  themeColor: "#f5f5f5"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {children}
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-mesh-gradient opacity-70 mix-blend-screen" />
      </body>
    </html>
  );
}
