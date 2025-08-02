import { ReactNode } from "react"
import { Separator } from "../ui/separator"

interface WorkProcessProps {
    icon: ReactNode,
    heading: ReactNode,
    title: ReactNode,
    description: ReactNode,
}

export default function WorkProcess({ icon, heading, title, description }: WorkProcessProps) {
    return (
        <div
            className="w-full h-96 flex flex-col gap-3 bg-accent/30 p-5 rounded bg-radial-[at_20%_20%] from-background to-secondary to-90%"
        >
            <span className="p-2 w-fit text-muted-foreground border-2 rounded bg-muted/50">
                {icon}
            </span>
            <h6 className="text-xl font-bold">
                {heading}
            </h6>

            <Separator className=" mask-l-from-80% mask-r-from-80%" />
            <h5 className="text-base font-bold text-muted-foreground">
                {title}
            </h5>
            <p className="text-sm text-muted-foreground ">
                {description}
            </p>

        </div>
    )
}