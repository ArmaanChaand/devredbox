import { SITE_ORIGIN } from '@/lib/info'
import type { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Studio
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
            url: SITE_ORIGIN + "/contact",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        
        // Library
        {
            url: SITE_ORIGIN + "/library",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: SITE_ORIGIN + "/library/ui",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // Make this dynamic 
        {
            url: SITE_ORIGIN + "/library/ui/marquee-animation",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ]
}