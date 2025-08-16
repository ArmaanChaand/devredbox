"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";

export default function AgencyHeader() {
    const [open, setOpen] = useState(false)

    return (
        <motion.header
            className="w-screen fixed top-0 z-50 bg-background overflow-hidden h-24"
            initial={false}
            animate={{
                height: open ? "100vh" : "5rem",
                background: open ? "var(--secondary)" : "var(--background)"
            }}
            transition={{ ease: "easeInOut" }}
        >
            <div className="flex items-center synced-width mx-auto py-5">
                <Link href="/" className="text-xl font-black relative">
                    Dev_Red_Box
                    <span className="text-[0.5rem] font-semibold p-0.5 rounded bg-foreground text-background absolute -bottom-3 right-0">AGENCY</span>
                </Link>
                <nav className="ml-auto space-x-5 hidden md:block">
                    <Link className="main-nav-item" href="#pricing">Pricing</Link>
                    <Link className="main-nav-item" href="#about">About</Link>
                    <Link className="main-nav-item" href="/blog">Blog</Link>
                    <Link className="main-nav-item" href="/library">Library</Link>
                    <Link className="main-nav-item" href="/blog">Tools</Link>
                </nav>
                <Button onClick={() => setOpen(v => !v)} variant="ghost" size="icon" className="ml-auto md:hidden" >
                    {open ?
                        <X className="size-5" />
                        :
                        <Menu className="size-5" />
                    }
                </Button>
            </div>
            <nav className="mt-10 flex flex-col justify-start items-start synced-width mx-auto gap-1">
                <span className="text-sm font-semibold text-muted-foreground">Agency</span>
                <Link onClick={() => setOpen(false)} className="text-xl" href="#pricing">Pricing</Link>
                <Link onClick={() => setOpen(false)} className="text-xl" href="#about">About</Link>

                <span className="text-sm font-semibold text-muted-foreground mt-5">Library</span>
                <Link className="text-xl" href="/library">Library Home</Link>
                <Link className="text-xl" href="/library">Templates</Link>
                <Link className="text-xl" href="/library">Components</Link>
                <Link className="text-xl" href="/library">Blocks</Link>

                <span className="text-sm font-semibold text-muted-foreground mt-5">
                    External <ArrowUpRight className="size-4 inline mb-1" />
                </span>
                <div className="grid grid-cols-2 gap-2">
                    <Button
                        variant={"secondary"} asChild
                        className="cols-span-1 rounded-sm"
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
                        variant={"secondary"} asChild
                        className="cols-span-1 rounded-sm "
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
                </div>
            </nav>
        </motion.header>
    )
}