import Link from "next/link";
import { AgencyMobileMenu } from "@/components/home/agency-mobile-menu";

export default function AgencyHeader() {
    return (
        <header className="w-screen fixed top-0 py-5 z-50 bg-background">
            <div className="flex items-center synced-width mx-auto">
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
                <AgencyMobileMenu />
            </div>
        </header>
    )
}