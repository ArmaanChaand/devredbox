export const GAID = process.env.GAID || ""
export const MEETING_LINK = process.env.MEETING_LINK || ""
export const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://www.devredbox.in"
export const DEVREDBOX_LOGO_URL = SITE_ORIGIN + "/devredbox.png"
export const DEVREDBOX_META_IMAGE = {
    url: DEVREDBOX_LOGO_URL,
    alt: "DevRedBox",
    width: 8640,
    height: 8640
}
export const AUTHOR_DEVREDBOX = process.env.DEVREDBOX_LINKEDIN || SITE_ORIGIN
export const DEVREDBOX_CONTACT_EMAIL = process.env.DEVREDBOX_CONTACT_EMAIL || "contact@devredbox.in"

export const DEVREDBOX_LINKEDIN = process.env.DEVREDBOX_LINKEDIN || "https://www.linkedin.com/company/devredbox/"
export const DEVREDBOX_TWITTER = process.env.DEVREDBOX_TWITTER || "https://www.linkedin.com/company/devredbox/"
export const DEVREDBOX_IG = process.env.DEVREDBOX_IG || "https://www.instagram.com/devredbox.india/"
export const DEVREDBOX_YT = process.env.DEVREDBOX_YT || "https://www.instagram.com/devredbox.india/"

export const JSON_LD_ORG = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevRedBox",
    "url": SITE_ORIGIN,
    "logo": DEVREDBOX_LOGO_URL,
    "sameAs": [
        DEVREDBOX_LINKEDIN, DEVREDBOX_TWITTER, DEVREDBOX_IG, DEVREDBOX_YT
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": DEVREDBOX_CONTACT_EMAIL,
        "availableLanguage": ["English"]
    }
}
