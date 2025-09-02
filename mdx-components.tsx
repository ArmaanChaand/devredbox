import { cn } from "./lib/utils";

export const mdxComponents = {
    h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
        <h1
            className={cn(
                "font-bold scroll-m-28 text-3xl",
                className
            )}
            {...props}
        />
    ),
}