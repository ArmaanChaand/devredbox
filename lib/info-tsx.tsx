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
            <meta itemProp="description" content="Professional web design and development services for businesses and startups. Also provide Code Library and development tools" />
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
