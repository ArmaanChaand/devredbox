import AgencyFAQsHome from "@/components/home/agency-faq-home";
import BrandsShowcase from "@/components/home/brands-showcase";
import HowWeWork from "@/components/home/howwework-section";
import WebFeaturesSection from "@/components/home/web-features";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";


export default function Home() {
  return (
    <>

      <section className="flex justify-center items-center relative overflow-hidden pl-2">
        <div className="synced-width mx-auto flex flex-col justify-center items-start sm:items-center mt-32  mb-20 sm:mb-28 gap-8">
          <p className="text-xs flex justify-center gap-2 items-center p-2 border rounded-md bg-secondary/20"> <Badge className="rounded" >SOON</Badge>
            Android and iOS Apps
          </p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-mono text-start sm:text-center">
            Your Vision, Our <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-900 from-5% to-primary to-90% ">{"<Code />"}</span>
            <span className="lg:hidden">, </span>
            <span className="lg:block">
              Real Business Impact
            </span>
          </h1>

          <p className="text-base w-full text-start sm:text-balance sm:text-center leading-relaxed text-foreground/80">
            Trusted by ambitious businesses & startups, DevRedBox <span className="text-foreground">custom websites</span> and powerful <span className="text-foreground">web apps</span>  that drive growth, and help you confidently lead your industry forward.
          </p>

          <div className="gap-6 flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 mr-auto sm:mr-0">
            <Button className="w-56 sm:w-auto sm:flex-1 sm:shrink-0" size="lg" variant="primary" decoration={"ring"} >
              Book a Call
            </Button>
            <Button className="w-fit sm:w-auto sm:flex-1 sm:shrink-0" size="lg" variant="outline" decoration={"ring"}>
              View Project Progress
            </Button>
          </div>
        </div>

      </section>
      <BrandsShowcase />
      <section className="synced-width mx-auto flex flex-col-reverse md:grid grid-cols-2 my-20 gap-10 2xl:gap-16">
        <Image
          src={"/about-img.jpg"}
          alt="Know DevRedBox More"
          className="w-full sm:w-2/3 aspect-video mx-auto md:mx-0  md:w-full  md:aspect-[4/3] object-cover p-2 border rounded-md"
          width={1080}
          height={1080}
        />
        <div className="flex flex-col justify-start items-start sm:items-center md:items-start gap-6 
         text-start sm:text-center md:text-start">
          <Badge variant="outline" className="section-badge" asChild>
            <p>
              About Dev_Red_Box
            </p>
          </Badge>
          <h2 className="text-balance font-bold text-4xl sm:text-5xl">
            A Team That Builds with Purpose
          </h2>
          <p className=" sm:text-balance md:text-wrap text-base text-foreground/90">
            Dev_Red_Box builds scalable, well-crafted websites and web apps with ongoing care and a deep focus on what moves your business forward
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
          <div className="w-full sm:w-2/3 md:w-fit grid grid-cols-2 gap-6 pl-1 mt-2">
            <Button variant="primary" decoration="ring"  >
              Request a Call
            </Button>
            <Button variant="outline" decoration={"ring"} >
              Know Us More
            </Button>
          </div>
        </div>
      </section>

      {
        /* 
        Here should be project showcase.
        Real or Side project - Anything which looks authentic 
        */
      }

      <HowWeWork />
      <WebFeaturesSection />
      <AgencyFAQsHome />


    </>
  );
}
