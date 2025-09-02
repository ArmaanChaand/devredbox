import MDXTableOfContents from "@/components/ui/library-table-of-contents"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { mdxComponents } from "@/mdx-components"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    const params = source.generateParams()
    return params.map(p => ({
        slug: p.slug[1] // The first item is "ui". No need to add this in url again.
    }))
}


export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const mdxPage = source.getPage(["ui", slug])

    if (!mdxPage) {
        notFound()
    }

    const doc = mdxPage.data

    if (!doc.title || !doc.description) {
        notFound()
    }

    return {
        title: doc.title,
        description: doc.description,
        openGraph: {
            title: doc.title,
            description: doc.description,
            type: "article",
            url: absoluteUrl(mdxPage.url),
            images: [
                {
                    url: `/og?title=${encodeURIComponent(
                        doc.title
                    )}&description=${encodeURIComponent(doc.description)}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: doc.title,
            description: doc.description,
            images: [
                {
                    url: `/og?title=${encodeURIComponent(
                        doc.title
                    )}&description=${encodeURIComponent(doc.description)}`,
                },
            ],
            creator: "@devredbox",
        },
    }
}


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
    const MDXData = mdxContent.data
    const MDXBody = mdxContent.data.body;


    return (
        <div className="w-full flex justify-start items-start gap-10">
            <div className="w-full min-h-screen">
                {/* Page Content inside this div */}

                <MDXBody components={mdxComponents} />
            </div>
            <div className="w-60 shrink-0 sticky top-20 hidden xl:block h-fit">
                <MDXTableOfContents toc={MDXData.toc} />
                <div>
                    {/* Here can be Ads */}
                </div>
            </div>
        </div>
    )
}