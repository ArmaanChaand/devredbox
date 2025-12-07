import { Metadata } from "next";
import AgencyFAQsHome from "@/components/studio/studio-faq-home";
import StudioHeader from "@/components/studio/studio-header";
import HeroStudio from "@/components/studio/studio-hero";
import StudioPricing from "@/components/studio/studio-pricing";
import HowWeWork from "@/components/studio/howwework-section";
import { DEVREDBOX_BANNER, MEETING_LINK } from "@/lib/info";
import generateStaticMetadata from "@/lib/static-metadata";
import { WebSiteMicrodata } from "@/lib/info-tsx";
import TheProblem from "@/components/studio/the-problems-section";
import ForWhoSection from "@/components/studio/for-who-section";
import WhyDevRedBox from "@/components/studio/why-devredbox";
import FooterCTA from "@/components/studio/footer-cta";
import FooterStudio from "@/components/studio/studio-footer";

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
      <StudioHeader />
      <main>
        <HeroStudio meetingLink={MEETING_LINK} />
        <TheProblem />
        <HowWeWork />
        <ForWhoSection />
        <StudioPricing />
        <WhyDevRedBox />
        <AgencyFAQsHome />
        <FooterCTA />
        <FooterStudio />
      </main>
      <WebSiteMicrodata />
    </>
  );
}