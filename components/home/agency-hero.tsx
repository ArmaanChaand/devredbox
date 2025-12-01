"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react"
import { ArrowDown } from "lucide-react";


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
                    For Non-Tech Founders
                </motion.p>
                <h1
                    className="text-4xl md:text-6xl 2xl:text-8xl font-bold font-mono text-start sm:text-center"
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
                        Launch Your SaaS MVP
                    </motion.span>
                    {" "}
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
                        Without a Technical Co-Founder
                    </motion.span>
                </h1>

                <motion.p
                    className="text-lg md:text-xl w-full max-w-2xl text-start sm:text-balance sm:text-center leading-relaxed text-muted-foreground [&_span]:text-foreground"
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
                    We help <span>founders</span> turn ideas into market-ready products in <span>8-12 weeks</span>.
                    From feature scoping to live deployment. Built for validation, not perfection.
                </motion.p>

                <motion.div
                    className="w-full sm:w-fit grid sm:grid-cols-2 gap-5 mt-4"
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
                    <Button className="w-56 sm:w-auto sm:flex-1 sm:shrink-0" size="lg" variant="primary" decoration={"ring"} asChild>
                        <a href={meetingLink} target="_blank">
                            Book Free Consultation
                        </a>
                    </Button>
                    <Button className="w-fit sm:w-auto sm:flex-1 sm:shrink-0" size="lg" variant="outline" decoration={"ring"} asChild>
                        <Link href="/contact">
                            See How It Works <ArrowDown className="size-4" />
                        </Link>
                    </Button>
                </motion.div>

                <motion.p
                    className="text-sm w-full max-w-lg text-start sm:text-balance sm:text-center leading-relaxed text-muted-foreground/50"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                >
                    Projects start at $5K • Built with Next.js • Based in Delhi, serving founders globally
                </motion.p>
            </div>

        </section>
    )
}