import { FaAndroid, FaPython, FaReact, FaWix, FaWordpress, FaFlutter, FaWebflow, FaApple, FaChrome } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";


export default function BrandsShowcase() {
    return (
        <section
            className="synced-width mx-auto text-muted-foreground/90 overflow-hidden mask-l-from-80% mask-r-from-80% border-y py-10"
            id="about"
        >
            <div
                className="flex gap-16 justify-center items-center w-max animate-showcase"
            >
                <BrandIcons />
                <BrandIcons isDuplicate />
            </div>
        </section>
    )
}

function BrandIcons({ isDuplicate }: { isDuplicate?: boolean }) {
    return (
        <>
            <FaReact className="shrink-0 size-8" aria-hidden={isDuplicate} />
            <SiDjango className="shrink-0 size-8" aria-hidden={isDuplicate} />
            <FaPython className="shrink-0 size-8" aria-hidden={isDuplicate} />
            <RiNextjsFill className="shrink-0 size-8" aria-hidden={isDuplicate} />
            <FaWix className="shrink-0 size-8" aria-hidden={isDuplicate} />
            <FaWebflow className="shrink-0 size-8" aria-hidden={isDuplicate} />
            <FaWordpress className="shrink-0 size-7" aria-hidden={isDuplicate} />
            <FaChrome className="shrink-0 size-7" aria-hidden={isDuplicate} />
            <FaFlutter className="shrink-0 size-7 hidden" aria-hidden={isDuplicate} />
            <FaAndroid className="shrink-0 size-8 hidden" aria-hidden={isDuplicate} />
            <FaApple className="shrink-0 size-8 hidden" aria-hidden={isDuplicate} />
        </>
    )
}