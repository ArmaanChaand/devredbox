import { Check } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
    "Access to 120+ premium components",
    "All shadcn/ui styles pre-built",
    "Copy – paste & ready-to-use examples",
    "Lifetime updates",
    "Basic documentation",
]

export function PriceCardCn() {
    
    return (
        <Card className="border text-start rounded-lg max-w-sm">
            <CardHeader>
                <CardTitle>
                    <h4 className="text-lg font-semibold">
                        Starter
                    </h4>
                </CardTitle>
                <CardDescription>
                    <p className="text-muted-foreground">For individual developers</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="w-full border border-primary/20 bg-primary/10 p-5 rounded-lg">
                    <span className="text-xl font-black">
                        $79
                    </span>
                    <span className="block text-sm text-muted-foreground">
                        Starting Price. In USD
                    </span>
                </p>
                <Button className="w-full my-5">
                    Get Started
                </Button>
                <ul className="text-sm space-y-2 text-muted-foreground">
                    <span className="font-semibold text-foreground block">What&apos;s included:</span>
                    {
                        features.map(feature => (
                            <li className="w-full flex justify-start items-start gap-2" key={feature}>
                                <Check className="size-3 mt-1 shrink-0" />
                                <p>
                                    {feature}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </CardContent>
            <Separator className="mask-l-from-80% mask-r-from-80%" />
            <CardFooter>
                <p className="text-muted-foreground text-sm">
                    Example: Solo developers building dashboards or SaaS apps.
                </p>
            </CardFooter>
        </Card>
    )
}