import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import style from "../components/styles.module.scss"; 
import sitemap from "@public/Assets/sitemap.png";

const Sitemap = () => {
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={sitemap} text={"Blog"} />
            </div>
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-12 gap-8 my-12">
                    <div className="col-span-12 md:col-span-6 border bg-gray p-4">
                        <h2 className="text-blue font-extrabold text-xl">Quick Links</h2>
                        <div className="w-28 h-0.5 bg-blue mb-4"></div>
                        <ul className={style.list_Style}>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6 border bg-gray p-4">
                        <h2 className="text-blue font-extrabold text-xl">Services</h2>
                        <div className="w-20 h-0.5 bg-blue mb-4"></div>
                        <ul className={style.list_Style}>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Sitemap;
