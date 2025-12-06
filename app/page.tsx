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


/*
I've created a page to display pricing card ui component. And source code is available in tsx & tailwind css for react and nextjs.
And other version using shadcn/ui components.
Write a copy of this page using this rules:


Logical flow:
h1: which component and what versions
p: Elaborate → tease → types of source code availability
h2: non-shadcn (choose better word) version in tsx for react and nextjs
[Component Preview and code display] → My Task (keep as it is)
p: little bit of description about it. It's in tsx, jsx ... → tease of next version
h2: shadcn (choose better word) version in tsx for react and nextjs
[Component Preview and code display] → My Task (keep as it is)
p: description 
[Choose better html element]: shadcn components used


Minimalist & Clear:
Word count → Minimal
Concise descriptions without marketing fluff
Bullet points and short paragraphs
Direct language ("Here's how...", "You can...")
Step-by-step instructions

Tone:
Professional but approachable
Instructional without being patronizing
Assumes reader competence
No hype or sales language

 */