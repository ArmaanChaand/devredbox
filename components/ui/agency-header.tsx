"use client";
import NextLink from "next/link";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { DevRedBoxLogo } from "./devredbox-logo";

const Link = motion.create(NextLink)

export default function AgencyHeader() {
    const [open, setOpen] = useState(false)

    return (
        <motion.header
            className="w-screen fixed top-0 z-50 bg-background overflow-hidden h-24 opacity-0"
            initial={false}
            animate={{
                height: open ? "100vh" : "5rem",
                // background: open ? "var(--secondary)" : "var(--background)"
            }}
            transition={{ ease: "easeInOut" }}
            whileInView={{
                opacity: 1,
                transition: {
                    delay: 1
                }
            }}
        >
            <div className="flex items-center synced-width mx-auto py-5 relative">
                <Link href="/" >
                    <DevRedBoxLogo variant="AGENCY" />
                </Link>
                <nav className="ml-auto space-x-5 hidden md:block">
                    <Link className="main-nav-item" href="#pricing">Pricing</Link>
                    <Link className="main-nav-item" href="#about">About</Link>
                    <Link className="main-nav-item" href="/blog">Blog</Link>
                    <Link className="main-nav-item" href="/library">Library</Link>
                    <Link className="main-nav-item" href="/blog">Tools</Link>
                </nav>
                <Button onClick={() => setOpen(v => !v)} variant="ghost" size="icon" className="ml-auto md:hidden relative z-0" >
                    {open ?
                        <X className="size-5" />
                        :
                        <Menu className="size-5 text-background" />
                    }
                </Button>
                <motion.div className="absolute bg-secondary -z-10 inset-0 md:hidden rounded"
                    animate={{
                        width: open ? "200vw" : 36,
                        height: open ? "100vh" : 36,
                        left: "unset",
                        right: open ? "-35px" : 0,
                        top: open ? 0 : 20,
                        background: open ? "var(--secondary)" : "var(--foreground)",
                        transition: {
                            default: {
                                duration: 0.3
                            },
                            background: {
                                duration: 0.2,
                                ease: "linear"
                            }
                        }
                    }}
                />
            </div>
            <nav className="mt-10 flex flex-col justify-start items-start synced-width mx-auto gap-1">
                <motion.span
                    className="text-sm font-semibold text-muted-foreground"
                    initial={false}
                    animate={{
                        opacity: open ? 1 : 0,
                        translateY: open ? 0 : 20,
                        transition: {
                            delay: 0
                        }
                    }}
                >
                    Agency
                </motion.span>

                <Link
                    onClick={() => setOpen(false)} className="text-xl" href="#pricing"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0
                        }
                    }}
                >
                    Pricing
                </Link>
                <Link
                    onClick={() => setOpen(false)} className="text-xl" href="#about"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.1
                        }

                    }}
                >About</Link>
                <Link
                    className="text-xl" href="/blog"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.2
                        }
                    }}
                >Articles</Link>

                <motion.span
                    className="text-sm font-semibold text-muted-foreground mt-5"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.3
                        }
                    }}

                >Library</motion.span>
                <Link
                    className="text-xl" href="/library"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.4
                        }
                    }}
                >Library Home</Link>
                <Link
                    className="text-xl" href="/library"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.4
                        }
                    }}
                >Templates</Link>
                <Link
                    className="text-xl" href="/library"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.5
                        }
                    }}
                >Components</Link>
                <Link
                    className="text-xl" href="/library"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.6
                        }
                    }
                    }
                >Blocks</Link>

                <motion.span
                    className="text-sm font-semibold text-muted-foreground mt-5"
                    animate={{
                        translateY: open ? 0 : 20,
                        opacity: open ? 1 : 0,
                        transition: {
                            delay: 0.7
                        }
                    }}
                >
                    External <ArrowUpRight className="size-4 inline mb-1" />
                </motion.span>
                <motion.div className="grid grid-cols-2 gap-2 w-full"
                    animate={{
                        opacity: open ? 1 : 0,
                        translateY: open ? 0 : 20,
                        transition: {
                            delay: 0.8
                        }
                    }}
                >
                    <Button
                        className="cols-span-1 rounded-sm"
                        asChild
                    >
                        <a
                            href="/library" target="_blank" title="DevRedBox Etsy Store"
                        >
                            <Image
                                src={"/etsy-icon.svg"}
                                alt="Etsy"
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                            Etsy Store
                        </a>
                    </Button>
                    <Button
                        className="cols-span-1 rounded-sm "
                        asChild
                    >
                        <a
                            href="/library" target="_blank" title="DevRedBox YouTube Channel"
                        >
                            <Image
                                src={"/yt-icon.svg"}
                                alt="YouTube Channel"
                                width={20}
                                height={20}
                            />
                            YT Channel
                        </a>
                    </Button>
                    {/* Third External Link */}
                </motion.div>
            </nav>
        </motion.header >
    )
}