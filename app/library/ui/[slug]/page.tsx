import { source } from "@/lib/source"
import { notFound } from "next/navigation"

export default async function UiItemPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const mdxContent = source.getPage(["ui", slug])

    if (!mdxContent) {
        notFound()
    }
    const MDX = mdxContent.data.body;


    return (
        <div className="w-full flex justify-start items-start gap-10">
            <div className="w-full min-h-screen">
                {/* Page Content inside this div */}

                <MDX />
            </div>
            <div className="w-60 shrink-0 sticky top-20 hidden xl:block h-fit">
                {/* Table Of Contents Here */}
                <div>
                    {/* Here can be Ads */}
                </div>
            </div>
        </div>
    )
}