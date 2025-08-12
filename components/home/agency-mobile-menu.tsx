import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { X } from "lucide-react"
import Link from "next/link"
import { HiMenuAlt3 } from "react-icons/hi"

export function AgencyMobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto md:hidden" >
                    <HiMenuAlt3 className="size-5" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-screen sm:max-w-screen bg-background/90 border-none" showCloseBtn={false}>
                <SheetHeader>
                    <SheetTitle hidden />
                    <SheetDescription hidden />
                    <SheetClose className="ml-auto text-muted-foreground cursor-pointer" >
                        <X />
                    </SheetClose>
                </SheetHeader>
                <nav className="flex flex-col mx-auto justify-center items-center gap-5 mt-20">
                    <Link className="main-nav-item-mb" href="/pricing">Pricing</Link>
                    <Link className="main-nav-item-mb" href="/projects">Projects</Link>
                    <Link className="main-nav-item-mb" href="/blog">Blog</Link>
                    <Link className="main-nav-item-mb" href="/blog">Library</Link>
                    <Link className="main-nav-item-mb" href="/blog">Tools</Link>
                </nav>

            </SheetContent>
        </Sheet>
    )
}
