"use client"
import { ReactNode } from "react"
import { Separator } from "../ui/separator"
import { motion } from "motion/react"

interface WorkProcessProps {
    icon: ReactNode,
    heading: ReactNode,
    title: ReactNode,
    description: ReactNode,
}

export default function WorkProcess({ icon, heading, title, description }: WorkProcessProps) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-fit md:h-96 flex flex-col gap-4 p-5 sm:p-8 rounded 
            bg-linear-to-br from-background via-secondary/20 via-65% to-background backdrop-blur-lg"
        >

            <span className="p-2 w-fit text-muted-foreground border-2 border-muted/50 rounded bg-background relative z-10">
                <span className="absolute inset-2 rounded-full bg-primary opacity-20 blur-lg -z-10" />
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

        </motion.div>
    )
}