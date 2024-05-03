"use client"

import portfolio from "@public/Assets/portfolio.png"
import style from "../../components/styles.module.scss";
import Image from "next/image";
import blogData from "@/blog/BlogData";
import HeroSection from "@/components/HeroSection";
import { useParams } from "next/navigation";

const BlogDetail = () => {
    const params = useParams()
    console.log("slug", params);
    const selectedBlog = blogData.find(blog => blog.id === parseInt(params?.id[0]));
    console.log("selectedBlog", selectedBlog);   

    if (!selectedBlog) {        
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
                    <p className="text-xl text-center font-extrabold">{selectedBlog.title}</p>
                </div>
                <div className="font-sans mt-2">
                    <p className="text-xl text-center">{selectedBlog.content}</p>
                </div>
                <div className="bg-gray mt-8 mb-14">
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
