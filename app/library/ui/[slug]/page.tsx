import MDXTableOfContents from "@/components/ui/library-table-of-contents"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { mdxComponents } from "@/mdx-components"
import { notFound } from "next/navigation"

/**
 Check type=article for the article page.
 And necessary fields like — author, published time 
 
 */


export function generateStaticParams() {
    const sourceParams = source.generateParams()

    const params = sourceParams.filter(p => p.slug[0] === "ui").map(p => ({
        slug: p.slug[1]
    })) // Only generating SSG for mdx in "ui" folder.

    return params
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
    const pagePath = absoluteUrl( "/library" + mdxPage.url)

    return {
        title: doc.title,
        description: doc.description,
        openGraph: {
            locale: "en_US",
            siteName: "DevRedBox",
            title: doc.title,
            description: doc.description,
            type: "article",
            url: pagePath,
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
        alternates: {
            canonical: pagePath
        }
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