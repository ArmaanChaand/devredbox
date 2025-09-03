import { DevRedBoxLogo } from "@/components/ui/devredbox-logo";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Articles and Case Studies by DevRedBox",
    description: "Useful dev articles and case studies of projects will be posted here.", // Not better.
}



export default function ArticlesPage() {
    return (
        <>
            <header
                className="w-screen fixed top-0 z-50 bg-background overflow-hidden h-24"
            >
                <div className="flex items-center synced-width mx-auto py-5 relative">
                    <Link href="/" >
                        <DevRedBoxLogo />
                    </Link>
                    <nav className="ml-auto space-x-5 block">
                        <Link className="main-nav-item" href="/">Agency</Link>
                        <Link className="main-nav-item" href="/library">Library</Link>
                    </nav>
                </div>
            </header >
            <main>
                <section className="w-full h-fit overflow-hidden">
                    <div className="mt-40 library-wrapper h-full flex flex-col justify-center items-center gap-7 text-center">
                        <h1 className="text-4xl md:text-6xl font-black">
                            Articles and Case Studies.
                        </h1>
                        <p className="text-sm sm:text-base text-balance w-full xl:w-2/3 text-muted-foreground">
                            Useful dev articles and case studies of projects will be posted here.
                        </p>
                    </div>

                </section>
            </main >
        </>
    )
}