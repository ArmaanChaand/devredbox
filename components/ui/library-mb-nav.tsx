"use client";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import LibraryUiNavLink from "./library-ui-link";
import { usePathname } from "next/navigation";

export default function LibraryMobileNav() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    useEffect(() => {
        document.body.style.overflowY = open ? "hidden" : "auto"
        return () => {
            document.body.style.overflowY = "auto"
        }
    }, [open])
    useEffect(() => {
        setOpen(false)
    }, [pathname])
    return (
        <>
            <Button size={"icon"} className="lg:hidden" onClick={() => setOpen(v => !v)}>
                {open ? <X /> : <Menu />}
            </Button>
            <motion.div
                className="bg-secondary fixed top-0 left-0 -z-10 lg:hidden pt-20"
                initial={false}
                animate={{
                    width: open ? "100vw" : 0,
                    height: open ? "100vh" : 0,
                    opacity: open ? 1 : 0,
                    transition: {
                        default: {
                            duration: 0
                        },
                        opacity: {
                            duration: 0.2
                        }
                    }
                }}
            >
                <div className="library-wrapper h-full overflow-y-auto overflow-x-hidden hide-scrollbar">
                    <nav className="mb-8">
                        <span className="block text-muted-foreground mb-2">Menu</span>
                        <ul className="space-y-2">
                            <li>
                                <LibraryUiNavLink href={"/library"} >
                                    Library
                                </LibraryUiNavLink>
                            </li>
                            <li>
                                <LibraryUiNavLink href={"/library/ui"} >
                                    Components
                                </LibraryUiNavLink>
                            </li>
                            <li>
                                <LibraryUiNavLink href={"/library/templates"} >
                                    Templates
                                </LibraryUiNavLink>
                            </li>
                            <li>
                                <LibraryUiNavLink href={"/articles"} >
                                    Articles
                                </LibraryUiNavLink>
                            </li>
                            <li>
                                <LibraryUiNavLink href={"/"} >
                                    Agency
                                </LibraryUiNavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.div >

        </>
    )
}