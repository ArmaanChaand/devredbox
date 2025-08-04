import { FaBookOpen } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ScrollHijackedDiv from "./scroll-hijacked-div";
import WorkProcess from "./work-process-section";
import { AiFillCode } from "react-icons/ai";
import { HiMiniRocketLaunch } from "react-icons/hi2";


export default function HowWeWork() {


    return (
        <div className="synced-width mx-auto md:h-[500vh] relative">
            <section
                className="mx-auto mb-20 flex flex-col md:flex-row justify-between items-center bg-accent/30 px-0 md:px-7 py-7 rounded-xl gap-10 -top-24 sm:top-24 static md:sticky z-10"
            >
                <div className=" flex flex-col justify-start items-center md:items-start text-center md:text-start gap-6 ">
                    <Badge variant="outline" className="section-badge" asChild><p>How it Works</p></Badge>

                    <h2 className="text-balance font-bold text-3xl sm:text-5xl">
                        Behind the Scenes <br /> with Dev_Red_Box
                    </h2>

                    <p className="text-balance 2xl:text-base text-foreground/90">
                        From drawing you idea on paper to bringing that to reality — discover the streamlined development that makes Dev_Red_Box a trusted digital partner.
                    </p>

                    <Button variant="primary" decoration="ring" className="hidden md:inline-flex w-56"  >
                        Book a Call
                    </Button>

                </div>
                <div className="w-full md:h-96 p-5 md:overflow-hidden">
                    <ScrollHijackedDiv className="flex flex-col gap-5 w-full">

                        <WorkProcess
                            icon={<FaBookOpen className="size-5" />}
                            heading="1. Discovery & Planning"
                            title="We listen, learn, and map"
                            description=" We understand your goals, research the market, and create a roadmap tailored to your success."
                        />
                        <WorkProcess
                            icon={<AiFillCode className="size-5" />}
                            heading="2. Design & Development"
                            title="From concept to clean code"
                            description="Our team crafts user-friendly designs and develops high-performance applications with scalable architecture."
                        />
                        <WorkProcess
                            icon={<HiMiniRocketLaunch className="size-5" />}
                            heading="3. Launch & Support"
                            title="We ship and stay."
                            description="Once live, we ensure everything runs smoothly and continue to support your growth with updates and care."
                        />
                    </ScrollHijackedDiv>
                </div>
            </section>
        </div>
    )
}