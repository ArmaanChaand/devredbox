import { SITE_ORIGIN } from '@/lib/info'
import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_ORIGIN,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
            images: [
                SITE_ORIGIN + "/devredbox.png"
            ]
        },
        {
            url: SITE_ORIGIN + "/library",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: SITE_ORIGIN + "/contact",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]
}