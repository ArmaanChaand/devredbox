import { Metadata } from "next";
import AgencyHeader from "@/components/ui/agency-header";
import Link from "next/link";
import { FaEarthAsia, FaEtsy, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { DevRedBoxLogo } from "@/components/ui/devredbox-logo";
import { DEVREDBOX_META_IMAGE, MEETING_LINK } from "@/lib/info";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import { SiFramer } from "react-icons/si";

const META_TITLE = "Contact DevRedBox – Get in Touch with Our Web Development Team"
const META_DESCRIPTION = "Contact DevRedBox to discuss your website or app project. Our team is here to help you with modern, scalable, and high-performance web solutions"

export const metadata: Metadata = {
    title: META_TITLE,
    description: META_DESCRIPTION,
    keywords: ["Contact DevRedBox", "DevRedBox web design and development agency"],
    openGraph: {
        locale: "en_US",
        siteName: "DevRedBox",
        title: META_TITLE,
        description: META_DESCRIPTION,
        type: "website",
        url: "/contact",
        images: [DEVREDBOX_META_IMAGE],
    },
    alternates: {
        canonical: "/contact"
    }
}

export default function Home() {
    return (
        <>
            <AgencyHeader />
            <main>
                <section className="h-fit mt-20 synced-width mx-auto mb-10">
                    <h1 className="text-8xl font-black">Contact Us</h1>
                    <p className="pl-2 mt-2 w-10/12 text-muted-foreground">
                        You can easily book 
                        {"  "}
                        <a href={MEETING_LINK} target="_blank" className="underline">an online appointment</a>
                        {" "}
                        with our team using the buttons available on the
                        {" "}
                        <Link href="/" className="underline">homepage.</Link>
                        {" "}
                        If you’d prefer, you can also reach out to us directly — whether you’d like more information, want to discuss a project idea, or simply wish to leave a message. Use the contact links provided below to get in touch, and we’ll get back to you as soon as possible.</p>
                </section>
                <section className="synced-width mx-auto mb-20">
                    <div className="w-full grid grid-cols-2 gap-5">
                        <div className="bg-secondary p-5 rounded">
                            <h2 className="text-sm mb-3">Our Socials</h2>
                            <div className="flex justify-start items-center gap-4 bg-accent/20 w-fit rounded relative">
                                <a href="https://www.linkedin.com/company/devredbox/" target="_blank" className="" title="DevRedBox LinkedIn Page">
                                    <FaLinkedinIn className="size-5" />
                                </a>
                                <Separator orientation="vertical" className="!h-3" />
                                <a href="https://www.x.com/devredbox" target="_blank" className="" title="DevRedBox Twitter Page">
                                    <FaXTwitter className="size-5" />
                                </a>
                                <Separator orientation="vertical" className="!h-3" />
                                <a href="https://www.instagram.com/devredbox.india" target="_blank" className="" title="DevRedBox at Instagram">
                                    <FaInstagram className="size-5" />
                                </a>

                            </div>
                        </div>
                        <div className="bg-foreground text-background p-5 rounded block relative overflow-hidden">
                            <div className="text-sm">
                                <h2>Email us at</h2>
                                <a href="mailto:contact@devredbox.in" className="text-xl">
                                    contact@devredbox.in
                                </a>
                            </div>
                            <span className="absolute size-8 right-10 -top-7 text-8xl font-black text-muted/30" >
                                @
                            </span>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-3 mt-5 gap-5">
                        <a href="https://www.youtube.com/@DevRedBox" target="_blank" className="p-5 rounded relative border">
                            <ArrowUpRight className="absolute top-2 right-2 text-muted-foreground" />
                            <FaYoutube className="size-8 text-primary" />
                            <span>DevRedBox on YouTube</span>
                        </a>
                        <div className="p-5 rounded border">
                            <h2 className="mb-3 text-sm">Template Marketplaces</h2>

                            <div className="flex justify-start items-center gap-4 w-fit rounded relative">
                                <a href="#" target="_blank" className="flex gap-2" title="DevRedBox LinkedIn Page">
                                    <FaEtsy className="size-5" />
                                    Etsy Store
                                </a>
                                <Separator orientation="vertical" className="!h-3" />
                                <a href="#" target="_blank" className="flex gap-2" title="DevRedBox LinkedIn Page">
                                    <SiFramer className="size-5" />
                                    Framer
                                </a>
                            </div>
                        </div>
                        <div className="p-5 rounded border">
                            <h2 className="mb-3 text-sm">Additional Links</h2>

                            <div className="flex justify-start items-center gap-4 w-fit rounded relative">
                                <a href="https://github.com/ArmaanChaand/devredbox" target="_blank" className="" title="Explore on GitHub">
                                    <FaGithub className="size-5" />
                                </a>
                                <Separator orientation="vertical" className="!h-3" />
                                <a href={MEETING_LINK} target="_blank" className="" title="Book an appointment">
                                    <IoMdCall className="size-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="synced-width mx-auto relative">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <Link href="/" className="text-xl font-black relative w-fit block">
                                <DevRedBoxLogo variant="AGENCY" svgCn="w-32" />
                            </Link>
                            <div className="flex justify-start items-center gap-4 mt-8">
                                <span className="p-2 border border-dashed bg-accent/20 mt-1 border-secondary/70">
                                    <FaEarthAsia />
                                </span>
                                <p className="text-xs text-foreground/80">
                                    Started in India.
                                    <br />
                                    Empowering ideas worldwide.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 mb-10 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                        <p> Copyright &copy; 2025 DevRedBox Agency </p>
                        <p className="flex justify-between items-center gap-2">
                            <Link href="/" >
                                Privacy Policy
                            </Link>
                            &bull;
                            <Link href="/" >
                                Terms & Conditions
                            </Link>
                        </p>
                    </div>
                </footer >
            </main >
        </>
    );
}
