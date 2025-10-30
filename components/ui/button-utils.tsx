"use client";
import { Copy } from "lucide-react";
import { Button } from "./button";



export function CopyButton({ content }: { content: string }) {

    function handleClick() {

        navigator.clipboard.writeText(content)
    }

    return (
        <Button
            onClick={handleClick}
            className="absolute right-4 top-4" variant={"secondary"}
        >
            <Copy />
        </Button>
    )
}