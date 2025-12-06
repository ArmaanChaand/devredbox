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
        <div className="w-full min-h-screen min-w-0">
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
              React UI Components & Website Blocks — Ready to Use
            </h1>
            <p className="mt-2 p-content">
             This UI library provides everything you need to build modern websites faster — from small, reusable React UI components to complete website sections and blocks. Each element is production-ready and fully customizable to match your project&apos;s design requirements.
            </p>
            <p className="mt-2 p-content">
             Components and blocks are available in multiple formats including TSX, JSX, and HTML/CSS, with complete source code provided for easy integration into your React, Next.js projects, or any other frontend framework.
            </p>

            <h2
              className="text-lg font-semibold sm:text-xl mt-8 mb-2"
              id="frameworks"
            >
               Multiple Code Formats for Maximum Flexibility
            </h2>
            <p className="mt-2 p-content">
             Every component and website block in this library is carefully crafted to work across different development environments. Some elements are available in all three formats—TSX, JSX, and HTML/CSS — giving you complete flexibility in how you build.
            </p>
            <p className="mt-2 p-content">
              While our most popular React UI components and Next.js website sections come in all three formats, some specialized components are currently available in a single format. We&apos;re continuously expanding format availability based on community needs.
            </p>
            <h2
              className="text-lg font-semibold sm:text-xl mt-8"
              id="components"
            >
              React UI Components
            </h2>
            <p className="mt-4 p-content">
              Build consistent, professional interfaces with our collection of essential React UI components. From buttons and input fields to dialogs and cards, every component is reusable and comes with multiple style variations to maintain design consistency while adapting to your specific needs.
            </p>
            <p className="mt-2 p-content">
             Beyond the basics, explore our advanced React components including marquee animations, animated modals, cursor trackers, and interactive elements that add polish to any project. These React UI components are designed for modern web applications, work seamlessly with Next.js, and are optimized for performance.
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
              React Website Sections & Blocks
            </h2>
            <p className="mt-4 p-content">
              Skip the repetitive work with pre-built React website sections ready to drop into any project. Our library includes hero sections, feature showcases, testimonial grids, pricing tables, footer layouts, contact forms, and more—each designed as a complete, responsive React website block.
            </p>
            <p className="mt-2 p-content">
             Every website section offers flexible layout options and multiple styling approaches, allowing you to match various design aesthetics while maintaining clean, maintainable code. These React website blocks are perfect for landing pages, marketing sites, SaaS applications, portfolios, and Next.js projects.
            </p>
            <h2
              className="text-lg font-semibold sm:text-xl mt-8"
              id="blocks"
            >
             ShadCN UI Blocks
            </h2>
            <p className="mt-4 p-content">
             For developers using the ShadCN UI component library, we offer specially designed website blocks built entirely with ShadCN components. These ShadCN UI blocks combine the power of ShadCN&apos;s accessible components with beautiful, production-ready layouts.
            </p>
            <p className="mt-2 p-content">
            Our ShadCN UI blocks include hero sections, feature grids, pricing tables, and more — all built following ShadCN&apos;s design principles and easily customizable using Tailwind CSS. Perfect for quickly building modern React and Next.js applications with consistent, accessible UI patterns.
            </p>
            <p className="mt-2 p-content">
          All React website sections, Next.js blocks, and ShadCN UI blocks are fully responsive and optimized for performance across devices.
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