import { SITE_ORIGIN } from '@/lib/info'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // disallow: '/private/',
        },
        sitemap: SITE_ORIGIN + '/sitemap.xml',
    }
}