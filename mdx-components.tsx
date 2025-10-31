import { CopyButton } from "./components/ui/button-utils";
import { cn } from "./lib/utils";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Eye } from "lucide-react"
import { FaReact } from "react-icons/fa6"
import CodePreview from "./components/ui/code-preview";

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
                    "min-w-0 w-full overflow-x-auto px-4 py-3.5 hide-scrollbar outline-none relative bg-secondary/20 p-4 mb-6",
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
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Eye,
    FaReact,
    CodePreview,
}
