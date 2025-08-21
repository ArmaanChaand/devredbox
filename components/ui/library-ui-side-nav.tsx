import LibraryUiNavLink from "./library-ui-link";

const GetStartedLinks = [
    {
        title: "Introduction",
        href: "/library/ui",
    },
    {
        title: "Disclaimer",
        href: "/library/ui/disclaimer",
    },
    {
        title: "GitHub",
        href: "/library/github",
    },
    {
        title: "Figma",
        href: "/library/figma",
    },
]
const ComponentLinks = [
    {
        title: "Marquee Animation",
        href: "/library/ui/marquee-animation",
    },
]

export default function LibraryUiSideNav() {
    return (
        <nav className="text-base lg:text-sm  space-y-2">
            <span className="block text-muted-foreground">Get Started</span>
            <ul className="space-y-2">
                {
                    GetStartedLinks.map(l => (
                        <li key={l.href + l.title}>
                            <LibraryUiNavLink href={l.href} >
                                {l.title}
                            </LibraryUiNavLink>
                        </li>
                    ))
                }
            </ul>
            <span className="block text-muted-foreground mt-8">Components</span>
            <ul>
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
        </nav>
    )
}