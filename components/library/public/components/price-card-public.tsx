const features = [
    "Access to 120+ premium components",
    "All shadcn/ui styles pre-built",
    "Copy – paste & ready-to-use examples",
    "Lifetime updates",
    "Basic documentation",
]

export function PriceCard() {
    return (
        <div
            className="border text-start p-5 rounded-lg w-full sm:max-w-sm border-neutral-300 bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300  dark:border-neutral-800"
        >
            <h3 className="text-lg font-semibold">
                Starter
            </h3>
            <p className="text-neutral-700 dark:text-neutral-400">For individual developers</p>
            <div className="w-full border border-red-600/40 bg-red-600/20 my-4 p-5 rounded-lg">
                <p className="text-xl font-black">
                    $79
                </p>
                <p className="block text-sm text-neutral-700 dark:text-neutral-400">
                    Starting Price. In USD
                </p>
            </div>
            <button
                className="w-full h-9 px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium whitespace-nowrap rounded-md bg-neutral-900 text-neutral-300 hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-100/90 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:pointer-events-none disabled:opacity-50 transition-all my-4"
            >
                Get Started
            </button>
            <div className="text-sm space-y-2">
                <p className="font-semibold">What&apos;s included:</p>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-400">
                    {
                        features.map(feature => (
                            <li key={feature} className="w-full flex justify-start items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 mt-1 shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
                                <span>
                                    {feature}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <hr className="w-full bg-muted my-3 mask-l-from-80% mask-r-from-80%" />
            <p className="text-sm text-neutral-700 dark:text-neutral-400">
                Example: Solo developers building dashboards or SaaS apps.
            </p>
        </div>
    )
}