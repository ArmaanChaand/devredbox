import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { SITE_ORIGIN } from "@/lib/info";

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
  icons: {
    // icon: [
    //   {
    //     url: "/favicon.ico",
    //     type: "image/x-icon"
    //   },
    //   {
    //     url: "/favicon-16x16.png",
    //     sizes: "16x16",
    //     type: "image/png"
    //   }
    //   // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    // ],
    // shortcut: [
    //   {
    //     url: "/favicon.ico",
    //     type: "image/x-icon"
    //   }
    // ],
    // apple: [
    //   {
    //     url: "/apple-icon-57x57.png",
    //     sizes: "57x57",
    //     type: "image/png"
    //   },
    //   {
    //     url: "/apple-icon-60x60.png",
    //     sizes: "60x60",
    //     type: "image/png"
    //   }
    //   // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    // ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={"dark overflow-x-hidden" + " " + outfit.className} // Space at the end of string is required
      >

        {children}
      </body>
    </html>
  );
}
