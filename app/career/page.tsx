"use client"
import { useState } from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
// import style from './styles.module.scss'
import style from "../components/styles.module.scss";
import career from "@public/Assets/Career.png";
import DreamJob from "@public/Assets/DreamJob.png"
import bestWork from "@public/Assets/best-work.png"
import metting from "@public/Assets/metting.png"
import staff from "@public/Assets/staff.png"
import CareerTemplate from "./CareerTemplate";

const Career = () => {
    const [selectedTab, setSelectedTab] = useState<string>('all'); // Specify the type as string for selectedTab

    // Function to handle tab selection
    const handleTabClick = (tab: string) => { // Specify the type as string for the 'tab' parameter
        setSelectedTab(tab);
    };
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={career} text={"Career"} discription={"Establishing Trust and Achieving Excellence"} />
            </div>
            <div className="container mx-auto my-16">
                <h2 className="text-3xl font-extrabold text-center">WHY CHOOSE <span className="text-blue">TRANSCODE</span> FOR YOUR <span className="text-blue">DREAM JOB?</span></h2>
                <div className="grid grid-cols-12 gap-4 my-10">
                    <div className="col-span-12 md:col-span-4">
                        <Image src={DreamJob} alt="DreamJob" width={480} height={550} />
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <p className="text-gray text-xl pt-20 pb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p className="text-gray text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
                <h2 className="text-3xl font-extrabold text-center">LIVE YOUR BEST <span className="text-blue">WORK LIFE</span></h2>
                    <div className="grid grid-cols-12 gap-y-8 my-12">
                        <div className="col-span-12 md:col-span-4">
                            <Image src={bestWork} alt="bestWork" width={470} height={470} />
                        </div>
                        <div className="col-span-12 md:col-span-4  m-auto">
                            <p className="text-center text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <Image src={staff} alt="staff" width={470} height={470} />
                        </div>
                        <div className="col-span-12 md:col-span-4 m-auto">
                            <p className="text-center text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <Image src={staff} alt="staff" width={470} height={470} />
                        </div>
                        <div className="col-span-12 md:col-span-4  m-auto">
                            <p className="text-center text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                <h2 className="text-center font-extrabold text-3xl">CURRENT <span className="text-blue">OPENING</span></h2>
                <p className="text-center text-xl py-8">We&apos;re seeking motivated individuals who are eager to make a real impact! Join Our Team</p>
                <div className="font-medium text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex justify-center flex-wrap -mb-px text-center text-sm ">
                        <li className="me-2">
                            <div
                                className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'all' ? 'text-blue border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                                    }`}
                                onClick={() => handleTabClick('all')}
                            >
                                All
                            </div>
                        </li>
                        <li className="me-2">
                            <div
                                className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'sales_Marketing' ? 'text-blue border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                                    }`}
                                onClick={() => handleTabClick('sales_Marketing')}
                            >
                                Sales & Marketing
                            </div>
                        </li>
                        <li className="me-2">
                            <div
                                className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'design' ? 'text-blue border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                                    }`}
                                onClick={() => handleTabClick('design')}
                            >
                              Design
                            </div>
                        </li>
                        <li className="me-2">
                            <div
                                className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'developers' ? 'text-blue border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                                    }`}
                                onClick={() => handleTabClick('developers')}
                            >
                                Developers
                            </div>
                        </li>
                        <li className="me-2">
                            <div
                                className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'engineering' ? 'text-blue border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                                    }`}
                                onClick={() => handleTabClick('engineering')}
                            >
                                Engineering
                            </div>
                        </li>
                    </ul>
                    {selectedTab === 'all' && <CareerTemplate />}
                    {/* {selectedTab === 'web_design' && <WebDesignPortfolio />} */}
                    {/* Render other PortfolioTemplates based on other tabs */}                 
                </div>
            </div>
        </main>
    )
}

export default Career;