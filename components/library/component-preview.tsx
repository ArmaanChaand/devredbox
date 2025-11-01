import { MarqueeAnimationOne } from "./public/components/marquee-animation"

interface ComponentPreviewProps {
    item: keyof typeof PUBLIC_COMPONENTS
}

const PUBLIC_COMPONENTS = {
    "marquee-animation": (
        <div className="w-full h-full grid place-items-center">
            <MarqueeAnimationOne />
        </div>
    )
} as const

export default function ComponentPreview({ item }: ComponentPreviewProps) {
    const component = PUBLIC_COMPONENTS[item]

    if (!component) {
        return null
    }

    return component
}