import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ListItem({ point, children, className, ...props }: React.ComponentProps<'li'> & { point?: ReactNode }) {
    return (
        <li
            className={cn("w-full flex justify-start items-start gap-2 py-3", className)}
            {...props}
        >
            <span className="mt-1 shrink-0 inline-block [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0">
                {point}
            </span>
            <p>
                {children}
            </p>
        </li>

    )
}