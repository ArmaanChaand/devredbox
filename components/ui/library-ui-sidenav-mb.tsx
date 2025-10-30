import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./button"
import { Menu } from "lucide-react"
import { source } from "@/lib/source"
import LibraryUiSideNav from "./library-ui-sidenav"

export default function LibraryUiSidenavMb() {
    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button className="h-[3.25rem] aspect-square" variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="p-5 pt-10">
                <SheetHeader hidden>
                    <SheetTitle />
                    <SheetDescription />
                </SheetHeader>
                <LibraryUiSideNav tree={source.pageTree} />
            </SheetContent>
        </Sheet>
    )
}