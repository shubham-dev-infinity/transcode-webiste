import HeroSection from "@/components/HeroSection";
import portfolio from "@public/Assets/portfolio.png"
// import style from "./styles.module.scss";
import style from "../components/styles.module.scss";
import Image from "next/image";
import blogDetail from "@public/Assets/blogDetail.png"

const BlogDetail = () => {
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={portfolio} text={"Blog Detail"} />
            </div>
            <div className="container mx-auto my-10">
                <div className="container mx-auto grid grid-cols-1 gap-4">
                    <Image src={blogDetail} width={1470} height={906.5} alt="blogDetail" />
                </div>
                <div className="mt-10">
                    <p className="text-xl font-extrabold">Welcome to our blog details page, your gateway to in-depth captivating narratives. Dive into thought-provoking articles,and engaging content that goes beyond the surface
                        Whether you seek inspiration, industry trends, or informative guides, this is where knowledge meets curiosity. Explore, discover, and enrich your understanding as we navigate diverse topics, all tailored to ignite your intellect and keep you informed. Join us on this journey of exploration, where every click opens a new world of information, ideas, and inspiration.Embark on a journey of discovery as you delve into our blog&apos;s rich tapestry of content. From the latest trends to expert advice, we curate information that sparks curiosity and fuels your quest for knowledge.</p>
                </div>
                <div className="font-sans p-20">
                    <p className="text-xl text-center">&ldquo;I work with Alguneb Johnl on many projects, he always toldagona exceeds my expectations with his quality work and fastestopa tope service, very smooth and simple communication.&rdquo;</p>
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


