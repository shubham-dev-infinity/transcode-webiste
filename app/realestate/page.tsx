
'use client'

import Link from "next/link";
import style from "../travelhospitality/styles.module.scss"
import Image from "next/image";
import development from "./development"
import TechnologyTabs from "@/utils/TechnologyTabs";
import TechnologyUiuxTabs from "@/utils/TechnologyUiuxTabs";
import TechnologyMobileTabs from "@/utils/TechnologyMobileTabs";
import TechnologyDatabaseTabs from "@/utils/TechnologyDatabaseTabs";
import { useState } from "react";
import DevelopmentProcess from "./DevelopmentProcess"
import HiringProcessTravel from "@public/Assets/HiringProcessTravel.png"
import hiringModel from "./hiringModel"
import SoftwareDevelopment from "./SoftwareDevelopment"

const RealEstate = () => {
    const [activeTab, setActiveTab] = useState<string>('webdevelopment');
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    return (
        <main>
            <div className={style.heroBgImage}>
                <div className="px-4 lg:px-28 pb-12 sm:pb-52 pt-20 sm:pt-64 mb-5 sm:mb-10 text-white">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Real Estate Software Development Services</h2>
                        <p className="text-base sm:text-xl font-semibold mt-4">We create real estate software solutions that connect businesses with their customers, streamlining property management, transactions, and data tracking for smooth real estate operations.</p>
                        <div className="text-center pt-4">
                            <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcode→</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="text-center mb-4 sm:mb-12">
                    <h3 className="text-xl sm:text-3xl font-extrabold">Overview</h3>
                    <p className="text-base sm:text-xl font-semibold my-1 sm:my-8 text-gray">Custom Real Estate Software Development</p>
                    <p className="font-semibold text-sm sm:text-lg my-1 sm:my-6">Revolutionize the process of buying, selling, and renting real estate properties by developing your custom real estate software solutions. Whether you need a CRM system to manage leads, a website to showcase listings, or a mobile app for convenient property searches, we can tailor a solution to your specifications.
                    </p>
                    <p className="font-semibold text-sm sm:text-lg my-1 sm:my-6">From startups to established enterprises, our secure and flexible real estate solutions enable seamless digital transformation. Find the right real estate solution for your business today, whether you&apos;re focusing on local operations or expanding globally.</p>
                    <p className="font-semibold text-sm sm:text-lg my-1 sm:my-6">Our software adheres to industry regulations, ensuring your data remains safe and secure. With ongoing support, you can count on us to provide assistance whenever you need it.</p>
                    <button className="bg-blue px-4 py-2 rounded-md font-bold text-white lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Free Consultation</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20 my-4 sm:my-10">
                    {development.map((item, index) => (
                        <div key={index} className="pt-4 bg-gray rounded-3xl">
                            <div className="flex">
                                <div className=" pl-28 sm:pl-24 md:pl-28 lg:pl-44 xl:pl-60">
                                    <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-gray shadow-md flex items-center justify-center">
                                        <Image src={item.image} alt={item.title} className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-8 sm:col-span-8 pt-3 mb-10 px-4">
                                <h4 className="text-center text-base sm:text-lg font-extrabold pt-1 ">{item.title}</h4>
                                <p className="text-center text-sm sm:text-base">
                                    {item.list1}
                                </p>
                                <p className="text-center text-sm sm:text-base mt-1 sm:mt-4">
                                    {item.list2}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mb-1 sm:mb-4">
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-2 sm:mb-4">Overview</h3>
                    <h6 className="text-sm sm:text-base text-blue font-semibold">The Value We Provide in the Real Estate Industry</h6>
                    <h6 className="text-sm sm:text-base font-semibold my-2 sm:my-4">From real estate software development to seamless functionality, continuous support, secure cloud storage, and AI solutions, we offer a comprehensive range of real estate services tailored to meet all your needs.</h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 p-1 sm:p-2 mb-2 sm:mb-6">
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Custom Real Estate Software Development</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">We design scalable, future-ready software solutions customized to your specific business needs, industry trends, and changing user demands. Our solutions are engineered for efficiency and scalability, optimizing your real estate processes.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Support and Maintenance Services</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">After launch, we offer essential support, including modifications, glitch-free operations, and performance enhancements, to keep your software or app running at peak efficiency.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Teleradiology</span> Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-sm sm:text-base text-gray py-2 sm:pb-4">Transcode Solution provides advanced Picture Archiving and Communication Systems (PACS) and Digital Imaging and Communications in Medicine (DICOM) viewer networks. These solutions facilitate effortless sharing and storage of medical imaging, clips, and reports, fostering real-time collaboration between patients and physicians for agile care delivery.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold text-blue">AI and ML-Powered Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Leverage AI & ML for Enhanced Real Estate Operations with Analytics, Predictive Insights, and More</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold text-blue">Integration and Upgrades</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">For existing solutions, we integrate APIs, develop extensible modules, and perform smooth upgrades, guaranteeing efficiency while avoiding unnecessary complexity.</p>
                    </div>
                </div>
                <div className="text-center	py-1 sm:pb-4">
                    <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcode</button>
                </div>
                <div className="text-center pt-0 sm:pt-6">
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
                    <h3 className="text-xl sm:text-3xl font-extrabold">Development Process</h3>
                    <p className="text-sm sm:text-xl text-gray">Our Real Estate Software Development Approach</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-20 my-4 sm:my-10">
                    {DevelopmentProcess.map((item, index) => (
                        <div key={index} className="pt-4 bg-gray rounded-3xl">
                            <div className="flex">
                                <div className="pl-28 sm:pl-8 lg:pl-20 xl:pl-32">
                                    <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-gray shadow-md flex items-center justify-center">
                                        <Image src={item.image} alt={item.title} className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-8 sm:col-span-8 pt-3 mb-10 px-4">
                                <h4 className="text-center text-base sm:text-lg font-extrabold py-1 text-blue">{item.title}</h4>
                                <p className="text-center text-sm sm:text-lg">
                                    {item.list1}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <h3 className="text-xl sm:text-3xl font-extrabold">Hiring Process - A Three-Day Journey</h3>
                    <p className="text-gray text-base sm:text-xl font-semibold my-2 sm:my-4">Develop Your Healthcare Software in 5 Simple Steps with Our Expert Developers</p>
                    <p className="text-lg sm:text-2xl font-semibold text-blue">Experience a 7-Day Trial Period for Full Satisfaction with Your Resource*.</p>
                </div>
                <div className="flex justify-center">
                    <Image src={HiringProcessTravel} alt="HiringProcessTravel" width={926} height={926} />
                </div>
                <div className="text-center">
                    <button className="bg-blue text-white text-sm sm:text-lg rounded-lg p-2">Discuss With Our Expert Team</button>
                </div>
                <div>
                    <h3 className="text-xl sm:text-3xl text-center mt-4 sm:mt-16">Business-Friendly Engagement Models We Offer</h3>
                    <div className="grid grid-cols-12 gap-6 sm:gap-10 my-4 sm:my-10">
                        {hiringModel.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-3 pl-4 pt-4 bg-gray rounded-3xl">
                                <div className="flex">
                                    <div className="col-span-6 md:col-span-3 sm:col-span-3">
                                        <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden border-2 border-blue border-gray shadow-md flex items-center justify-center">
                                            <Image src={item.image} alt={item.title} className="w-full h-full object-scale-down" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h4 className="text-sm sm:text-base text-blue font-semibold pt-1 pl-4 sm:pt-7">{item.title}</h4>
                                    </div>
                                </div>
                                <div className="col-span-8 sm:col-span-8 pl-6 pt-3 mb-4">
                                    <ul className="list-disc text-gray">
                                        <li className="sm:text-sm text-base">
                                            {item.list1}
                                        </li>
                                        <li className="sm:text-sm text-base">
                                            {item.list2}
                                        </li>
                                        {item.list3 && (
                                            <li className="sm:text-sm text-base">
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
                    <h3 className="text-center text-lg sm:text-2xl font-extrabold mt-0 sm:mt-14">Why Us</h3>
                    <h3 className="text-center text-lg sm:text-2xl text-gray">Why Clients Trust Us for Travel app/Software Development?</h3>
                    <div className="grid grid-cols-12 gap-6 sm:gap-20 my-4 sm:my-10">
                        {SoftwareDevelopment.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-4 pt-4 bg-gray rounded-3xl">
                                <div className="flex">
                                    <div className="col-span-6 md:col-span-3 sm:col-span-3 pl-28 sm:pl-32">
                                        <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-gray shadow-md flex items-center justify-center">
                                            <Image src={item.image} alt={item.title} className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8 sm:col-span-8 pt-3 mb-10 px-4">
                                    <h4 className="text-center text-base sm:text-lg font-extrabold pt-1 ">{item.title}</h4>
                                    <p className="text-center text-sm sm:text-lg">
                                        {item.list1}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RealEstate;