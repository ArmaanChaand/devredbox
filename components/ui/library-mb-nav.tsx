"use client";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react"
export default function LibraryMobileNav() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button size={"icon"} className="md:hidden" onClick={() => setOpen(v => !v)}>
                <Menu />
            </Button>
            <motion.div
                className="bg-secondary fixed top-0 left-0 -z-10 md:hidden"
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
                <span></span>

            </motion.div>

        </>
    )
}