import { ScrollArea } from "../ui/scroll-area"
import { MarqueeAnimationOne } from "./public/components/marquee-animation"
import { PriceCardCn } from "./public/components/price-card-cn-public"
import { PriceCard } from "./public/components/price-card-public"

interface ComponentPreviewProps {
    item: keyof typeof PUBLIC_COMPONENTS
}

const PUBLIC_COMPONENTS = {
    "marquee-animation": (
        <div className="w-full h-full grid place-items-center">
            <MarqueeAnimationOne />
        </div>
    ),
    "price-card": (
        <ScrollArea className="w-full h-full ">
            <div className="grid place-items-center h-fit scale-90">
                <div className="shadow">
                    <PriceCard />
                </div>
            </div>
        </ScrollArea>
    ),
    "price-card-cn": (
        <ScrollArea className="w-full h-full ">
            <div className="grid place-items-center h-fit scale-85">
                <div className="shadow">
                    <PriceCardCn />
                </div>
            </div>
        </ScrollArea>
    ),
} as const

export default function ComponentPreview({ item }: ComponentPreviewProps) {
    const component = PUBLIC_COMPONENTS[item]

    if (!component) {
        return null
    }

    return component
}