
import generateStaticMetadata from "@/lib/static-metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = generateStaticMetadata({ // Not making this page as article
  
  title: "UI Components Blocks and Sections — NextJs TailwindCSS and HTML/CSS",
  description: "DevRedBox library for customizable UI components, website blocks and sections built with ReactJs, Tailwind CSS and HTML/CSS — with more to be added soon.",
  pagePath: "/library/ui",
  keywords: ["UI", "Components", "Blocks", "Website Sections", "NextJs Components", "TailwindCSS"],

})

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