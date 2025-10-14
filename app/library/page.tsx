import { Button } from "@/components/ui/button";
import { DEVREDBOX_META_IMAGE } from "@/lib/info";
import { Metadata } from "next";

const META_TITLE = "Code Library by DevRedBox for Web and Mobile Development"
const META_DESCRIPTION = "Reusable UI components, website sections, and templates to help developers and designers build modern, responsive websites & apps faster. Built by devs at DevRedBox"

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: ["DevRedBox", "Library", "NextJs UI Components", "NextJs Templates"],
  openGraph: {
    locale: "en_US",
    siteName: "DevRedBox Agency",
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "website",
    url: "/library",
    images: [DEVREDBOX_META_IMAGE],
  },
  alternates: {
    canonical: "/library"
  }
}


export default function LibraryPage() {
  return (
    <>
      <section className="w-full h-fit relative z-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 700 700"
          width="100%"
          height="100%"
          opacity="0.79"
          className="absolute -z-10 -top-10 w-full h-full scale-[300%]"
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="linearRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.2"
                numOctaves={4}
                seed={15}
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              />
              <feSpecularLighting
                surfaceScale={15}
                specularConstant="0.3"
                specularExponent={20}
                lightingColor="#cccccc"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth={3} elevation={52} />
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="transparent" />
          <rect width="100%" height="100%" fill="#cccccc" filter="url(#nnnoise-filter)" />
        </svg>

        <div className="mt-30 library-wrapper h-full flex flex-col justify-end items-start gap-7">
          <h1 className="">
            <span className="text-base block bg-clip-text text-transparent bg-linear-to-r from-foreground from-50% to-secondary to-100% font-bold md:ml-2 w-fit">Perhaps it’s time to </span>
            <span className="block text-4xl sm:text-7xl md:text-8xl font-black">
              stop reinventing <br />  the wheel.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-balance w-full xl:w-2/3 text-muted-foreground">
            DevRedBox Library provides developers and designers with reusable UI components, pre-built website sections, and professional templates to create modern, responsive websites faster.
          </p>
          <div className="w-fit flex justify-start items-center p-3 bg-secondary rounded-2xl mb-20">
            <Button>Browse Components</Button>
            <Button variant={"link"} className="text-foreground">Visit GitHub</Button>
          </div>
        </div>

      </section>

      <div className="h-[190vh]">

      </div>

    </>
  )
}