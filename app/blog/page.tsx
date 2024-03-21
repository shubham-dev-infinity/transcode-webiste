import HeroSection from "@/components/HeroSection";
// import style from "./styles.module.scss";
import style from "../components/styles.module.scss";
import portfolio from "@public/Assets/portfolio.png"
import Image from "next/image";
import blogImage from "./BlogImage";

const Blog = () => {
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={portfolio} text={"Blog"} />
            </div>
            <div className="container mx-auto my-10">
                <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    {blogImage.map((blog, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-2">
                                <a href={blog.link}>
                                    <Image src={blog.image} alt="" className="rounded-t-lg" width={500} height={300} />
                                </a>
                            </div>
                            <div className="p-5 text-left">
                                <a href={blog.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                                <a href={blog.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    See Full Article
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Blog;