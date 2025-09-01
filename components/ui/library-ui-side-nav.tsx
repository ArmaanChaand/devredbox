import LibraryUiNavLink from "./library-ui-link";


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

export default function LibraryUiSideNav() {
    return (
        <nav className="text-base lg:text-sm  space-y-8">
            <ul className="space-y-1.5">
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
        </nav>
    )
}