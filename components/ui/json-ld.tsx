
export function JsonLd({ jsonString }: { jsonString: string }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: jsonString.replace(/</g, '\\u003c'),
            }}
        />
    )
}