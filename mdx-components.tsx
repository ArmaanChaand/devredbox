import { CopyButton } from "./components/ui/button-utils";
import { cn } from "./lib/utils";

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
        
        return (
            <pre
                className={cn(
                    "hide-scrollbar min-w-0 overflow-auto px-4 py-3.5 outline-none max-h-96 relative overflow-x-auto rounded-lg bg-transparent p-4 my-6 border border-foreground/20",
                    className
                )}
                {...props}
            >
                <CopyButton
                    content={__raw__}
                />

                {children}
            </pre>
        )
    },
}
