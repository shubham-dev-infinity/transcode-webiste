import React from "react";
import WorkCulture from "./workCulture";

const RetailEcommerce = () => {
    return (
        <main>
            <div className="bg-gray px-4 lg:px-28 pb-12 sm:pb-24 pt-20 sm:pt-44 mb-5 sm:mb-10">
                <div className="container mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Retail & E-commerce Software </h2>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Development</h2>
                    <h4 className="text-lg sm:text-xl text-center py-3 sm:py-6">Crafting a Seamless Retail & E-commerce Experience</h4>
                    <p className="text-sm sm:text-lg text-center px-2 sm:px-40">Transcode Solutions provides retailers with user-friendly, feature-rich e-commerce software development. Effortless integrations and adaptable scalability ensure smooth growth, helping you exceed customer expectations and capture every revenue opportunity.</p>
                    <div className="text-center	  pt-4">
                        <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Talk to an Expert</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-2 sm:p-4">
                <div className="text-center mb-6 sm:mb-12">
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-6 sm:mb-14"><span className="text-blue">Trusted Partner of Over 35 Satisfied Clients</span>, Including Fortune Companies</h3>
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-2 sm:mb-4">Overview</h3>
                    <h6 className="text-sm sm:text-base text-gray font-semibold">Enhance Your Retail & E-commerce with Our Software Solutions</h6>
                    <h6 className="text-sm sm:text-base text-blue font-semibold my-2 sm:my-4">Transcode Solution: Empowering Your Retail & E-commerce Success</h6>
                    <h5 className="text-xs sm:text-xl font-semibold">Embark on a journey of digital transformation with Transcode Solution&apos;s end-to-end retail and e-commerce software development solutions. Our process begins with strategic consulting to craft your winning strategy and extends to expert website development, tailored mobile app creation, B2C expertise, cloud solutions, WooCommerce proficiency, seamless payment gateway integrations, and robust marketplace builds.</h5>
                    <h5 className="text-xs sm:text-xl font-semibold mt-2 sm:mt-6">Transform your product offerings into seamless digital experiences that engage customers and boost revenue. Choose Transcode Solution as your partner for the software solutions driving your retail and e-commerce growth.</h5>
                </div>
                <div className="grid grid-cols-12 gap-2 sm:gap-10 my-4 sm:my-10">
                    {WorkCulture.map((item, index) => (
                        <div key={index} className="col-span-12 md:col-span-6 p-2 bg-gray rounded-3xl">
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 mt-3 sm:mt-6 mb-2 sm:mb-4 ">
                                <div className="col-span-3 sm:col-span-3 flex justify-center">
                                    <div className="relative w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-dark_gray bg-opacity-40 border-4 sm:border-6 border-gray-300 shadow-md overflow-hidden flex items-center justify-center">
                                        {/* Your content here */}
                                    </div>
                                </div>
                                <div className="col-span-9 sm:col-span-9 pr-2">
                                    <h4 className="text-sm sm:text-xl font-semibold pt-1 sm:pt-3">{item.title}</h4>
                                    <p className="text-xs sm:text-base text-gray pt-3 sm:pt-6 pb-4">{item.description}</p>
                                    <button className="bg-blue px-2 sm:px-4 py-1 sm:py-2 rounded-md font-bold text-white mb-1 sm:mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl pb-">{item.buttonText}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center my-4 sm:my-16">
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-2 sm:mb-4">We Offer</h3>
                    <p className="text-sm sm:text-lg font-semibold text-blue py-1 sm:py-3">Our Ecommerce Development Company&apos;s Commitment to Delivering Value</p>
                    <p className="text-xs sm:text-base font-semibold">Experience the breadth of our services, encompassing E-commerce software development, rigorous testing, end-to-end support and maintenance, cloud services, AI solution implementation, and more.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 p-1 sm:p-2 mb-2 sm:mb-6">
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold"><span className="text-blue">Custom Retail & Ecommerce</span> Development</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray py-2 sm:pb-4">Bespoke Digital Stores to Suit Your Brand Identity and Business Objectives. Our Solutions Are Custom-Engineered to Connect With Your Target Audience for an Easy and Seamless Shopping Journey</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Support and <span className="text-blue">Maintenance Services</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray py-2 sm:pb-4">When you first launch the Ecommerce platform we will continue to support you. Our dedication extends to provide ongoing support and maintenance. We will ensure that your storefront is operating at the highest performance level by continuously fine-tuning its capabilities, quickly fixing any problems that occur as well as proactively implementing performance improvements.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Optimized <span className="text-blue">User Experience</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray py-2 sm:pb-4">At the heart of our approach lies an adherence to user-centric design principles, creating an enjoyable shopping journey for our users. Through seamless navigation, refined search capabilities, streamlined checkout processes and striking visual appeal, we prioritize customer satisfaction and drive conversions.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Integration and <span className="text-blue">Upgrading Services</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray py-2 sm:pb-4">Our Ecommerce solutions seamlessly integrate with third-party services and APIs, increasing the capabilities of your platform. In addition, our future-ready services ensure seamless upgrades, accommodating module introductions, and migration from legacy systems to updated versions ensuring the future of your online store.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RetailEcommerce;

