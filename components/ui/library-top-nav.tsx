import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./button"
import Image from "next/image"
import { DevRedBoxLogo } from "./devredbox-logo"
import { Separator } from "./separator"

export default function LibraryTopNav() {
    return (
        <NavigationMenu viewport={false} className="ml-auto hidden lg:flex">
            <NavigationMenuList className="gap-0">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent className="-left-28">
                        <ul className="grid gap-2 w-[500px] grid-cols-2">
                            <li className="col-span-1">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                        <DevRedBoxLogo variant="STUDIO" svgCn="text-foreground size-[unset]" />
                                        <Separator className="my-2 mask-l-from-80% mask-r-from-80%" />
                                        <p className="text-foreground text-sm leading-tight">
                                            Home for businesses to get their custom websites & apps.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li className="col-span-1">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/library"
                                    >
                                        <DevRedBoxLogo variant="LIBRARY" svgCn="text-foreground size-[unset]" />
                                        <Separator className="my-2 mask-l-from-80% mask-r-from-80%" />
                                        <p className="text-foreground text-sm leading-tight">
                                            Library for fellow developers to build websites with ease.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <div className="col-span-2 grid grid-cols-3 px-1 gap-2">
                                <Button
                                    variant={"secondary"} asChild
                                    className="cols-span-1 rounded-sm"
                                >
                                    <a
                                        href="/library"
                                        target="_blank"
                                        title="DevRedBox Etsy Store"
                                        rel="noopener noreferrer"
                                        aria-label="Open in new tab"
                                        hidden
                                    >
                                        <Image
                                            src={"/etsy-icon.svg"}
                                            alt="Etsy"
                                            width={20}
                                            height={20}
                                            className="rounded-full"
                                        />
                                        Etsy Store
                                    </a>
                                </Button>
                                <Button
                                    variant={"secondary"} asChild
                                    className="cols-span-1 rounded-sm "
                                >
                                    <a
                                        href="/library"
                                        target="_blank"
                                        title="DevRedBox YouTube Channel"
                                        rel="noopener noreferrer"
                                        aria-label="Open in new tab"
                                    >
                                        <Image
                                            src={"/yt-icon.svg"}
                                            alt="YouTube Channel"
                                            width={20}
                                            height={20}
                                        />
                                        YT Channel
                                    </a>
                                </Button>
                                {/* Third External Link */}
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/articles">Articles</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/library/templates">Templates</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/library/ui">Components & Blocks</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
