import { GoTriangleDown } from "react-icons/go";

export interface FAQType {
    question: string
    answer: string
}

export default function FAQBox({ question, answer }: FAQType) {
    return (
        <details
            className="cursor-pointer w-full text-start flex flex-col justify-start items-start group py-3"

        >
            <summary className="flex justify-between items-start gap-5 w-full select-none">
                <div>{question}</div>
                <GoTriangleDown className="size-5 transition-all text-muted-foreground group-open:rotate-180  group-open:text-primary" />
            </summary>
            <p className="mt-3 text-muted-foreground">{answer}</p>

        </details>
    )
}