import LibraryTopNav from "@/components/ui/library-top-nav";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import LibraryMobileNav from "./library-mb-nav";
import { DevRedBoxLogo } from "./devredbox-logo";
import { DEVREDBOX_GITHUB } from "@/lib/info";
import { IconGitHub } from "./icons";

export default function LibraryHeader() {

    return (
        <header className="z-50 h-fit fixed top-0 w-screen bg-background py-4">
            <div className="library-wrapper  flex justify-end items-center gap-4">
                <Link href="/library" className="mr-auto">
                    <DevRedBoxLogo variant="LIBRARY" />
                </Link>
                <LibraryTopNav />
                <Separator orientation="vertical" className="!h-5 hidden lg:block" />
                <a
                    href={DEVREDBOX_GITHUB}
                    target="_blank"
                    title="DevRedBox GitHub Page"
                    rel="noopener noreferrer"
                    aria-label="Open DevRedBox GitHub in new tab"
                >
                    <IconGitHub />
                </a>
                <Separator orientation="vertical" className="!h-5 lg:hidden" />
                <LibraryMobileNav />
            </div>
        </header>
    )
}