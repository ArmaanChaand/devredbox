"use client";
import LibraryUiNavLink from "./library-ui-link";
import type { source } from "@/lib/source"


/**
 * library/ui should list all the links to any blocks or components.
 * It'll appear on top-header and in mobile side-nav. Not in the sidebar.
 */
const ComponentLinks = [
    {
        title: "Marquee Animation",
        href: "/library/ui/marquee",
    },
    {
        title: "FAQ Box",
        href: "/library/ui/faq-box",
    },
]
const BlocksLinks = [
    {
        title: "FAQ Group",
        href: "/library/ui/faq-group",
    },
    {
        title: "Cursor Follower",
        href: "/library/ui/cursor-follower",
    },
]

export default function LibraryUiSideNav({ tree }: { tree: typeof source.pageTree }) {
    const u = tree.children[0]
    if (u.type === "folder") {
        const p = u.children[0]
        if (p.type == "page") {
            console.log(p)
        }
    }
    return (
        <nav className="text-base lg:text-sm  space-y-8">

            {tree.children.map(item => item.$id == "ui" && item.type == "folder" && (
                <ul className="space-y-1.5" key={item.$id}>
                    <span className="block text-muted-foreground">Components</span>
                    {
                        item.children.map(l => l.type === "page" && (
                            <li key={l.$id}>
                                <LibraryUiNavLink href={l.url}>
                                    {l.name}
                                </LibraryUiNavLink>
                            </li>
                        ))
                    }
                </ul>
            ))
            }
            <ul className="space-y-1.5" id="">
                <span className="block text-muted-foreground">Components</span>
                {
                    ComponentLinks.map(l => (
                        <li key={l.href + l.title}>
                            <LibraryUiNavLink href={l.href}>
                                {l.title}
                            </LibraryUiNavLink>
                        </li>
                    ))
                }
            </ul>
            <ul className="space-y-1.5">
                <span className="block text-muted-foreground">Blocks</span>
                {
                    BlocksLinks.map(l => (
                        <li key={l.href + l.title}>
                            <LibraryUiNavLink href={l.href}>
                                {l.title}
                            </LibraryUiNavLink>
                        </li>
                    ))
                }
            </ul>
        </nav >
    )
}