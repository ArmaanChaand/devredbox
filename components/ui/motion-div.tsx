"use client";
import { motion } from "motion/react"

export default function MotionDiv({ ...props }: React.ComponentProps<typeof motion.div>) {


    return (
        <motion.div
            {...props}
        />
    )
}