import { Metadata } from "next";
import AgencyFAQsHome from "@/components/home/agency-faq-home";
import AgencyHeader from "@/components/ui/agency-header";
import AgencyHero from "@/components/home/agency-hero";
import AgencyPricing from "@/components/home/agency-pricing";
import HowWeWork from "@/components/home/howwework-section";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaEarthAsia, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { DevRedBoxLogo } from "@/components/ui/devredbox-logo";
import { DEVREDBOX_BANNER, MEETING_LINK } from "@/lib/info";
import generateStaticMetadata from "@/lib/static-metadata";
import { WebSiteMicrodata } from "@/lib/info-tsx";
import TheProblem from "@/components/home/the-problems-section";
import ForWhoSection from "@/components/home/for-who-section";
import WhyDevRedBox from "@/components/home/why-devredbox";
import FooterCTA from "@/components/home/footer-cta";

export const metadata: Metadata = generateStaticMetadata({
  title: "DevRedBox – SaaS MVP Development for Non-Tech Founders",
  description: "We help non-tech founders launch SaaS MVPs in 8-12 weeks. From idea to market-ready product—built with Next.js, starting at $5K. Based in Delhi, serving founders globally.",
  keywords: ["saas mvp development", "build saas mvp", "non-tech founder", "mvp development india", "nextjs development", "saas startup development", "devredbox"],
  pagePath: "/",
  og_image: DEVREDBOX_BANNER
})


export default function Home() {
  return (
    <>
      <AgencyHeader />
      <main>
        <AgencyHero meetingLink={MEETING_LINK} />
        <TheProblem />
        <HowWeWork />
        <ForWhoSection />
        <AgencyPricing />
        <WhyDevRedBox />
        <AgencyFAQsHome />
        <FooterCTA />

        <footer className="synced-width mx-auto relative mt-20">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2">
            <div>
              <Link href="/" className="text-xl font-black relative w-fit block">
                <DevRedBoxLogo variant="STUDIO" svgCn="w-32" />
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
                <span className="text-muted-foreground font-semibold text-sm mb-2 underline underline-offset-4">Studio</span>
                <Link href="#pricing">Pricing</Link>
                <Link href="#faq">FAQ</Link>
                <Link href="#how-it-works">How it works</Link>
                <a href={MEETING_LINK} target="_blank">
                  Book a Call
                </a>
              </nav>
              <nav className="flex flex-col justify-start items-start gap-3">
                <span className="text-muted-foreground font-semibold text-sm mb-2 underline underline-offset-4">Resources</span>
                <Link href="/library">Library</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/library/templates">Templates</Link>
              </nav>
            </div>
          </div>

          <div className="mt-20 mb-10 flex flex-col sm:flex-row justify-center items-center text-sm text-muted-foreground">
            <p> Copyright &copy; 2025 DevRedBox</p>
            <p className="flex justify-between items-center gap-2" hidden>
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
      <WebSiteMicrodata />
    </>
  );
}

