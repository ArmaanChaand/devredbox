import { CopyButton } from "./components/ui/button-copy";
import { cn } from "./lib/utils";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CodePreviewDisplay } from "./components/ui/code-preview-display";
import ComponentPreview from "./components/library/component-preview";
import { extractHashSections } from "./lib/string-utils";
import { Separator } from "./components/ui/separator";

export const mdxComponents = {
    h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
        <h1
            className={cn(
                "text-2xl sm:text-3xl font-extrabold",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
        <h2
            className={cn(
                "text-lg font-semibold sm:text-xl mt-8 mb-2",
                className
            )}
            {...props}
        />
    ),
    p: ({ className, ...props }: React.ComponentProps<"p">) => (
        <p
            className={cn(
                "mt-2 p-content",
                className
            )}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
        <ul
            className={cn(
                "mt-2 p-content list-disc pl-5",
                className
            )}
            {...props}
        />
    ),
    li: ({ className, ...props }: React.ComponentProps<"li">) => (
        <li
            className={cn(
                "mt-1 p-content",
                className
            )}
            {...props}
        />
    ),
    pre: ({ className, children, __raw__, ...props }: React.ComponentProps<"pre"> & { __raw__: string }) => {
        const processed = extractHashSections(__raw__)
        return (
            <pre
                className={cn(
                    "min-w-full w-fit px-4 py-3.5 outline-none bg-secondary/20 p-4 mb-6",
                    className
                )}
                {...props}
            >

                <div className="sticky top-3 w-full bg-background border flex justify-start gap-5 items-center text-muted-foreground px-5 mb-2 shadow">
                    <span>{processed.extracted}</span>
                    <Separator orientation="vertical" className="!h-4" />
                    <CopyButton
                        content={__raw__}
                    />
                </div>
                {children}
            </pre>
        )
    },
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    CodePreviewDisplay,
    ComponentPreview
}
