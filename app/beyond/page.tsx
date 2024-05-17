'use client'

import Image from "next/image"
import style from "../travelhospitality/styles.module.scss"
import CustomSoftware from "./CustomSoftware"
import TechnologyTabs from "@/utils/TechnologyTabs"
import TechnologyUiuxTabs from "@/utils/TechnologyUiuxTabs"
import TechnologyMobileTabs from "@/utils/TechnologyMobileTabs"
import TechnologyDatabaseTabs from "@/utils/TechnologyDatabaseTabs"
import { useState } from "react";
import hiringModel from "./hiringModel"
import development from "./development"
import Maintenance from "./Maintenance"
import Card from "@/components/Card"
const Beyond = () => {
    const [activeTab, setActiveTab] = useState<string>('webdevelopment');
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    return (
        <main>
            <div className={style.heroBgImage}>
                <div className="px-4 lg:px-28 pb-12 sm:pb-52 pt-20 sm:pt-64 mb-5 sm:mb-10 text-white">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">And Beyond</h2>
                        <p className="text-sm sm:text-lg text-center px-2 sm:px-40 mt-4 mb-8">Providing Software Application Development Services Across Various Industries</p>
                        <div className="text-center	  pt-4">
                            <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcode→</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="text-center">
                    <h3 className="text-blue text-xl sm:text-3xl font-extrabold">Custom Software Applications for Specific Business Niches</h3>
                    <p className="text-base sm:text-xl font-semibold my-1 sm:my-4">Regardless of your needs or the industry you operate in, our Custom Application Software Services cater to all your requirements. Our IT experts leverage the latest technologies to power each digital solution, ensuring the final product aligns with your users&apos; needs. Our post-launch services offer ongoing maintenance and support to address any technical issues.</p>
                    <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Free Consultation</button>
                </div>
                {/* <div className="grid grid-cols-12 gap-6 sm:gap-20 my-4 sm:my-10">
                    {CustomSoftware.map((item, index) => (
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
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20 my-4 sm:my-10">
                    {CustomSoftware.map((item, index) => (
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
                                <p className="text-center text-sm sm:text-lg">
                                    {item.list1}
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
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 p-1 sm:p-2 mb-2 sm:mb-6">
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Services</span> We Provide for Our Clients</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">We can cater to your needs, from development and software testing to end-to-end support and maintenance, cloud services, AI solutions, and much more.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Custom </span>Application Development</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-sm sm:text-base text-gray py-2 sm:pb-4">We design scalable, future-ready custom software solutions tailored to your business requirements, industry trends, and changing user needs.</p>
                        <ul className="list-none text-xs sm:text-sm text-gray">
                            <li>- Product Engineering</li>
                            <li>- Digital Transformation</li>
                            <li>- MVP Development</li>
                            <li>- Enterprise Applications</li>
                        </ul>
                        <p className="text-sm sm:text-base text-gray py-2 sm:pb-4">Our goal is to ensure your custom software solutions are efficient, scalable, and free of glitches.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Support and Maintenance </span>Services</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">We strive to maintain your software or app at peak efficiency. Post-launch service is just as important as quality development. We offer:</p>
                        <ul className="list-none text-xs sm:text-sm text-gray">
                            <li>- Modifications and technical improvements</li>
                            <li>- Bug and glitch removal</li>
                            <li>- Performance enhancements</li>
                        </ul>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Our understanding of your system, source code, and functions allows us to identify glitches quickly, making scaling easier and more cost-effective.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">AI and ML-Driven </span>Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Artificial Intelligence and Machine Learning technologies offer immense potential for solving industry challenges and providing innovative solutions that exceed human capabilities. We specialize in:</p>
                        <ul className="list-none text-xs sm:text-sm text-gray">
                            <li>- Business and data analytics and engineering</li>
                            <li>- Predictive and cognitive analytics</li>
                            <li>- Recommendation engines and chatbots</li>
                            <li>- Natural language processing</li>
                            <li>- Visual search, image recognition, and voice-based AI</li>
                        </ul>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold text-blue">Integration and Upgrades</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Artificial Intelligence and Machine Learning technologies offer immense potential for solving industry challenges and providing innovative solutions that exceed human capabilities. We specialize in:</p>
                        <ul className="list-none text-xs sm:text-sm text-gray">
                            <li>- API and system integration</li>
                            <li>- Upgrade planning, assessment, and testing</li>
                        </ul>
                    </div>
                </div> */}
                <div className="grid grid-cols-4 gap-4 xl:gap-12 my-3 sm:my-10">
                    {Maintenance.map((item, index) => (
                        <div key={index} className={`pt-4 bg-gray rounded-3xl ${index === Maintenance.length - 1 ? 'sm:col-span-2 col-start-0 sm:col-start-2 col-span-4' : 'sm:col-span-2 col-span-4'}`}>
                            <div className="col-span-8 sm:col-span-8 pt-3 px-4 bg-gray rounded-3xl p-2 sm:p-4">
                                <h3 className="text-sm sm:text-base md:text-xl font-semibold pt-1 "><span className="text-blue">{item.title}</span>{item.title1}</h3>
                                <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block"></div>
                                <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">
                                    {item.list1}
                                </p>
                                <ul className="list-none text-xs sm:text-sm text-gray">
                                    <li>{item.link1}</li>
                                    <li>{item.link2}</li>
                                    <li>{item.link3}</li>
                                </ul>
                                <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">{item.data}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcode</button>
                </div>
                <div className="text-center mt-4 sm:mt-14">
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
                    <button className="bg-blue text-white text-sm sm:text-lg rounded-lg p-2 mb-2 sm:mb-12">Schedule a Developers Interview</button>
                    <h3 className="text-xl sm:text-3xl font-extrabold">Adaptable Hiring Model for Beyond</h3>
                </div>
                <div className="grid grid-cols-12 gap-6 sm:gap-10 mt-4 sm:mt-10 mb-4 sm:mb-14">
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
                    <h3 className="text-center text-lg sm:text-2xl text-gray mt-0 sm:mt-3">Why Clients Trust Us for Travel app/Software Development?</h3>
                    {/* <div className="grid grid-cols-12 gap-6 xl:gap-20 my-4 sm:my-6">
                        {development.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-4 pt-4 bg-gray rounded-3xl">
                                <div className="flex">
                                    <div className="col-span-6 md:col-span-3 sm:col-span-3 pl-32 sm:pl-36">
                                        <div className="relative w-16 h-16 sm:w-32 sm:h-32 rounded-full overflow-hidden border-gray shadow-md flex items-center justify-center">
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
                    </div> */}
                    <div className="grid grid-cols-6 gap-6 xl:gap-20 my-4 sm:my-10">
                        {development.map((item, index) => (
                            <div key={index} className={`pt-4 bg-gray rounded-3xl col-span-6 sm:col-span-2  ${(index === development.length - 2 || index === development.length - 1) ? 'col-start-0 col-span-6 sm:col-start-2 sm:col-span-2' : ' col-span-6 sm:col-span-2'
                                } ${index === development.length - 1 ? 'col-start-0 col-span-2 sm:col-start-4 sm:col-span-2' : ''
                                }`}>
                                <div className="flex">
                                    <div className="col-span-6 md:col-span-3 sm:col-span-3 pl-28 md:pl-[72px] lg:pl-20 xl:pl-32">
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
    )
}

export default Beyond;