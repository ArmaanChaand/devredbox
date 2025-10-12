"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "motion/react"


export default function AgencyHero({ meetingLink }: { meetingLink: string }) {

    return (
        <section className="flex justify-center items-center relative overflow-hidden pl-2">
            <div className="synced-width mx-auto flex flex-col justify-center items-start sm:items-center mt-32  mb-20 sm:mb-28 gap-8">
                <motion.p
                    className="text-xs flex justify-center gap-2 items-center p-2 border rounded-md bg-secondary/20"
                    initial={{
                        opacity: 0,
                        translateX: 5
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0
                    }}
                    transition={{
                        delay: 0.6
                    }}
                    viewport={{ once: true }}
                >
                    <Badge className="rounded" >SOON</Badge>
                    Android and iOS Apps
                </motion.p>
                <h1
                    className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-mono text-start sm:text-center"
                >
                    <motion.span
                        initial={{
                            // translateY: 20,
                            opacity: 0
                        }}
                        animate={{
                            // translateY: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                    >
                        Your Vision, Our <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-900 from-5% to-primary to-90% ">{"<Code />"}</span>
                        <span className="lg:hidden">, </span>
                    </motion.span>
                    <motion.span
                        className="lg:block"
                        initial={{
                            translateY: 20,
                            opacity: 0
                        }}
                        animate={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 0.2
                        }}
                        viewport={{ once: true }}
                    >
                        Real Business Impact
                    </motion.span>
                </h1>

                <motion.p
                    className="text-base w-full text-start sm:text-balance sm:text-center leading-relaxed text-foreground/80"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.3
                    }}
                    viewport={{ once: true }}
                >
                    Trusted by ambitious businesses & startups, DevRedBox builds <span className="text-foreground">custom websites</span> and powerful <span className="text-foreground">web apps</span>  that drive growth, and help you confidently lead your industry forward.
                </motion.p>

                <motion.div
                    className="gap-6 flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 mr-auto sm:mr-0"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.4
                    }}
                    viewport={{ once: true }}
                >
                    <Button className="w-56 sm:w-auto sm:flex-1 sm:shrink-0" size="lg" variant="primary" decoration={"ring"} >
                        <a href={meetingLink} target="_blank">
                            Book a Call
                        </a>
                    </Button>
                    <Button className="w-fit sm:w-auto sm:flex-1 sm:shrink-0" size="lg" variant="outline" decoration={"ring"}>
                        <Link href="/contact">
                            See Contact Details
                        </Link>
                    </Button>
                </motion.div>
            </div>

        </section>
    )
}