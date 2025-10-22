import { Metadata } from "next"
import { DEVREDBOX_META_IMAGE } from "./info"



interface StaticMetadataProps {
    title: string
    description: string
    pagePath: string
    keywords: string[]
}

/**
 * 
 * @param title Meta title upto 65 characters
 * @param description Meta description in 80-155 characters
 * @param pagePath Current page with forward slash — "/page/path"
 * @param keywords Releant meta keywords in array of string
 * @returns 
 */
export default function generateStaticMetadata({ title, description, pagePath, keywords }: StaticMetadataProps): Metadata {

    return {
        title: title,
        description: description,
        keywords: keywords,
        openGraph: {
            // Static
            locale: "en_US",
            siteName: "DevRedBox",
            type: "website", // "article" page will use generateMetadata function by nextjs

            // Dynamic
            title: title,
            description: description,
            url: pagePath,
            images: [DEVREDBOX_META_IMAGE],
        },
        alternates: {
            canonical: pagePath
        }
    }
}