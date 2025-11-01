import {JSON_LD_MAIN_WEB_ID, JSON_LD_ORG_ID, SITE_ORIGIN} from "./info"

// Should only be on the Homepage
export function WebSiteMicrodata() {
    return (
        <div
            itemScope
            itemType="https://schema.org/WebSite"
            itemID={JSON_LD_MAIN_WEB_ID}
        >
            <meta itemProp="name" content="DevRedBox" />
            <link itemProp="url" href={SITE_ORIGIN} />
            <div
                itemScope
                itemProp="publisher"
                itemType="https://schema.org/Organization"
                itemID={JSON_LD_ORG_ID}
            >
            </div>
        </div>
    );
}
