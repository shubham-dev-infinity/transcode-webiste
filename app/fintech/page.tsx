'use client'
import Image from "next/image"
import style from "../travelhospitality/styles.module.scss"
import development from "./development"
import TechnologyTabs from "@/utils/TechnologyTabs"
import TechnologyUiuxTabs from "@/utils/TechnologyUiuxTabs"
import TechnologyMobileTabs from "@/utils/TechnologyMobileTabs"
import TechnologyDatabaseTabs from "@/utils/TechnologyDatabaseTabs"
import { useState } from "react"
import DevelopmentProcess from "./DevelopmentProcess"
import HiringProcessTravel from "@public/Assets/HiringProcessTravel.png"
import hiringModel from "./hiringModel"
import SoftwareDevelopment from "./SoftwareDevelopment"


const Fintech = () => {
    const [activeTab, setActiveTab] = useState<string>('webdevelopment');
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <main>
            <div className={style.heroBgImage}>
                <div className="px-4 lg:px-28 pb-12 sm:pb-52 pt-20 sm:pt-64 mb-5 sm:mb-10 text-white">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Cutting-Edge Fintech Software Development Company</h2>
                        <p className="text-sm sm:text-lg text-center px-2 sm:px-40 mt-4 mb-8">Transform the Future of Finance with Custom Fintech Software Development! Leverage our advanced expertise in creating innovative Fintech solutions, from Investment and Trading Software to Cross-Border Payment Gateways, Personal Finance Tools, E-Wallets, and more. Our skilled team is dedicated to turning your financial vision into reality!</p>
                        <div className="text-center pt-4">
                            <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcode→</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="text-center">
                    <h3 className="text-xl sm:text-3xl font-extrabold">Overview</h3>
                    <p className="text-base sm:text-lg text-gray font-semibold my-2 sm:my-8">Custom Fintech Application Development Services</p>
                    <p className="text-base sm:text-lg font-semibold px-0 sm:px-16">With years of experience in the Fintech industry, we&apos;ve built strong relationships with both startups and major financial institutions by delivering robust and secure digital fintech products using future-proof technologies. Our teams work seamlessly together to provide effective solutions with a faster time-to-market.</p>
                </div>
                <div className="mt-1 sm:my-6">
                    <h4 className="text-blue text mb-1 sm:mb-2">Customize Your Fintech Software with Essential and Cutting-Edge Features</h4>
                    <ul className="text-gray text-sm sm:text-lg font-semibold list-disc pl-5">
                        <li className="mb-1 sm:mb-2">Multi-Currency Support</li>
                        <li className="mb-1 sm:mb-2">Multi-Jurisdictional Capabilities</li>
                        <li className="mb-1 sm:mb-2">Advanced Authentication Systems</li>
                        <li className="mb-1 sm:mb-2">High Security and Compliance Standards</li>
                    </ul>
                    <div className="text-center">
                        <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Free Consultation</button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 sm:gap-12 my-4 sm:my-10">
                    {development.map((item, index) => (
                        <div key={index} className={`pt-4 bg-gray rounded-3xl ${index === development.length - 1 ? 'sm:col-span-2 col-start-0 sm:col-start-2 col-span-4' : 'sm:col-span-2 col-span-4'}`}>
                            <div className=" pl-28 sm:pl-24 md:pl-36 lg:pl-44 xl:pl-60">
                                <div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-full overflow-hidden border-gray shadow-md flex items-center justify-center">
                                    <Image src={item.image} alt={item.title} className="w-full h-full" />
                                </div>
                            </div>
                            <div className="col-span-8 sm:col-span-8 pt-3 mb-10 px-4">
                                <h4 className="text-center text-base lg:text-lg font-extrabold pt-1 ">{item.title}</h4>
                                <p className="text-center text-sm lg:text-lg">
                                    {item.list1}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center my-4 sm:my-16">
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-2 sm:mb-4">We Offer</h3>
                    <p className="text-sm sm:text-lg font-semibold text-blue py-1 sm:py-3">What We Provide for Our Clients</p>
                    <p className="text-xs sm:text-base font-semibold">To keep your Fintech software ahead of the technology curve, our Fintech Software Developers continuously strategize, plan, wireframe, design, build, and maintain products. We create custom Fintech applications that present complex features in an engaging and user-friendly manner.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 p-1 sm:p-2 mb-2 sm:mb-6">
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Tailored</span> App Development Services</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">We craft scalable, future-ready custom Fintech software solutions tailored to your business-specific requirements, industry trends, and evolving user needs.</p>
                        <ul className="text-xs sm:text-sm text-gray list-disc pl-5">
                            <li>Product Engineering</li>
                            <li>Digital Transformation</li>
                            <li>MVP Development</li>
                            <li>Enterprise Applications</li>
                        </ul>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Our focus ensures your custom Fintech software remains efficient, scalable, and glitch-free.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Support and Maintenance </span>Services</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-sm sm:text-base text-gray py-2 sm:pb-4">Our dedication lies in maintaining the seamless operation of your travel and hospitality software. From handling modifications to resolving bugs and implementing performance enhancements, our team is committed to ensuring that your travel software remains efficient and reliable.We strive to ensure your Fintech software or app operates with 100% efficiency. Post-launch support is just as important as quality development, and we handle:</p>
                        <ul className="text-xs sm:text-sm text-gray list-disc pl-5">
                            <li>Modifications and Technical Improvements</li>
                            <li>Bug and Glitch Removal</li>
                            <li>Performance Enhancements</li>
                        </ul>
                        <p className="text-sm sm:text-base text-gray py-2 sm:pb-4">Our in-depth understanding of your system, source code, and functionality allows us to quickly identify glitches and scale efficiently and cost-effectively.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold text-blue"> AI & ML Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Artificial Intelligence and Machine Learning technologies have the immense potential to address industry challenges and offer innovative solutions that surpass human capabilities. We provide:</p>
                        <ul className="text-xs sm:text-sm text-gray list-disc pl-5">
                            <li>Business and Data Analytics & Engineering</li>
                            <li>Predictive and Cognitive Analytics</li>
                            <li>Recommendation Engines and Chatbots</li>
                            <li>Natural Language Processing</li>
                            <li>Visual Search, Image Recognition, and Voice-Based AI</li>
                        </ul>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold text-blue"> Integration and Upgrade </h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">If you need to enhance your existing software, web product, or mobile solution for greater efficiency, we can develop APIs or integratable tools to help achieve your goals. We can also integrate these additional modules into your current setup. Our Fintech programmers identify and mitigate risks during the upgrade process, preventing time wastage, unnecessary complexity, and other issues.</p>
                        <ul className="text-xs sm:text-sm text-gray list-disc pl-5">
                            <li>API and System Integration</li>
                            <li>Upgrade Planning, Assessment, and Testing</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-1 sm:mt-4 mb-2 sm:mb-8">
                    <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcode</button>
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
                    <button className="bg-blue text-white text-sm sm:text-lg rounded-lg p-2 mb-2 sm:mb-6">Schedule a Developers Interview</button>
                    <h3 className="text-xl sm:text-3xl font-extrabold">Our Fintech Software Development Process</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-12 my-4 sm:my-10">
                    {DevelopmentProcess.map((item, index) => (
                        <div key={index} className="pt-4 bg-gray rounded-3xl">
                            <div className="flex">
                                <div className="pl-28 sm:pl-16 lg:pl-[90px] xl:pl-20 ">
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-gray shadow-md flex items-center justify-center">
                                        <Image src={item.image} alt={item.title} className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-8 sm:col-span-8 pt-3 mb-10 px-4">
                                <h4 className="text-center text-base lg:text-lg font-extrabold py-1 text-blue">{item.title}</h4>
                                <p className="text-center text-sm lg:text-lg">
                                    {item.list1}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-1 sm:mt-20">
                    <h3 className="text-xl sm:text-3xl font-extrabold">Hiring Process - A Three-Day Journey</h3>
                    <p className="text-gray text-lg sm:text-2xl font-semibold my-0 sm:my-5">Develop Your Healthcare Software in 5 Simple Steps with Our Expert Developers</p>
                    <p className="text-lg sm:text-2xl font-semibold text-blue mt-0 sm:mt-10">Experience a 7-Day Trial Period for Full Satisfaction with Your Resource*.</p>
                </div>
                <div className="flex justify-center sm:mt-16">
                    <Image src={HiringProcessTravel} alt="HiringProcessTravel" width={926} height={926} />
                </div>
                <div className="text-center">
                    <button className="bg-blue text-white text-sm sm:text-lg rounded-lg p-2">Discuss With Our Expert Team</button>
                </div>
                <div>
                    <h3 className="text-xl sm:text-3xl text-center font-extrabold mt-4 sm:mt-20">Flexible Hiring Models for Fintech Software Development</h3>
                    <div className="grid grid-cols-12 gap-6 sm:gap-10 my-4 sm:my-10">
                        {hiringModel.map((item, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3 pl-4 pt-4 bg-gray rounded-3xl">
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
                    <h3 className="text-center text-lg sm:text-2xl text-gray mt-0 sm:mt-2">Why Clients Trust Us for Travel app/Software Development?</h3>
                    <div className="grid grid-cols-6 gap-6 sm:gap-20 my-4 sm:my-10">
                        {SoftwareDevelopment.map((item, index) => (
                            <div key={index} className={`pt-4 bg-gray rounded-3xl col-span-6 sm:col-span-2  ${(index === SoftwareDevelopment.length - 2 || index === SoftwareDevelopment.length - 1) ? 'col-start-0 col-span-6 sm:col-start-2 sm:col-span-2' : ' col-span-6 sm:col-span-2'
                                } ${index === SoftwareDevelopment.length - 1 ? 'col-start-0 col-span-2 sm:col-start-4 sm:col-span-2' : ''
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
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                    <h2 className="text-lg font-semibold">Meet Our Expert</h2>
                    <h3 className="text-lg mt-4">Arpit N.</h3>
                    <p className="text-sm font-medium">Company Owner</p>
                    <p className="text-sm mt-4">
                        We always strive to deliver the most impactful business solutions
                        to achieve the greatest value for sellers and customers. Talk to us,
                        and let&apos;s create your ecommerce platforms together to boost your
                        offline & online sales.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Fintech;