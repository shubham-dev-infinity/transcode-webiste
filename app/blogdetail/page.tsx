"use client"
import HeroSection from "@/components/HeroSection";
import portfolio from "@public/Assets/portfolio.png"
// import style from "./styles.module.scss";
import style from "../components/styles.module.scss";
import Image from "next/image";
import blogDetail from "@public/Assets/blogDetail.png"
import blogImage from "@/blog/BlogImage";
import { useParams } from "next/navigation";
import { CgLayoutGrid } from "react-icons/cg";
import { log } from "console";


const BlogDetail = () => {
    const { id } = useParams(); // Get the id parameter from the URL
    // console.log("id", id);

    const selectedBlog = typeof id === 'string' ? blogImage.find(blog => blog.id === parseInt(id)) : null;

    if (!selectedBlog) {
        // Handle case where no blog is found for the given ID
        return <div>Blog not found</div>;
    }
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={portfolio} text={"Blog Detail"} />
            </div>
            <div className="container mx-auto my-10">
                <div className="container mx-auto grid grid-cols-1 gap-4">
                    <Image src={selectedBlog.image} width={1470} height={906.5} alt="blogDetail" />
                </div>
                <div className="mt-10">
                    <p className="text-xl font-extrabold">{selectedBlog.title}</p>
                </div>
                <div className="font-sans p-20">
                    <p className="text-xl text-center">{selectedBlog.content}</p>
                </div>
                <div className="bg-gray mb-14">
                    <h2 className="text-center text-blue text-3xl font-extrabold pt-12">Leave Your Comment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-60">
                        <div>
                            <label className="block text-gray text-lg font-semibold mb-1">Your Name</label>
                            <input type="text" className="p-2 rounded-md w-full" />
                        </div>
                        <div>
                            <label className="block text-gray text-lg font-semibold mb-1">Your Email*</label>
                            <input type="text" className="p-2 rounded-md w-full" />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray text-lg font-semibold mb-1">Your Comments*</label>
                            <input type="text" className="p-2 rounded-md w-full" />
                        </div>
                        <div className="col-span-2 flex justify-center pt-2">
                            <button className="bg-blue px-12 py-3 rounded-md text-white">Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default BlogDetail;
