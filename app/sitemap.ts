import { SITE_ORIGIN } from '@/lib/info'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Studio
        {
            url: SITE_ORIGIN,
            images: [
                SITE_ORIGIN + "/devredbox.png"
            ]
        },
        {
            url: SITE_ORIGIN + "/contact",
        },
        
        // Library
        {
            url: SITE_ORIGIN + "/library",
        },
        {
            url: SITE_ORIGIN + "/library/ui",
        },

        // Make this dynamic at some point. 
        {
            url: SITE_ORIGIN + "/library/ui/marquee-animation",
        },
    ]
}