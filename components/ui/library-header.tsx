import LibraryTopNav from "@/components/ui/library-top-nav";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import LibraryMobileNav from "./library-mb-nav";
import { DevRedBoxLogo } from "./devredbox-logo";


export default function LibraryHeader() {

    return (
        <header className="z-50 h-fit fixed top-0 w-screen bg-background py-4">
            <div className="library-wrapper  flex justify-end items-center gap-4">
                <Link href="/library" className="mr-auto">
                    <DevRedBoxLogo variant="LIBRARY" />
                </Link>
                <LibraryTopNav />
                <Separator orientation="vertical" className="!h-5 hidden lg:block" />
                <FaGithub />
                <Separator orientation="vertical" className="!h-5 lg:hidden" />
                <LibraryMobileNav />
            </div>
        </header>
    )
}