export default function TheProblem() {


    return (
        <div className="synced-width mx-auto">
            <section
                className="w-full grid md:grid-cols-2 border rounded-xl md:gap-8"
            >
                <div className="p-5 sm:p-10 space-y-5">
                    <h2 className="text-xl font-bold"> The Founder&apos; Dilemma</h2>
                    <p>You have a SaaS idea that could work. You know the problem. You know who needs it.</p>
                    <p className="mt-8 w-fit text-primary-foreground">
                        <span className="relative inline-block before:absolute before:-inset-1 before:block before:skew-y-1 before:bg-primary/50">
                            <span className="relative">But you&apos;re stuck:</span>
                        </span>
                    </p>
                    <ul className="divide-y">
                        <ListItem >
                            Can&apos;t afford a $50K agency
                        </ListItem>
                        <ListItem >
                            Don&apos;t want to give 30% equity to a technical co-founder
                        </ListItem>
                        <ListItem >
                            Tried freelancers on Upwork — got burned
                        </ListItem>
                        <ListItem >
                            Don&apos;t know what features actually matter for v1
                        </ListItem>
                    </ul>
                    <p>
                        You need someone who understands startups, speaks plain English, and ships fast.
                    </p>
                </div>
                <div className="p-5" >
                    <div className="size-full bg-secondary/20 shadow border border-border/50 rounded-lg">
                        <div className="p-5 space-y-5">
                            <h2 className="text-xl font-bold"> What We Do Differently</h2>
                            <p>
                                We&apos;re not a traditional dev agency. We specialize in ONE thing: SaaS MVPs for validation.
                            </p>
                            <ul className="divide-y">
                                <ListItem solution>
                                    We help you scope ruthlessly (3-5 core features, not 20)
                                </ListItem>
                                <ListItem solution>
                                    We build in Next.js for speed and scalability
                                </ListItem>
                                <ListItem solution>
                                    We deliver in 8-12 weeks, not 6 months
                                </ListItem>
                                <ListItem solution>
                                    We explain everything in founder language, not tech jargon
                                </ListItem>
                            </ul>
                            <p>
                                You get a real product. Users can sign up, use it, and pay for it. Then you decide: scale it, pivot it, or shut it down based on real data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function ListItem({ solution, children, ...props }: React.ComponentProps<'li'> & { solution?: boolean }) {
    return (
        <li className="w-full flex justify-start items-start gap-5 py-3" {...props}>
            {
                solution ? (
                    <svg
                        data-v-15b35c9e=""
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4 mt-1.5 shrink-0"
                    >
                        <circle cx={12} cy={12} r={10} className="fill-green-700 stroke-green-700" />
                        <path d="m12 16 4-4-4-4" className="stroke-foreground" />
                        <path d="M8 12h8" className="stroke-foreground" />
                    </svg>
                ) : (
                    <svg
                        data-v-15b35c9e=""
                        xmlns="http://www.w3.org/2000/svg"
                        width={'100%'}
                        height={'100%'}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4 mt-1.5 shrink-0"
                    >
                        <circle cx={12} cy={12} r={10} className="fill-destructive stroke-destructive" />
                        <path d="m15 9-6 6" className="stroke-foreground" />
                        <path d="m9 9 6 6" className="stroke-foreground" />
                    </svg>
                )
            }
            <p>
                {children}
            </p>
        </li>

    )
}