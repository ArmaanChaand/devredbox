export const MEETING_LINK = process.env.MEETING_LINK || ""
export const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://www.devredbox.in"
export const DEVREDBOX_LOGO_URL = SITE_ORIGIN + "/devredbox.png"
export const DEVREDBOX_META_IMAGE = {
    url: DEVREDBOX_LOGO_URL,
    alt: "DevRedBox",
    width: 8640,
    height: 8640
}
export const AUTHOR_DEVREDBOX = {
    name: "DevRedBox",
    url: process.env.DEVREDBOX_LINKEDIN || SITE_ORIGIN,
}
