import { Metadata } from "next";
import AgencyFAQsHome from "@/components/home/agency-faq-home";
import AgencyHeader from "@/components/ui/agency-header";
import AgencyHero from "@/components/home/agency-hero";
import AgencyPricing from "@/components/home/agency-pricing";
import HowWeWork from "@/components/home/howwework-section";
import WebFeaturesSection from "@/components/home/web-features";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaEarthAsia, FaGithub, FaLinkedinIn, FaStar, FaYoutube } from "react-icons/fa6";
import { DevRedBoxLogo } from "@/components/ui/devredbox-logo";
import { JSON_LD_WEBSITE, MEETING_LINK, WebSiteSchema } from "@/lib/info";
import generateStaticMetadata from "@/lib/static-metadata";

export const metadata: Metadata = generateStaticMetadata({
  title: "DevRedBox – Web Design and Development Agency",
  description: "DevRedBox is a web design and development agency building modern, responsive, and scalable websites and web apps for startups and businesses worldwide.",
  pagePath: "/",
  keywords: ["devredbox", "devredbox agency", "web design", "web development"]
})

export default function Home() {
  return (
    <>
      <AgencyHeader />
      <main>
        <AgencyHero meetingLink={MEETING_LINK} />
        <section id="about" className="synced-width mx-auto flex flex-col-reverse md:grid grid-cols-2 my-20 gap-10 2xl:gap-16">
          <Image
            src={"/devredbox.webp"}
            alt="DevRedBox"
            className="w-full sm:w-2/3 aspect-video mx-auto md:mx-0  md:w-full  md:aspect-[4/3] object-cover p-2 border rounded-md"
            width={2160}
            height={2160}
            loading="lazy"
          />
          <div className="flex flex-col justify-start items-start sm:items-center md:items-start gap-6 
         text-start sm:text-center md:text-start">
            <Badge variant="link" className="text-sm" asChild>
              <p>
                About DevRedBox
              </p>
            </Badge>
            <h2 className="text-balance font-bold text-4xl sm:text-5xl">
              A Team That Builds with Purpose
            </h2>
            <p className=" sm:text-balance md:text-wrap text-base text-foreground/90">
              DevRedBox builds scalable, well-crafted websites and web apps with ongoing care and a deep focus on what moves your business forward
            </p>
            <ul className="space-y-3 text-foreground/90 list-decimal">
              <li className="flex justify-start items-center gap-2">
                <FaStar className="size-4 fill-primary" />
                Developing softwares for businesses
              </li>
              <li className="flex justify-start items-start gap-2">
                <FaStar className="size-4 mt-1 fill-primary" />
                Learning and supporting fellow developers
              </li>
            </ul>
            <div className="w-full sm:w-2/3 md:w-fit grid gap-6 pl-1 mt-2">
              <Button decoration={"ring"} >
                <Link href="/library" >
                  Visit our Library
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <HowWeWork />
        <WebFeaturesSection />
        <AgencyFAQsHome />
        <AgencyPricing />

        <section className="synced-width mx-auto mb-20 flex flex-col justify-start items-center text-center gap-7 border rounded-4xl py-16 sm:py-20 bg-muted/10 relative z-0 backdrop-blur-2xl overflow-hidden">
          <div className="w-ful h-full inset-0 absolute -z-10 shadow-2xl blur-2xl bg-gradient-to-t from-primary/20 to-black" />
          <Badge variant="link" className="text-sm pl-0" asChild>
            <p>
              Join Us Now
            </p>
          </Badge>
          <h2 className="text-balance font-bold text-3xl sm:text-5xl">
            No Two Projects Are the Same
            <span className="block text-muted-foreground">{" "}We Build for What Matters Most</span>
          </h2>
          <p className=" text-base text-balance break-after-column text-foreground/90">
            Let’s talk. Whether you have a rough idea or specific goals,
            <span className="sm:block">{" "}we’ll help you figure out what’s possible.</span>
          </p>
          <Button variant="default" decoration="ring" size={"lg"} className="mt-3" asChild>
            <a href={MEETING_LINK} target="_blank">
              Book an Appointment
            </a>
          </Button>
        </section>

        <footer className="synced-width mx-auto relative">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2">
            <div>
              <Link href="/" className="text-xl font-black relative w-fit block">
                <DevRedBoxLogo variant="AGENCY" svgCn="w-32" />
              </Link>
              <div className="flex justify-start items-center gap-4 mt-8">
                <span className="p-2 border border-dashed bg-accent/20 mt-1 border-secondary/70">
                  <FaEarthAsia />
                </span>
                <p className="text-xs text-foreground/80">
                  Started in India.
                  <br />
                  Empowering ideas worldwide.
                </p>
              </div>
              <div className="mt-8">
                <p className="flex justify-start items-center gap-2 text-sm mb-2 text-muted-foreground font-semibold">Our Socials <ArrowUpRight className="size-4" /> </p>
                <div className="flex justify-start items-center gap-4 bg-accent/20 px-4 py-3 w-fit rounded relative">
                  <a href="https://www.youtube.com/@DevRedBox" target="_blank" className="" title="DevRedBox YouTube Channel">
                    <FaYoutube className="size-5" />
                  </a>
                  <Separator orientation="vertical" className="!h-5" />
                  <a href="https://www.linkedin.com/company/devredbox/" target="_blank" className="" title="DevRedBox LinkedIn Page">
                    <FaLinkedinIn className="size-5" />
                  </a>
                  <Separator orientation="vertical" className="!h-5" />
                  <a href="https://github.com/ArmaanChaand/devredbox" target="_blank" className="" title="Explore on GitHub">
                    <FaGithub className="size-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-10 sm:mt-0">
              <nav className="flex flex-col justify-start items-start gap-3">
                <span className="text-muted-foreground font-semibold text-sm mb-2 underline underline-offset-4">Agency</span>
                <Link href="#about">About</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="/contact">Contact</Link>
              </nav>
              <nav className="flex flex-col justify-start items-start gap-3">
                <span className="text-muted-foreground font-semibold text-sm mb-2 underline underline-offset-4">Resources</span>
                <Link href="/library">Library</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/library/templates">Templates</Link>
              </nav>
            </div>
          </div>

          <div className="mt-20 mb-10 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p> Copyright &copy; 2025 DevRedBox Agency </p>
            <p className="flex justify-between items-center gap-2">
              <Link href="/" >
                Privacy Policy
              </Link>
              &bull;
              <Link href="/" >
                Terms & Conditions
              </Link>
            </p>
          </div>
        </footer >
      </main>
      <WebSiteMicrodata schema={JSON_LD_WEBSITE} />
    </>
  );
}

// TSX Component
interface WebSiteMicrodataProps {
  schema: WebSiteSchema;
}

function WebSiteMicrodata({ schema }: WebSiteMicrodataProps) {
  return (
    <div
      itemScope
      itemType="https://schema.org/WebSite"
      itemID={schema["@id"]}
    >
      <meta itemProp="name" content={schema.name} />
      <link itemProp="url" href={schema.url} />
      <meta itemProp="description" content={schema.description} />

      <div
        itemProp="publisher"
        itemScope
        itemType="https://schema.org/Organization"
        itemID={schema.publisher["@id"]}
      >
      </div>
    </div>
  );
}