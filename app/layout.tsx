import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { GAID, JSON_LD_MAIN, SITE_ORIGIN } from "@/lib/info";
import { GoogleAnalytics } from '@next/third-parties/google'
import { JsonLd } from "@/components/ui/json-ld";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111"
};


export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  twitter: {
    creator: "@devredbox",
    site: "@devredbox"
  },
  // icons are added via file method.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd
          jsonString={JSON.stringify(JSON_LD_MAIN)}
        />
      </head>
      <body
        className={"dark overflow-x-hidden" + " " + outfit.className} // Space at the end of string is required
      >

        {children}
      </body>
      <GoogleAnalytics gaId={GAID} />
    </html>
  );
}
