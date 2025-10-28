
import generateStaticMetadata from "@/lib/static-metadata";
import { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = generateStaticMetadata({ // Not making this page as article

  title: "UI Components Blocks and Sections — NextJs TailwindCSS and HTML/CSS",
  description: "DevRedBox library for customizable UI components, website blocks and sections built with ReactJs, Tailwind CSS and HTML/CSS — with more to be added soon.",
  pagePath: "/library/ui",
  keywords: ["UI", "Components", "Blocks", "Website Sections", "NextJs Components", "TailwindCSS"],

})

export default function UIPage() {


  const ToC = (
    <>
      <Link href={"#intro"} className="toc-link">The Intro</Link>
      <Link href={"#frameworks"} className="toc-link">Frameworks</Link>
      <Link href={"#"} className="toc-link">Components</Link>
      <Link href={"#"} className="toc-link">Blocks & Sections</Link>
    </>
  )

  return (
    <>
      <div className="w-full flex justify-start items-start gap-10">
        <div className="w-full min-h-screen"> {/* Page contents inside this div */}
          <Accordion
            type="single"
            collapsible
            className="w-full block xl:hidden"
          >
            <AccordionItem value="item-1" className="bg-foreground/5 px-5 rounded mb-8 border">
              <AccordionTrigger>On This Page</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2 text-muted-foreground">
                {ToC}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <section>
            <h1 className="text-2xl sm:text-3xl font-extrabold" id="intro">
              UI Components, Website Blocks & Sections — and More
            </h1>
            <p className="mt-4 p-content">
              This UI library helps speed up frontend development with ready-to-use and fully customizable components, website blocks, and sections, independent of any frontend framework.
            </p>
            <p className="mt-2 p-content">
              Every component and block comes with JSX, HTML/CSS, TailwindCSS, and other source code, making it easy to integrate into your projects.
            </p>

            <h2
              className="text-lg font-semibold sm:text-xl mt-8"
              id="frameworks"
            >
              Frontend Framework Independency
            </h2>
            <p className="mt-4 p-content">
              All components and website sections are available in React (JSX/TSX), Tailwind CSS, and plain HTML/CSS. This means every element can be used across different frontend frameworks after making a few simple code changes.
            </p>
            <p className="mt-2 p-content">
              Frameworks that require more than a few code changes will be added soon.
            </p>
          </section>
        </div>
        <div className="w-60 shrink-0 sticky top-20 hidden xl:block h-fit">
          <div className="text-sm text-muted-foreground flex flex-col justify-start items-start gap-2">
            <p>On this page</p>
            {ToC}
          </div>

        </div>
      </div>
    </>
  )
}