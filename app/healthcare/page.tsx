
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

const HealthCare = () => {
    const [activeTab, setActiveTab] = useState<string>('webdevelopment');
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    return (
        <main>
            <div className={style.heroBgImage}>
                <div className="px-4 lg:px-28 pb-12 sm:pb-52 pt-20 sm:pt-64 mb-5 sm:mb-10 text-white">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Healthcare Software Development</h2>
                        <div className="text-center pt-4">
                            <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Consult Transcode→</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="text-center mb-4 sm:mb-12">
                    <h3 className="text-xl sm:text-3xl font-extrabold">Tailored Solutions for Healthcare Software Development</h3>
                    <p className="text-base sm:text-xl font-semibold my-1 sm:my-8">We provide top-tier Healthcare Software Development Services in accordance with Global Standards for Leading Fitness and Healthcare Brands.</p>
                    <Link href="/contactus" className="bg-blue px-4 py-2 rounded-md font-bold text-white lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Contact Us</Link>
                    <h3 className="text-xl sm:text-3xl font-extrabold my-1 sm:my-6">Trusted By 35+ Happy Clients including these Fortune companies</h3>
                    <h4 className="text-blue text-lg sm:text-2xl">Healthcare Software Development</h4>
                    <p className="text-gray font-semibold text-sm sm:text-lg my-1 sm:my-6">Within the realm of digital transformation, healthcare software development stands out as a symbol of pioneering change, reshaping the norms of medical treatment and patient oversight. This progression isn&apos;t merely about switching from physical records to digital interfaces; it represents a holistic reinvention of how healthcare can become more reachable, tailored, and effective. Join us on an exploration through the innovative pathways of healthcare software development as we delve into its impact on shaping tomorrow&apos;s healthcare landscape.</p>
                    <button className="bg-blue px-4 py-2 rounded-md font-bold text-white lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Book A Free consolation</button>
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
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mb-1 sm:mb-4">
                    <h3 className="text-xl sm:text-3xl font-extrabold">Our Offerings in Healthcare Software Development Services</h3>
                    <p className="text-sm sm:text-xl font-semibold mt-1 sm:mt-4">Transcode recognizes the distinctive hurdles healthcare software companies encounter and guides them through a seamless digital transformation journey, prioritizing exceptional customer service, regulatory adherence, and staying ahead of non-traditional competitors. Leveraging our elite digital team, we deliver cutting-edge services and solutions across the entire spectrum of medical software needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 p-1 sm:p-2 mb-2 sm:mb-6">
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Elevating Healthcare</span>  with CRM Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Our specialized medical CRMs revolutionize user experiences through comprehensive patient profile management, personalized offerings, and essential features. Seamlessly integrated with care-delivery practices, these technologies foster continuous connectivity between doctors and patients throughout the care delivery journey.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Enhancing Patient Portal</span>  Management Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Our patient portal solutions establish electronic connections between patients and healthcare professionals. Offering web and mobile accessibility, these portals facilitate seamless submission and access to health records and resources, crucial for delivering accurate patient treatment.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Teleradiology</span> Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-sm sm:text-base text-gray py-2 sm:pb-4">Transcode Solution provides advanced Picture Archiving and Communication Systems (PACS) and Digital Imaging and Communications in Medicine (DICOM) viewer networks. These solutions facilitate effortless sharing and storage of medical imaging, clips, and reports, fostering real-time collaboration between patients and physicians for agile care delivery.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold">Enhancing <span className="text-blue">Healthcare Medical </span>Image Analysis</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue  sm:mb-6 hidden sm:block "></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">We develop software to enhance medical imaging, aiding early diagnosis and reducing errors in research and clinical settings. Our solutions also expedite exploration in educational contexts, improving diagnostic accuracy and recommendations.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Telehealth</span> Services</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Our telemedicine solutions enable remote diagnostics, post-discharge therapy, chronic illness management, and preventative care, connecting patients with healthcare professionals seamlessly.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Healthcare Analytics</span> Solutions</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Transcode Solutions team specializes in crafting scalable data warehouses, OLAP cubes, data mining algorithms, and visualization tools. These solutions facilitate ready-to-use healthcare analytics, empowering physicians to efficiently process medical data.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">Pharmacy Management</span> Software</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">Our pharmacy management systems efficiently handle prescription processing, tracking, and dispensing. With features like order management, barcode scanning, and inventory tracking, they streamline operations from POS to backend support.</p>
                    </div>
                    <div className="bg-gray rounded-3xl p-2 sm:p-4">
                        <h3 className="text-sm sm:text-base md:text-xl font-semibold"><span className="text-blue">SAP</span> Solutions and Services</h3>
                        <div className="w-16 sm:w-64 h-0.5 sm:h-1 bg-blue m:mb-4 hidden sm:block"></div>
                        <p className="text-xs sm:text-base text-gray py-2 sm:pb-4">We offer extensive SAP services and solutions to help businesses build a strong foundation. Our professionals enable automated operations in critical areas: Patient/Provider Engagement, Diagnosis and Care Delivery, Billing and Compliance, and Data Integration, supporting the transition to patient-centric services and strategic workforce alignment.</p>
                    </div>
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
                    <button className="bg-blue text-white text-sm sm:text-lg rounded-lg p-2 mb-0 sm:mb-6">Schedule a Developers Interview</button>
                    <h3 className="text-xl sm:text-3xl font-extrabold">Our Fintech Software Development Process</h3>
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
                    <h3 className="text-xl sm:text-3xl text-center mt-4 sm:mt-16">Adaptable Hiring Model for Travel & Hospitality Software Development</h3>
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

export default HealthCare;