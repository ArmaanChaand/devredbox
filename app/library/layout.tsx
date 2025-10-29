import LibraryHeader from "@/components/ui/library-header";

export default function LibraryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LibraryHeader />
            <main> {/* All of the content should be inside the main — The header, content and the table of contents.  */}
                {children}
            </main>
        </>
    )
}