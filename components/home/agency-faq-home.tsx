import { Badge } from "../ui/badge";
import FAQBox, { FAQType } from "../ui/faq-box";

export default function AgencyFAQsHome() {
    return (
        <section className="mt-20 mx-auto synced-width grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="flex flex-col justify-start items-start sm:items-center md:items-start gap-5">
                <Badge variant="link" className="text-sm pl-0" asChild>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                </Badge>
                <p className="text-balance font-bold text-4xl sm:text-5xl">
                    Everything you <br />   need to know
                </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-5">
                <div className="w-full">
                    <span className="text-sm uppercase text-muted-foreground mb-3">General</span>
                    <dl className="w-full divide-y">
                        {AGENCY_FAQs.map(({ question, answer }) => (
                            <FAQBox
                                key={"faq-" + question}
                                question={question}
                                answer={answer}
                            />
                        ))}
                    </dl>
                </div>
            </div>

            <div id="pricing" />
        </section>
    )
}



const AGENCY_FAQs: FAQType[] = [
    {
        question: "What exactly does DevRedBox do?",
        answer: "We design and develop custom websites and web apps that help businesses grow — from simple company sites to full-scale digital platforms."
    },
    {
        question: "What types of businesses do you work with?",
        answer: "We work with startups, small businesses, and growing companies across industries — whether you’re tech-savvy or completely new to digital solutions."
    },
    {
        question: "How long does it take to build a website or app?",
        answer: "Timelines depend on the project’s complexity. Simple websites can take 2–3 weeks, while custom web apps may need 6–12 weeks."
    },
    {
        question: "Will I be able to update the website myself?",
        answer: "Yes. We build with user-friendly tools and can integrate CMS options, so you can easily manage content without needing to code."
    },
]
