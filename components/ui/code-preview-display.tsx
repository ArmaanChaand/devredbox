import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ReactNode } from "react"
import { IconHtml5, IconReact } from "./icons"
import { Eye } from "lucide-react"
import { ScrollArea, ScrollBar } from "./scroll-area"

interface CodePreviewProps {
    children: ReactNode
    preview?: boolean
    html?: boolean
    tsx?: boolean
}

export function CodePreviewDisplay({ children, preview, html, tsx }: CodePreviewProps) {

    return (
        <Tabs defaultValue={"preview"} className="w-full bg-secondary/50 rounded-xl border gap-0 overflow-hidden my-5">
            <div className="w-full flex justify-between items-center p-3">
                <TabsList
                    className="mr-auto"
                >
                    {
                        preview && <TabsTrigger value="preview" > <Eye /> Preview </TabsTrigger>
                    }
                    {
                        html && <TabsTrigger value="html" > <IconHtml5 /> HTML </TabsTrigger>
                    }
                    {
                        tsx && <TabsTrigger value="tsx" > <IconReact /> TSX </TabsTrigger >
                    }

                </TabsList>
            </div>
            <ScrollArea className="h-96 bg-background overflow-auto w-full min-w-0 hide-scrollbar text-xs sm:text-base">
                {children}
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </Tabs>
    )
}