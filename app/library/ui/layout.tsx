import LibraryUiSideNav from "@/components/ui/library-ui-sidenav";
import { source } from "@/lib/source";


export default function UIPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="library-wrapper flex justify-start items-start">
            <div className="flex-none shrink-0 hidden lg:block w-52 sticky top-0 h-screen">
                <div className="mt-20 h-full overflow-y-auto hide-scrollbar">
                    <LibraryUiSideNav tree={source.pageTree} />
                </div>
            </div>
            <div className="w-full h-auto mt-20 min-w-0">
                {children}
            </div>
        </div>
    )
}