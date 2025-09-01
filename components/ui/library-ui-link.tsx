"use client";
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LibraryUiNavLink({ className, href, ...props }: React.ComponentProps<typeof Link>) {
    const pathname = usePathname();
    const isActive = pathname.endsWith(href.toString())
    return (
        <Link
            href={href}
            className={cn(className, "text-xl lg:text-base transition-all duration-200 hover:text-primary/90 hover:underline font-medium", {
                "text-primary": isActive
            })}
            {...props}
        />
    )
}