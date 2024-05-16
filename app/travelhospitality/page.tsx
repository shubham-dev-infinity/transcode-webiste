
'use client'

import Image from "next/image";
import style from "./styles.module.scss"
import TransformingData from "./TransformingData"
import { useState } from "react";
import TechnologyTabs from "@/utils/TechnologyTabs";
import TechnologyUiuxTabs from "@/utils/TechnologyUiuxTabs";
import TechnologyMobileTabs from "@/utils/TechnologyMobileTabs";
import TechnologyDatabaseTabs from "@/utils/TechnologyDatabaseTabs";
import DevelopmentProcess from "./DevelopmentProcess";
import travel_hospitality from "@public/Assets/travel_hospitality.png"
import hiringModel from "./hiringModel";
import development from "./development";
import Converted from "@public/Assets/Converted.png"

const TravelandHospitality = () => {
    const [activeTab, setActiveTab] = useState<string>('webdevelopment');
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    return (
        <main>
            <div className={style.heroBgImage}>
                <div className="px-4 lg:px-28 pb-12 sm:pb-52 pt-20 sm:pt-64 mb-5 sm:mb-10 text-white">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Travel and Hospitality Software Solution</h2>
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Company</h2>
                        <h4 className="text-lg sm:text-xl text-center py-3 sm:py-6">Building Your Own Brand in the Travel Industry</h4>
                        <p className="text-sm sm:text-lg text-center px-2 sm:px-40">Collaborating with us extends beyond mere travel software development — it entails forging a strategic alliance aimed at crafting bespoke software solutions for the travel and hospitality sector. Our focus lies in tailoring each project to precisely match your unique requirements, ensuring an unparalleled fit for your business needs.</p>
                        <div className="text-center	  pt-4">
                            <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Talk to an Expert</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2 sm:px-4">
                <div className="text-center mb-6 sm:mb-12">
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-2 sm:mb-4">Overview</h3>
                    <h6 className="text-sm sm:text-base text-gray font-semibold">Travel & Hospitality Software Development</h6>
                    <h6 className="text-sm sm:text-base text-blue font-semibold my-2 sm:my-4">Transcodezy  Solution: Empowering Your Retail & E-commerce Success</h6>
                    <h5 className="text-base sm:text-xl font-semibold">At the heart of our operations lies a commitment to driving digital transformation, tackling business hurdles head-on through our proficient team of travel app developers. Our repertoire includes a diverse array of customized travel and hospitality software solutions, empowering businesses to thrive in the digital age.</h5>
                    <div className="text-center	  pt-4">
                        <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Free Consultation</button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 sm:gap-12 my-4 sm:my-10">
                    {TransformingData.map((item, index) => (
                        <div key={index} className={`pt-4 bg-gray rounded-3xl ${index === TransformingData.length - 1 ? 'sm:col-span-2 col-start-0 sm:col-start-2 col-span-4' : 'sm:col-span-2 col-span-4'}`}>
                            <div className=" pl-28 sm:pl-24 md:pl-36 lg:pl-44 xl:pl-60">
                                <div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-full overflow-hidden border-gray shadow-md flex items-center justify-center">
                                    <Image src={item.image} alt="alt" className="w-full h-full" />
                                </div>
                            </div>
                            <div className="col-span-8 sm:col-span-8 pt-3 mb-10 px-4">
                                <h4 className="text-center text-base lg:text-lg font-extrabold pt-1 ">{item.title}</h4>
                                <p className="text-center text-sm lg:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center my-4 sm:my-16">
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-2 sm:mb-4">We Offer</h3>
                    <p className="text-sm sm:text-lg font-semibold text-blue py-1 sm:py-3">Our Commitment to Excellence in Travel App/Software Development</p>
                    <p className="text-xs sm:text-base font-semibold">Our offerings are all-encompassing, designed to meet your every requirement. From travel App/Software development and rigorous testing to end-to-end support & maintenance, we&apos;ve got you covered. Additionally, we specialize in providing cloud services, crafting AI solutions, and beyond. With our comprehensive suite of services, rest assured that your needs are in expert hands.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 p-1 sm:p-2 mb-2 sm:mb-6">
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Tailored Travel </span>App Development Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Craft scalable, industry-tailored software solutions specifically designed to meet the unique needs of your travel and hospitality business. Our goal is to ensure efficiency and future readiness, empowering you to stay ahead in a rapidly evolving industry landscape.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Continuous <span className="text-blue">Continuous Support and Maintenance </span><span>Solutions</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-sm sm:text-base text-gray py-2 sm:pb-4">Our dedication lies in maintaining the seamless operation of your travel and hospitality software. From handling modifications to resolving bugs and implementing performance enhancements, our team is committed to ensuring that your travel software remains efficient and reliable.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Innovative <span className="text-blue">AI & ML Solutions</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Leverage the capabilities of Artificial Intelligence and Machine Learning to unlock valuable insights, streamline operations, and deliver innovative solutions tailored for the travel and hospitality industry.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Seamless<span className="text-blue"> Integration and Upgrade </span><span>Solutions</span></h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Effortlessly expand and enhance your current travel and hospitality software. We provide seamless API integrations and thorough upgrade planning to enrich your system without any hassle or complications.</p>
                    </div>
                </div>
                <div className="text-center mt-4 sm:mt-8 mb-4 sm:mb-16">
                    <button className="bg-blue px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-md font-bold text-white mb-1 sm:mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcodezy </button>
                </div>
                <div className="text-center">
                    <h3 className="text-lg sm:text-2xl font-extrabold pb-4">Technologies</h3>
                    <h3 className="text-blue text-base sm:text-xl"> Technologies & Platforms We Engage With</h3>
                </div>
                <div className="mb-2 sm:mb-3 text-center border-gray-200 dark:border-gray-700">
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
                <div className="text-center mb-2 sm:mb-14">
                    <button className="bg-blue text-white text-sm sm:text-lg rounded-lg p-2">Schedule a Developers Interview</button>
                </div>
                <div className="text-center">
                    <h3 className="text-xl sm:text-3xl font-extrabold mb-0 sm:mb-2">Development Process</h3>
                    <p className="text-sm sm:text-lg font-semibold text-gray">The Journey of Travel App/Software Development</p>
                    <div className="lg:grid grid-cols-12 gap-6 sm:gap-20 my-4 sm:my-10">
                        {DevelopmentProcess.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 pt-4 bg-gray rounded-3xl">
                                <div className="flex">
                                    <div className="col-span-6 sm:col-span-3 md:col-span-6 pl-28 md:pl-20 xl:pl-32">
                                        <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden border-blue shadow-md flex items-center justify-center">
                                            <Image src={item.image} alt={item.title} className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8 sm:col-span-8 pt-3 mb-10 px-4">
                                    <h4 className="text-center text-base text-blue sm:text-lg font-extrabold pt-1 ">{item.title}</h4>
                                    <p className="text-center text-sm sm:text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center mb-0 sm:mb-10">
                    <h3 className="text-xl sm:text-3xl font-extrabold">Hiring Process - A Three-Day Journey</h3>
                    <p className="text-gray text-sm sm:text-xl font-semibold my-1 sm:my-6">Develop Your Healthcare Software in 5 Simple Steps with Our Expert Developers</p>
                    <p className="text-sm sm:text-xl font-semibold text-blue">Experience a 7-Day Trial Period for Full Satisfaction with Your Resource*.</p>
                </div>
                <div className="flex justify-center">
                    <Image src={travel_hospitality} alt="travel_hospitality" width={926} height={926} />
                </div>
                <div className="text-center">
                    <button className="bg-blue text-white text-sm sm:text-lg rounded-lg p-2">Discuss With Our Expert Team</button>
                </div>
                <div>
                    <h3 className="text-xl sm:text-3xl text-center font-extrabold mt-4 sm:mt-20 px-0 md:px-40">Adaptable Hiring Model for Travel & Hospitality Software Development</h3>
                    <div className="grid grid-cols-12 gap-6 sm:gap-10 my-4 sm:my-10">
                        {hiringModel.map((item, index) => (
                            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3 pl-4 pt-4 bg-gray rounded-3xl">
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
                    <h3 className="text-center text-lg sm:text-2xl font-extrabold mt-0 sm:mt-14">Why Us</h3>
                    <h3 className="text-center text-lg sm:text-2xl text-gray mt-0 sm:mt-2">Why Clients Trust Us for Retail & E-commerce Software Development?</h3>
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
                        <h2 className="text-xl font-bold">Meet Our Expert</h2>
                        <p className="mt-2 text-lg font-semibold">Arpit N.</p>
                        <p className="text-lg">Company Owner</p>
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
    )
}

export default TravelandHospitality;