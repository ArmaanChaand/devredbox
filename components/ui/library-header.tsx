import LibraryTopNav from "@/components/ui/library-top-nav";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import LibraryMobileNav from "./library-mb-nav";


export default function LibraryHeader() {

    return (
        <header className="z-50 h-fit fixed top-5 w-screen ">
            <div className="library-wrapper  flex justify-end items-center gap-4">
                <Link href="/library" className="text-xl font-black relative mr-auto">
                    Dev_Red_Box
                    <span className="text-[0.5rem] font-semibold p-0.5 rounded bg-foreground text-background absolute -bottom-3 right-0">LIBRARY</span>
                </Link>
                <LibraryTopNav />
                <Separator orientation="vertical" className="!h-5 hidden md:block" />
                <FaGithub />
                <Separator orientation="vertical" className="!h-5 md:hidden" />
                <LibraryMobileNav />
            </div>
        </header>
    )
}