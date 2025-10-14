"use client";
import LibraryUiNavLink from "./library-ui-link";
import type { source } from "@/lib/source"

export default function LibraryUiSideNav({ tree }: { tree: typeof source.pageTree }) {

    return (
        <nav className="text-base lg:text-sm  space-y-8">
            <ul className="hidden md:block">
                <li className="" >
                    <LibraryUiNavLink href="/library/ui">
                        Introduction
                    </LibraryUiNavLink>
                </li>
            </ul>

            {tree.children.map(item => item.$id == "ui" && item.type == "folder" && (
                item.children.map(item => item.type == "folder" && (
                    <ul className="space-y-1.5" id="" key={item.$id}>
                        <span className="block text-muted-foreground">{item.name}</span>
                        {
                            item.children.map(l => l.type === "page" && (
                                <li key={l.$id} >
                                    <LibraryUiNavLink href={"/library" + l.url}>
                                        {l.name}
                                    </LibraryUiNavLink>
                                </li>
                            ))
                        }
                    </ul>
                ))
            ))}
        </nav >
    )
}