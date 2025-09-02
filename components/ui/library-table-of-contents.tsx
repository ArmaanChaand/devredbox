"use client";

import Link from "next/link";
import { ReactNode, useEffect, useMemo, useState } from "react";

interface MDXTableOfContentsProps {
    toc: {
        title?: ReactNode,
        url: string,
        depth: number
    }[]
}

export default function MDXTableOfContents({ toc }: MDXTableOfContentsProps) {
    const itemIds = useMemo(
        () => toc.map((item) => item.url.replace("#", "")),
        [toc]
    )
    const activeHeading = useActiveItem(itemIds)
    return (
        <div className="text-sm text-muted-foreground flex flex-col justify-start items-start gap-2">
            <p>On this page</p>
            {
                toc.map(t => (
                    <Link
                        key={t.url}
                        href={t.url}
                        className="toc-link"
                        data-onpage={t.url === `#${activeHeading}`}
                        data-depth={t.depth}
                    >
                        {t.title}
                    </Link>
                ))
            }
        </div>
    )
}


function useActiveItem(itemIds: string[]) {
    const [activeId, setActiveId] = useState<string | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                }
            },
            { rootMargin: "0% 0% -80% 0%" }
        )

        for (const id of itemIds ?? []) {
            const element = document.getElementById(id)
            if (element) {
                observer.observe(element)
            }
        }

        return () => {
            for (const id of itemIds ?? []) {
                const element = document.getElementById(id)
                if (element) {
                    observer.unobserve(element)
                }
            }
        }
    }, [itemIds])

    return activeId
}
