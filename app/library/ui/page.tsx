import { AUTHOR_DEVREDBOX, DEVREDBOX_META_IMAGE } from "@/lib/info";
import { Metadata } from "next";
import Link from "next/link";


const META_TITLE = "UI Components Blocks and Sections — NextJs TailwindCSS and HTML/CSS"
const META_DESCRIPTION = "DevRedBox library for customizable UI components, website blocks and sections built with ReactJs, Tailwind CSS and HTML/CSS — with more to be added soon."
const PAGE_PATH = "library/ui"

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: ["UI", "Components", "Blocks", "Website Sections", "NextJs Components", "TailwindCSS"],
  openGraph: {
    locale: "en_US",
    siteName: "DevRedBox",
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "article",
    url: PAGE_PATH,
    images: [DEVREDBOX_META_IMAGE],
    // If type="article" —
    publishedTime: new Date("October 14, 2025 19:00:00").toISOString(),
    authors: AUTHOR_DEVREDBOX
  },
  alternates: {
    canonical: PAGE_PATH
  }
}

export default function UIPage() {


  return (
    <>
      <div className="w-full flex justify-start items-start gap-10">
        <div className="w-full min-h-screen"> {/* Page contents inside this div */}
          <section>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              UI Components, Website Blocks & Sections — and More
            </h1>
            <p className="mt-5 p-content">
              This UI library helps speed up frontend development with ready-to-use and fully customizable components, website blocks, and sections, independent of any frontend framework. <br />
            </p>
            <p className="mt-2 p-content">
              Every component and block comes with JSX, HTML/CSS, TailwindCSS, and other source code, making it easy to integrate into your projects.
            </p>
          </section>
        </div>
        <div className="w-60 shrink-0 sticky top-20 hidden xl:block h-fit">


          <div className="text-sm text-muted-foreground flex flex-col justify-start items-start gap-2">
            <p>On this page</p>
            <Link href={"#the-intro"} className="toc-link">The Intro</Link>
            <Link href={"#"} className="toc-link">List of Components</Link>
            <Link href={"#"} className="toc-link">Credits</Link>
          </div>

        </div>
      </div>
    </>
  )
}