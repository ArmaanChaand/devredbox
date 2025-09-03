import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Templates of NextJs, React, Framer, Webflow and Wordpress",
    description: "Useful dev articles and case studies of projects will be posted here.", // Not better.
}

export default function TemplatesPage() {
    return (
        <section className="w-full h-fit relative z-0 overflow-hidden">
            <div className="mt-40 library-wrapper h-full flex flex-col justify-center items-center gap-7 text-center">
                <h1 className="text-4xl md:text-6xl font-black">
                    Templates will be available soon.
                </h1>
                <p className="text-sm sm:text-base text-balance w-full xl:w-2/3 text-muted-foreground">
                    NextJs, React, Framer, Webflow and Wordpress. Templates of these techs will be available with time.
                </p>
            </div>

        </section>
    )
}