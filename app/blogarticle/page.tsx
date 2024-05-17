import blogItems from "./BlogCard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const BlogDetailPage = () => {
    const router = useRouter();
    const handleShowMoreClick = (id: any) => {
        router.push(`/blogarticle/${id}`);
    };
    return(
        <div>
            <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-2 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-4 2xl:mt-8 sm:text-left">
                {blogItems.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105"
                        data-aos="zoom-in-up"
                        data-aos-delay={(index + 1) * 100}
                    >
                        <div className="p-2">
                            <Link href={blog.link} className="custom-hover">
                                <Image src={blog.image} alt="" className="rounded-t-lg" width={500} height={300} />
                            </Link>
                        </div>
                        <div className="px-2 sm:p-4 text-left">
                            <p className="mb-2  text-base font-normal text-gray">{blog.date}</p>
                            <p className="mb-2 text-xs sm:text-sm sm:mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                            <button onClick={() => handleShowMoreClick(blog.id)} className="inline-flex items-center mb-1 sm:mb-0 px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-white hover:text-blue hover:border-blue border hover:border-solid">
                                See Full Article
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogDetailPage;