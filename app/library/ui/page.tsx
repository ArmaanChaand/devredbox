import generateStaticMetadata from "@/lib/static-metadata";
import { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import LibraryUiSidenavMb from "@/components/ui/library-ui-sidenav-mb";

export const metadata: Metadata = generateStaticMetadata({ // Not making this page as article

  title: "UI Components Blocks and Sections — NextJs TailwindCSS and HTML/CSS",
  description: "DevRedBox library for customizable UI components, website blocks and sections built with ReactJs, Tailwind CSS and HTML/CSS — with more to be added soon.",
  pagePath: "/library/ui",
  keywords: ["UI", "Components", "Blocks", "Website Sections", "NextJs Components", "TailwindCSS"],

})

export default function UIPage() {


  const ToC = (
    <>
      <Link href={"#frameworks"} className="toc-link">Frameworks</Link>
      <Link href={"#components"} className="toc-link">Components</Link>
      <Link href={"#blocks"} className="toc-link">Blocks & Sections</Link>
    </>
  )

  return (
    <>
      <div className="w-full flex justify-start items-start gap-10">
        <div className="w-full min-h-screen">
          <div className="flex items-start gap-4 w-full xl:hidden">
            <LibraryUiSidenavMb />
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value="item-1" className="bg-foreground/5 px-5 rounded mb-8 border">
                <AccordionTrigger>On This Page</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 text-muted-foreground">
                  {ToC}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Page contents below this */}
          <section>
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">
              UI Components, Website Blocks & Sections — and More
            </h1>
            <p className="mt-2 p-content">
              This UI library helps speed up frontend development with ready-to-use and fully customizable components, website blocks, and sections, independent of any frontend framework.
            </p>
            <p className="mt-2 p-content">
              Every component and block comes with JSX, HTML/CSS, Tailwind CSS, and other source code, making it easy to integrate into your projects.
            </p>

            <h2
              className="text-lg font-semibold sm:text-xl mt-8 mb-2"
              id="frameworks"
            >
              Frontend Framework Independency
            </h2>
            <p className="mt-2 p-content">
              All components and website sections are available in React (JSX/TSX), Tailwind CSS, and plain HTML/CSS. This means every element can be used across different frontend frameworks after making a few simple code changes.
            </p>
            <p className="mt-2 p-content">
              Frameworks that require more than a few code changes will be added soon.
            </p>
            <h2
              className="text-lg font-semibold sm:text-xl mt-8"
              id="components"
            >
              UI Components
            </h2>
            <p className="mt-4 p-content">
              Essential UI elements like buttons, dialogs, input fields, etc. All components are reusable and include multiple style variations, making it easy to maintain consistency across projects while adapting to specific design requirements.
            </p>
            <p className="mt-2 p-content">
              Beyond the basics, the library includes interactive and advanced components such as marquee animations, animated modals, cursor trackers, etc., as well as enhanced versions of components from popular UI libraries like
              {" "}
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in new tab"
                className="underline underline-offset-1"
              >
                ShadCN
              </a>
              {" "}
              and
              {" "}
              <a
                href="https://flowbite.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in new tab"
                className="underline underline-offset-1"
              >
                Flowbite.
              </a>
            </p>
            <ul className="mt-4">
              <li>
                <Button variant="outline" className="!bg-background" asChild>
                  <Link href="/library/ui/marquee-animation" >
                    Marquee Animations
                  </Link>
                </Button>
              </li>
            </ul>

            <h2
              className="text-lg font-semibold sm:text-xl mt-8"
              id="blocks"
            >
              Website Blocks and Sections
            </h2>
            <p className="mt-4 p-content">
              Pre-built page sections ready to drop into any project, including hero banners, feature showcases, testimonial grids, pricing tables, footer layouts, and more. Each block is designed with flexibility in mind, offering different layout options and styling approaches to match various design aesthetics and source codes.
            </p>
            <p className="mt-2 p-content">
              This goes without saying that each of the sections or blocks will be responsive.
            </p>
          </section>
          <footer className="mb-20">

          </footer>
        </div>
        <div className="w-60 shrink-0 sticky top-20 hidden xl:block h-fit">
          <div className="text-sm text-muted-foreground flex flex-col justify-start items-start gap-2">
            <p className="mb-1">On This Page</p>
            {ToC}
          </div>
        </div>
      </div>
    </>
  )
}