import {
    Tabs,
    TabsList,
} from "@/components/ui/tabs"
import { ReactNode } from "react"

interface CodePreviewProps {
    triggers: ReactNode,
    children: ReactNode
}

export default function CodePreview({ triggers, children }: CodePreviewProps) {

    return (
        <Tabs defaultValue={"preview"} className="w-full bg-secondary/50 rounded-xl border gap-0 overflow-hidden my-5">
            <div className="w-full flex justify-between items-center p-3">
                <TabsList className="mr-auto">
                    {triggers}
                </TabsList>
            </div>
            <div className="h-96 bg-background overflow-auto w-full min-w-0 hide-scrollbar text-xs sm:text-base">
                {children}
            </div>
        </Tabs>
    )
}
