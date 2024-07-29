"use client"

import React, { useState } from "react";
import WorkCulture from "./workCulture";
import growth from "./growth";
import hiringModel from "./hiringModel"
import style from "./styles.module.scss"
import FrontEndTable from "@/utils/FrontEndTable";
import Image from "next/image";
import development from "./development";
import retail_ecommerce from "@public/Assets/retail_ecommerce.png"
import Card from "@/components/Card";
import TechnologyTabs from "@/utils/TechnologyTabs";
import TechnologyUiuxTabs from "@/utils/TechnologyUiuxTabs";
import TechnologyMobileTabs from "@/utils/TechnologyMobileTabs";
import TechnologyDatabaseTabs from "@/utils/TechnologyDatabaseTabs";

const RetailEcommerce = () => {   
    const [activeTab, setActiveTab] = useState<string>('webdevelopment');
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    return (
        <main>
            <div className={style.heroBgImage}>
                <div className="px-4 lg:px-28 pb-12 sm:pb-52 pt-20 sm:pt-64 mb-5 sm:mb-10 text-white">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Retail & E-commerce Software </h2>
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Development</h2>
                        <h4 className="text-lg sm:text-xl text-center py-3 sm:py-6">Crafting a Seamless Retail & E-commerce Experience</h4>
                        <p className="text-sm sm:text-lg text-center px-2 sm:px-40">Transcodezy  Solutions provides retailers with user-friendly, feature-rich e-commerce software development. Effortless integrations and adaptable scalability ensure smooth growth, helping you exceed customer expectations and capture every revenue opportunity.</p>
                        <div className="text-center	  pt-4">
                            <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Talk to an Expert</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2 sm:px-4">
                <div className="text-center mb-6 sm:mb-12">
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-6 sm:mb-14"><span className="text-blue">Trusted Partner of Over 35 Satisfied Clients</span>, Including Fortune Companies</h3>
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-2 sm:mb-4">Overview</h3>
                    <h6 className="text-sm sm:text-base text-gray font-semibold">Enhance Your Retail & E-commerce with Our Software Solutions</h6>
                    <h6 className="text-sm sm:text-base text-blue font-semibold my-2 sm:my-4">Transcodezy  Solution: Empowering Your Retail & E-commerce Success</h6>
                    <h5 className="text-xs sm:text-xl font-semibold">Embark on a journey of digital transformation with Transcodezy  Solution&apos;s end-to-end retail and e-commerce software development solutions. Our process begins with strategic consulting to craft your winning strategy and extends to expert website development, tailored mobile app creation, B2C expertise, cloud solutions, WooCommerce proficiency, seamless payment gateway integrations, and robust marketplace builds.</h5>
                    <h5 className="text-xs sm:text-xl font-semibold mt-2 sm:mt-6">Transform your product offerings into seamless digital experiences that engage customers and boost revenue. Choose Transcodezy  Solution as your partner for the software solutions driving your retail and e-commerce growth.</h5>
                </div>
                <div className="grid grid-cols-12 gap-2 sm:gap-10 my-4 sm:my-10">
                    {WorkCulture.map((item, index) => (
                        <div key={index} className="col-span-12 md:col-span-6 p-2 bg-gray rounded-3xl">
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 mt-3 mb-2 sm:mb-4">
                                <div className="col-span-3 sm:col-span-3 pl-4 flex justify-center">
                                    <div className="relative w-20 h-20 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue border-gray shadow-md flex items-center justify-center">
                                        <Image src={item.image} alt={item.title} className="w-full h-full object-none" />
                                    </div>
                                </div>
                                <div className="col-span-9 sm:col-span-9 pr-2">
                                    <h4 className="text-sm sm:text-xl font-semibold pt-1 sm:pt-3">{item.title}</h4>
                                    <p className="text-xs sm:text-base text-gray pt-3 sm:pt-6 pb-4">{item.description}</p>
                                    <button className="bg-blue text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded-md font-bold text-white mb-1 sm:mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl pb-">{item.buttonText}</button>
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
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Custom Retail & Ecommerce</span> Development</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Bespoke Digital Stores to Suit Your Brand Identity and Business Objectives. Our Solutions Are Custom-Engineered to Connect With Your Target Audience for an Easy and Seamless Shopping Journey</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Support and <span className="text-blue">Maintenance Services</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-sm sm:text-base text-gray py-2 sm:pb-4">When you first launch the Ecommerce platform we will continue to support you. Our dedication extends to provide ongoing support and maintenance. We will ensure that your storefront is operating at the highest performance level by continuously fine-tuning its capabilities, quickly fixing any problems that occur as well as proactively implementing performance improvements.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Optimized <span className="text-blue">User Experience</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">At the heart of our approach lies an adherence to user-centric design principles, creating an enjoyable shopping journey for our users. Through seamless navigation, refined search capabilities, streamlined checkout processes and striking visual appeal, we prioritize customer satisfaction and drive conversions.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Integration and <span className="text-blue">Upgrading Services</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Our Ecommerce solutions seamlessly integrate with third-party services and APIs, increasing the capabilities of your platform. In addition, our future-ready services ensure seamless upgrades, accommodating module introductions, and migration from legacy systems to updated versions ensuring the future of your online store.</p>
                    </div>
                </div>
                <div className="text-center mt-4 sm:mt-8 mb-4 sm:mb-16">
                    <button className="bg-blue px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-md font-bold text-white mb-1 sm:mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcodezy </button>
                </div>
                <div className="text-center">
                    <h3 className="text-lg sm:text-2xl font-extrabold pb-4">Technologies</h3>
                    <h3 className="text-blue text-base sm:text-xl"> Technologies & Platforms We Engage With</h3>
                </div>               
                <div className="mb-10 text-center border-gray-200 dark:border-gray-700">
                    <ul className="mb-2 flex flex-wrap text-sm font-medium text-center justify-center" id="default-tab" role="tablist">
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'webdevelopment' ? 'border-b-4 border-blue' : 'border-transparent'}`}
                                id="webdevelopment-tab"
                                data-tabs-target="#webdevelopment"
                                type="button"
                                role="tab"
                                aria-controls="webdevelopment-content" // Updated ID to match corresponding content
                                aria-selected={activeTab === 'webdevelopment' ? 'true' : 'false'} // Converted to string value
                                onClick={() => handleTabClick('webdevelopment')}
                            >
                                Web Development
                            </button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'mobiledevelopment' ? 'border-b-4 border-blue' : 'border-transparent'}`}
                                id="mobiledevelopment-tab"
                                data-tabs-target="#mobiledevelopment"
                                type="button"
                                role="tab"
                                aria-controls="mobiledevelopment"
                                aria-selected={activeTab === 'mobiledevelopment'}
                                onClick={() => handleTabClick('mobiledevelopment')}
                            >
                                Mobile Development
                            </button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'database' ? 'border-b-4 border-blue' : 'border-transparent'}`}
                                id="database-tab"
                                data-tabs-target="#database"
                                type="button"
                                role="tab"
                                aria-controls="Database"
                                aria-selected={activeTab === 'database'}
                                onClick={() => handleTabClick('database')}
                            >
                                Database
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'UI/UX Design' ? 'border-b-4 border-blue' : 'border-transparent'}`}
                                id="UI/UX Design-tab"
                                data-tabs-target="#UI/UX Design"
                                type="button"
                                role="tab"
                                aria-controls="UI/UX Design"
                                aria-selected={activeTab === 'UI/UX Design'}
                                onClick={() => handleTabClick('UI/UX Design')}
                            >
                                UI/UX Design
                            </button>
                        </li>
                    </ul>
                    {activeTab === 'webdevelopment' && <TechnologyTabs />}
                    {activeTab === 'UI/UX Design' && <TechnologyUiuxTabs />}
                    {activeTab === 'mobiledevelopment' && <TechnologyMobileTabs />}
                    {activeTab === 'database' && <TechnologyDatabaseTabs />}
                </div>
                <div className="text-center">
                    <button className=" bg-blue text-white text-sm sm:text-lg rounded-lg p-2 mt-4">Schedule a Developers Interview</button>
                </div>
                <div className="text-center mb-4 mt-6 sm:mt-16">
                    <h3 className="text-lg sm:text-2xl font-extrabold">Overview</h3>
                    <p className="text-gray text-sm sm:text-lg py-4">Enhance Your Retail & E-commerce with Our Software Solutions</p>
                    <p className="text-blue text-sm sm:text-lg">Transcodezy  Solution: Empowering Your Retail & E-commerce Success</p>
                    <h3 className="text-base sm:text-xl font-extrabold py-5">Embark on a journey of digital transformation with Transcodezy  Solution &apos;s end-to-end retail and e-commerce software development solutions. Our process begins with strategic consulting to craft your winning strategy and extends to expert website development, tailored mobile app creation, B2C expertise, cloud solutions, WooCommerce proficiency, seamless payment gateway integrations, and robust marketplace builds.</h3>
                    <h3 className="text-base sm:text-xl font-extrabold ">Transform your product offerings into seamless digital experiences that engage customers and boost revenue. Choose Transcodezy  Solution as your partner for the software solutions driving your retail and e-commerce growth.</h3>
                </div>
                <div className="grid grid-cols-12 gap-6 sm:gap-10 my-4 sm:my-10">
                    {growth.map((item, index) => (
                        <div key={index} className="col-span-12 md:col-span-4 p-2 bg-gray rounded-3xl">
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 mt-3 mb-2 sm:mb-4">
                                <div className="col-span-3 sm:col-span-3 pl-4 flex justify-center">
                                    <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden border-2 border-blue border-gray shadow-md flex items-center justify-center">
                                        <Image src={item.image} alt={item.title} className="w-full h-full object-none" />
                                    </div>
                                </div>
                                <div className="col-span-8 sm:col-span-8 ">
                                    <h4 className="text-base sm:text-lg text-blue font-semibold pt-1 pl-6 sm:pt-3">{item.title}</h4>
                                    <ul className="list-disc pl-10">
                                        <li className="text-xs sm:text-sm">
                                            {item.list1}
                                        </li>
                                        <li className="text-xs sm:text-sm">
                                            {item.list2}
                                        </li>
                                        <li className="text-xs sm:text-sm">
                                            {item.list3}
                                        </li>
                                        <li className="text-xs sm:text-sm">
                                            {item.list4}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 sm:mt-16">
                    <h3 className="text-base sm:text-2xl text-center font-extrabold pb-2 sm:pb-4">Hiring Process - A Three-Day Journey</h3>
                    <p className="text-center text-sm sm:text-base text-gray">Develop Your Retail & E-commerce Software in 5 Simple Steps with Our Expert Developers</p>
                    <p className="text-center text-sm sm:text-base text-blue py-3 sm:py-6">Experience a 7-Day Trial Period for Full Satisfaction with Your Resource*.</p>
                    <div className="flex justify-center items-center">
                        <div className="max-w-screen-lg w-full">
                            <Image src={retail_ecommerce} alt="retail_ecommerce" width={926} height={926} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-center font-extrabold text-base sm:text-2xl">Adaptable Hiring Model for Retail & E-commerce Software</h3>
                        <h3 className="text-center font-extrabold text-base sm:text-2xl">Development</h3>
                    </div>
                    <div className="grid grid-cols-12 gap-6 sm:gap-10 my-4 sm:my-10">
                        {hiringModel.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-3 pl-4 pt-4 bg-gray rounded-3xl">
                                <div className="flex">
                                    <div className="col-span-6 md:col-span-3 sm:col-span-3">
                                        <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden border-2 border-blue border-gray shadow-md flex items-center justify-center">
                                            <Image src={item.image} alt={item.title} className="w-full h-full object-none" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h4 className="text-sm sm:text-base text-blue font-semibold pt-1 pl-4 sm:pt-7">{item.title}</h4>
                                    </div>
                                </div>
                                <div className="col-span-8 sm:col-span-8 pl-6 pt-3 mb-4">
                                    <ul className="list-disc">
                                        <li className="sm:text-sm text-base font-extrabold">
                                            {item.list1}
                                        </li>
                                        <li className="sm:text-sm text-base font-extrabold">
                                            {item.list2}
                                        </li>
                                        {item.list3 && (
                                            <li className="sm:text-sm text-base font-extrabold">
                                                {item.list3}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-center font-extrabold text-xl sm:text-3xl mb-2 sm:mb-10 mt-0 sm:mt-5">Case Studies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-20">
                        <Card title="VoestAPPen App" />
                        <Card title="Quadmaps" />
                        <Card title="Ready Freddy" />
                    </div>
                </div>
                <div>
                    <h3 className="text-center text-lg sm:text-2xl font-extrabold mt-0 sm:mt-14">Why Us</h3>
                    <h3 className="text-center text-lg sm:text-2xl text-gray">Why Clients Trust Us for Retail & E-commerce Software Development?</h3>
                    <div className="grid grid-cols-6 gap-6 sm:gap-20 my-4 sm:my-10">
                        {development.map((item, index) => (
                            <div key={index} className={`pt-4 bg-gray rounded-3xl col-span-6 sm:col-span-2  ${(index === development.length - 2 || index === development.length - 1) ? 'col-start-0 col-span-6 sm:col-start-2 sm:col-span-2' : ' col-span-6 sm:col-span-2'
                                } ${index === development.length - 1 ? 'col-start-0 col-span-2 sm:col-start-4 sm:col-span-2' : ''
                                }`}>
                                <div className="flex">
                                    <div className="col-span-6 md:col-span-3 sm:col-span-3 pl-28 md:pl-12 lg:pl-20 xl:pl-32">
                                        <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-gray shadow-md flex items-center justify-center">
                                            <Image src={item.image} alt={item.title} className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8 sm:col-span-8 pt-3 mb-10 px-4">
                                    <h4 className="text-center text-base sm:text-lg font-extrabold pt-1">{item.title}</h4>
                                    <p className="text-center text-sm sm:text-lg">
                                        {item.list1}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 p-6 rounded-3xl shadow-md pb-4 mb-10">
                    <div>
                        <h2 className="text-xl font-extrabold">Meet Our Expert</h2>
                        <p className="mt-2 text-lg font-extrabold">Arpit N.</p>
                        <p className="text-lg font-medium">Company Owner</p>
                        <p className="mt-4 text-lg">
                            We always strive to deliver the most impactful business solutions to achieve the greatest value for sellers and customers. Talk to us, and let&apos;s create your eCommerce platforms together to boost your offline & online sales.
                        </p>
                    </div>
                    <div className="bg-gray rounded-3xl flex items-center justify-center">
                        {/* Placeholder for image or additional content */}
                        {/* <Image
                            src={Converted}
                            alt="email"
                            className="rounded-full"
                        /> */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RetailEcommerce;

