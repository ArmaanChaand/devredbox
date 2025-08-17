import LibraryHeader from "@/components/ui/library-header";

export default function LibraryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LibraryHeader />
            {children}
        </>
    )
}