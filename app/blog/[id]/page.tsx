"use client"

import portfolio from "@public/Assets/portfolio.png"
import style from "../../components/styles.module.scss";
import Image from "next/image";
import blogData from "@/blog/BlogData";
import HeroSection from "@/components/HeroSection";
import { useParams } from "next/navigation";
import emailjs from 'emailjs-com';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogDetail = () => {
    const params = useParams()
    const [formData, setFormData] = useState({
        blog_name: '',
        blog_email: '',        
        blog_comments: ''
    });

    useEffect(() => {
        emailjs.init("hUUTxBactnTc1S5Xa");
    }, []);

    console.log("slug", params);
    const selectedBlog = blogData.find(blog => blog.id === parseInt(params?.id[0]));
    console.log("selectedBlog", selectedBlog);   

    if (!selectedBlog) {        
        return <div>Blog not found</div>;
    }
   

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateAndSendEmail = () => {
        const { blog_name, blog_email, blog_comments } = formData;
        if (!blog_name || !blog_email || !blog_comments) {
            // Handle validation error, maybe show a toast blog_comments
            return;
        }
        sendEmail();
    };

    const sendEmail = () => {
        emailjs.send("service_6tboroy", "template_k6dbrws", formData)
            .then((response) => {
                console.log("Email sent successfully:", response);
                toast.success('Email sent successfully!');
                setFormData({
                    blog_name: '',                    
                    blog_email: '',                   
                    blog_comments: ''
                });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                toast.error('Error sending email. Please try again later.');
            });
    };


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
                            <input type="text" className="p-2 rounded-md w-full" name="blog_name" value={formData.blog_name} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray text-lg font-semibold mb-1">Your Email*</label>
                            <input type="text" className="p-2 rounded-md w-full" name="blog_email" value={formData.blog_email} onChange={handleChange} />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray text-lg font-semibold mb-1">Your Comments*</label>
                            <input type="text" className="p-2 rounded-md w-full" name="blog_comments" value={formData.blog_comments} onChange={handleChange} />
                        </div>
                        <div className="col-span-2 flex justify-center pt-2">
                            <button className="bg-blue px-12 py-3 rounded-md text-white" onClick={validateAndSendEmail}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default BlogDetail;
