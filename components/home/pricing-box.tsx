import { Check } from "lucide-react"
import { Separator } from "../ui/separator"


export interface PricingBoxProps {
    label: string
    title: string
    price: string
    features: string[]
    example: string
}

export default function PricingBox({ label, title, price, features, example }: PricingBoxProps) {
    return (
        <div className="border text-start p-5 rounded-lg">
            <h4 className="text-lg font-semibold">
                {label}
            </h4>
            <p className="text-muted-foreground">{title}</p>
            <p className="w-full border border-primary/20 bg-primary/10 my-4 p-5 rounded-lg">
                <span className="text-xl font-black">
                    {price}
                </span>
                <span className="block text-sm text-muted-foreground">
                    Starting Price. In USD
                </span>
            </p>
            <ul className="text-sm divide-y text-muted-foreground">
                <span className="font-semibold text-foreground">What&apos;s included:</span>
                {
                    features.map(f => (
                        <ListItem key={f}>
                            {f}
                        </ListItem>
                    ))
                }
            </ul>
            <Separator className="mb-3" />
            <p className="text-muted-foreground text-sm">
                {example}
            </p>
        </div>
    )
}

function ListItem({ children, ...props }: React.ComponentProps<'li'>) {
    return (
        <li className="w-full flex justify-start items-start gap-2 py-3" {...props}>
            <Check className="size-3 mt-1 shrink-0" />
            <p>
                {children}
            </p>
        </li>

    )
}
