import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface PricingBoxProps {
    label: ReactNode
    title: ReactNode
    price: ReactNode
    icon: ReactNode
    description: ReactNode
    hidePriceDetail?: boolean
    className?: string
    colorInverted?: boolean
}

export default function PricingBox({ className, colorInverted, label, title, price, hidePriceDetail, icon, description }: PricingBoxProps) {
    return (
        <div className={cn("w-full rounded-lg bg-muted/50 p-5", className, colorInverted && "bg-foreground")}>
            <span
                className={cn("text-sm text-muted-foreground uppercase",
                    colorInverted && "text-background"
                )}
            >{label}</span>

            <p className={cn("mt-2", colorInverted && "text-background")}>
                {title}
            </p>
            <div className="flex justify-start items-center gap-1 mt-3">
                <span className={cn("text-4xl font-bold", colorInverted && "text-background")}>
                    {price}
                </span>
                <span
                    className="text-sm text-muted-foreground"
                    style={{ display: hidePriceDetail ? "none" : "inline" }}
                >
                    / split one-time payment
                </span>
            </div>
            <div className="flex justify-start items-start gap-4 mt-5   ">
                <span className={cn("p-2 border border-dashed bg-accent/20 mt-1", colorInverted && "bg-secondary/20 border-secondary/70")}>
                    {icon}
                </span>
                <p className={cn("text-sm text-foreground/80", colorInverted && "text-background")}>
                    {description}
                </p>
            </div>
        </div>
    )
}