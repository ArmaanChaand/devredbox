import { FaGlobe } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import PricingBox from "./pricing-box";
import { BiSolidCustomize } from "react-icons/bi";
import { MEETING_LINK } from "@/lib/info";

export default function AgencyPricing() {
    return (
        <section className="mb-20 mx-auto synced-width grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="flex flex-col justify-start items-start sm:items-center md:items-start text-start sm:text-center md:text-start gap-5">
                <Badge variant="link" className="text-sm pl-0" asChild>
                    <h2>
                        Pricing and Fees
                    </h2>
                </Badge>
                <p className="text-balance font-bold text-4xl sm:text-5xl">
                    Tailored, Transparent & Flexible Packages
                </p>
                <Button variant="default" decoration="ring" size={"lg"} className="mt-3" asChild>
                    <a href={MEETING_LINK} target="_blank">
                        Request a Quote
                    </a>
                </Button>
            </div>
            <div className="w-full flex flex-col gap-5">
                <PricingBox
                    label="Starter"
                    title="For small businesses or personal brands."
                    price="$800 - 1000"
                    icon={<FaGlobe className="size-5" />}
                    description={<>
                        <span className="text-foreground">Essential Business Website {" "}</span>
                        — a polished, mobile-friendly site to establish your presence, connect with visitors, and support your business from day one.
                    </>}
                />
                <PricingBox
                    label="Custom"
                    title="For growing startups or service-based businesses."
                    price="Let's Talk"
                    colorInverted
                    hidePriceDetail
                    icon={<BiSolidCustomize className="size-5 text-background" />}
                    description={<>
                        <span className="text-background font-semibold">Custom Web Application {" "}</span>
                        — a customised, high-performing solution designed to integrate technologies, optimise processes, and grow with your changing business requirements.
                    </>}
                />

            </div>


        </section>
    )
}