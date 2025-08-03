import { FaCalendarCheck, FaGlobe, FaHandshake, FaLock } from "react-icons/fa6";
import { Separator } from "../ui/separator";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IoTimer } from "react-icons/io5";
import { HiCursorClick } from "react-icons/hi";
import MotionDiv from "../ui/motion-div";

export default function WebFeaturesSection() {
  return (
    <section className="synced-width mx-auto flex flex-col justify-start items-center text-center gap-6 mb-20">
      <h2 className="text-balance font-bold text-3xl sm:text-5xl">
        What having a
        <span className="md:block">{" "}website can get you.</span>

      </h2>
      <p className=" text-base text-balance break-after-column text-foreground/90">
        Dev_Red_Box builds scalable, well-crafted websites and web apps
        <span className="md:block">{" "}with ongoing care and a deep focus on what moves your business forward</span>
      </p>
      <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5">
        <div className="flex flex-col md:grid grid-cols-3 gap-5 w-full">
          <SiteFeatureItem
            icon={<FaHandshake className="size-5 text-white" />}
            iconBgColor="border-blue-950  bg-blue-900"
            title="Build trust from day one"
            description="Your website is often the first impression. A professional site signals credibility and confidence."
          />
          <SiteFeatureItem
            icon={<FaCalendarCheck className="size-5 text-white" />}
            iconBgColor="border-emerald-950  bg-emerald-900"
            title="Stay open 24/7"
            description="While you're offline, your website keeps informing, engaging, and converting potential customers — around the clock."
          />
          <SiteFeatureItem
            icon={<FaGlobe className="size-5 text-white" />}
            iconBgColor="border-red-950  bg-red-900"
            title="Take control of your brand"
            description="Social media changes. Algorithms shift. But your website is your owned space, shaped exactly how you want."
          />

        </div>
        <div className="flex flex-col md:grid grid-cols-3 gap-5 w-full md:h-auto">
          <SiteFeatureItem
            icon={<IoTimer className="size-5 text-white" />}
            iconBgColor="border-yellow-950  bg-yellow-900"
            title="Speed That Keeps Visitors Around"
            description="We use modern tech to make sure your site loads in seconds — because slow websites lose attention fast."
          />
          <SiteFeatureItem
            icon={<HiCursorClick className="size-5 text-white" />}
            iconBgColor="border-slate-950  bg-slate-900"
            title="Search-Engine Friendly by Design"
            description="From structure to performance, your website is built to help Google understand, rank, and recommend it to the right people."
          />
          <SiteFeatureItem
            icon={<FaLock className="size-4 text-white" />}
            iconBgColor="border-cyan-950  bg-cyan-900"
            title="Safe, Stable, and Easy to Grow"
            description="With secure systems and scalable tools behind the scenes, your site stays protected — and ready as your business grows."
          />
        </div>
      </div>


    </section>
  )
}

interface SiteFeatureItemProps {
  iconBgColor: string,
  icon: ReactNode,
  title: ReactNode,
  description: ReactNode,
}

export function SiteFeatureItem({ icon, iconBgColor, title, description }: SiteFeatureItemProps) {
  return (
    <MotionDiv
      className="w-full h-fit md:h-auto rounded-xl border p-5 flex flex-col justify-start items-start gap-5 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <span
        className={cn(
          "p-2 w-fit text-muted-foreground border-1 rounded relative z-10",
          iconBgColor
        )}
      >
        {icon}
      </span>
      <h5 className="text-xl font-bold text-start">{title}</h5>
      <Separator className=" mask-l-from-80% mask-r-from-80%" />
      <p className="text-base text-start text-balance text-foreground/80">
        {description}
      </p>
    </MotionDiv>
  )
}