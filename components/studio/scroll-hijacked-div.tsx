"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "motion/react"

const CARD_Y_PRCNT_START = 1200
const CARD_Y_PRCNT_END = 3600

export default function ScrollHijackedDiv({ ...props }: React.ComponentProps<typeof motion.div>) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const { scrollY } = useScroll()



    const cardYmotion = useTransform(scrollY, [CARD_Y_PRCNT_START, CARD_Y_PRCNT_END], ["0", "-80%"])

    return (
        <motion.div
            style={{
                translateY: isDesktop ? cardYmotion : "0",

            }}
            {...props}
        />
    )
}