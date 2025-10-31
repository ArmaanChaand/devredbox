"use client";
import { Copy } from "lucide-react";
import { Button } from "./button";



export function CopyButton({ content }: { content: string }) {

    async function handleClick() {
        try {
            if (!navigator.clipboard) {
                throw new Error('Clipboard API not available');
            }
            await navigator.clipboard.writeText(content);
            // Optional: show success feedback
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            // Optional: show error feedback to user
        }
    }

    return (
        <Button
            onClick={handleClick}
            className="absolute right-4 top-4" variant={"default"}
        >
            <Copy />
        </Button>
    )
}