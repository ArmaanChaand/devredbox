"use client";
import { Check, Copy } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";



export function CopyButton({ content }: { content: string }) {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }
    }, [copied])

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
        } finally {
            setCopied(true)
        }
    }

    return (
        <Button
            onClick={handleClick}
            variant={"ghost"}
            size={"sm"}
            className="!px-2 !h-fit py-2"
        >
            {copied ? <Check /> : <Copy />}
        </Button>
    )
}

