"use client"

import Image from "next/image";
import people from "@public/Assets/people.png"
import CardWrapper from "@/components/CardWrapper";
import cardData from "./utils/cardData";
import Link from "next/link";
import vector from "@public/Assets/vector.png"
import style from "./styles.module.scss"
import NextJsIcon from "@public/Assets/icon/nextJsIcon.png"
import ReactJsIcon from "@public/Assets/icon/reactJsIcon.png"
import NodeJsIcon from "@public/Assets/icon/NodeJsIcon.png"
import PhpIcon from "@public/Assets/icon/phpIcon.png"
import workProcess from "@public/Assets/workProcess.png"
import images3 from "@public/Assets/images3.jpg"
import blogItems from "@/components/BlogCard";
// import Process from "@public/Assets/process.png"
import Process from "@public/Assets/process.png"
import { useState } from "react";
import cx from "clsx"
import PortFolioImages from "./utils/PortFolioImages";
import Portfolio from "@/components/PortFolio ";
import blackImages from "@public/Assets/blackImages.jpg"
import TechnologyTabs from "./utils/TechnologyTabs";

interface HomeProps { }
const Home: React.FC<HomeProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('webdevelopment');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <main>
      <div>
        {/* <div className="relative mb-10">
          <div className="bg-gray">
            <div className="container mx-auto flex flex-col justify-center pt-32">
              <div className="text-center pb-8">
                <h3 className="text-headertext text-2xl font-extrabold pt-2">YOUR PREMIER</h3>
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-blue mb-4"></div>
                </div>
              </div>
              <h4 className="text-black text-6xl font-extrabold text-center mb-3">Destination for <span className="text-headertext  text-7xl font-extrabold text-center mb-3">Website & Mobile App</span></h4>
              <h4 className="text-black  text-6xl font-extrabold text-center mb-8">Innovation</h4>
              <p className="text-black text-3xl font-medium text-center mb-12">Our team offers expert design, development,
                andstrategy services customized to your specific
                requirements.</p>
              <div className="flex gap-7 justify-center mb-16">
                <button className="bg-blue px-4 py-2 rounded-md text-white">Discover More</button>
                <button className="bg-white px-4 py-2 rounded-md text-black">How It Works</button>
              </div>
            </div>
          </div >
        </div>        */}
        <div className="relative mb-10">
          <div className="bg-gray">
            <div className="container mx-auto flex flex-col justify-center lg:pt-32">
              <div className="text-center pb-8">
                <h3 className="text-headertext text-2xl font-extrabold pt-2">YOUR PREMIER</h3>
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-blue mb-4"></div>
                </div>
              </div>
              <h4 className="text-black text-3xl lg:text-6xl font-extrabold text-center mb-3">Destination for <span className="text-headertext text-4xl lg:text-7xl font-extrabold text-center mb-3">Website & Mobile App</span></h4>
              <h4 className="text-black text-3xl lg:text-6xl font-extrabold text-center mb-8">Innovation</h4>
              <p className="text-black text-lg lg:text-3xl font-medium text-center mb-12">Our team offers expert design, development, and strategy services customized to your specific requirements.</p>
              <div className="flex flex-col lg:flex-row gap-7 justify-center mb-16">
                <button className="bg-blue px-4 py-2 rounded-md text-white mb-2 lg:mb-0">Discover More</button>
                <button className="bg-white px-4 py-2 rounded-md text-black">How It Works</button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {/* <div className="container mx-auto gap-20 flex items-center justify-between">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1 lg:h-700 lg:w-470 bg-gray py-10 px-6 2xl:h-[700px] 2xl:py-6 xl:py-3 xl:h-[568px] lg:h-[443px]">
                <h2 className="text-3xl lg:text-2xl">Who <span className="text-blue">We Are</span></h2>
                <div className="w-36 h-1 bg-blue mb-4"></div>
                <h3 className="leading-10 text-2xl pb-5 lg:text-2xl">MORE THAN 10+ YEARS PROVIDING IT SOLUTIONS</h3>
                <p className="pb-5 text-lg lg:text-sm">Our focus is primarily on software development, crafting custom solutions that align with our client&apos;s unique requirements.</p>
                <p className="pb-5 text-lg lg:text-sm">Our team of experienced developers works closely with each client to understand their business goals and objectives.</p>
                <button className="bg-blue leading-7 text-lg rounded-md text-white p-2">Our Services</button>
              </div>
              <div className="flex-1">
                <Image
                  src={people}
                  height={700}
                  width={470}
                  alt="Your Name"
                />
              </div>
              <div className="flex-1 lg:h-700 lg:w-470 bg-gray py-10 px-6 2xl:h-[700px] 2xl:py-6 xl:py-3 xl:h-[568px] lg:h-[443px] ">
                <h2 className="text-3xl lg:text-2xl">ABOUT <span className="text-blue">TRANSCODE</span></h2>
                <div className="w-36 h-1 bg-blue mb-4"></div>
                <p className="pb-5 text-lg lg:text-sm lg:pb-1">Welcome to Transcode Solutions – where innovation meets excellence.</p>
                <p className="text-lg lg:text-sm">
                  Transcode Solutions is dedicated to transforming the digital realm with advanced software solutions. As a leading IT firm, we specialize in crafting customized software services to suit each client&apos;s specific requirements. Our experienced team utilizes cutting-edge technologies and industry standards to bring concepts to life. Our goal is to equip businesses for success in the digital era by offering innovative, scalable, and cost-efficient solutions. Fueled by a commitment to excellence, we aim to surpass expectations and deliver concrete outcomes.
                </p>
              </div>
            </div>           
          </div> */}


          <div className="container mx-auto gap-5 flex flex-col lg:gap-5 lg:flex-row items-center justify-between">
            <div className="flex-1 lg:order-2">
              <Image
                src={people}
                height={700}
                width={470}
                alt="Your Name"
              />
            </div>
            <div className="flex-1 lg:order-1 lg:h-700 lg:w-[270px] bg-gray py-6 px-6 2xl:h-[700px] 2xl:py-6 xl:py-3 xl:h-[568px] lg:h-[443px]">
              <h2 className="text-3xl lg:text-2xl">Who <span className="text-blue">We Are</span></h2>
              <div className="w-36 h-1 bg-blue mb-4"></div>
              <h3 className="leading-10 text-2xl pb-5 lg:text-2xl">MORE THAN 10+ YEARS PROVIDING IT SOLUTIONS</h3>
              <p className="pb-5 text-lg lg:text-sm">Our focus is primarily on software development, crafting custom solutions that align with our client&apos;s unique requirements.</p>
              <p className="pb-5 text-lg lg:text-sm">Our team of experienced developers works closely with each client to understand their business goals and objectives.</p>
              <button className="bg-blue leading-7 text-lg rounded-md text-white p-2">Our Services</button>
            </div>
            <div className="flex-1 lg:order-3 lg:h-700 lg:w-470 bg-gray py-6 px-6 2xl:h-[700px] 2xl:py-6 xl:py-3 xl:h-[568px] lg:h-[443px] ">
              <h2 className="text-3xl lg:text-2xl">ABOUT <span className="text-blue">TRANSCODE</span></h2>
              <div className="w-36 h-1 bg-blue mb-4"></div>
              <p className="pb-5 text-lg lg:text-sm lg:pb-1">Welcome to Transcode Solutions – where innovation meets excellence.</p>
              <p className="text-lg lg:text-sm">
                Transcode Solutions is dedicated to transforming the digital realm with advanced software solutions. As a leading IT firm, we specialize in crafting customized software services to suit each client&apos;s specific requirements. Our experienced team utilizes cutting-edge technologies and industry standards to bring concepts to life. Our goal is to equip businesses for success in the digital era by offering innovative, scalable, and cost-efficient solutions. Fueled by a commitment to excellence, we aim to surpass expectations and deliver concrete outcomes.
              </p>
            </div>
          </div>




          {/* <div className="container mx-auto gap-20 flex  lg:flex-col-reverse items-center justify-between">
            <div className="flex lg:flex  gap-5">
              <div className="w-full lg:w-470 bg-gray py-10 px-6 2xl:h-[700px] 2xl:py-6 xl:py-3 xl:h-[568px] lg:h-[443px]">
                <h2 className="text-3xl lg:text-2xl">Who <span className="text-blue">We Are</span></h2>
                <div className="w-36 h-1 bg-blue mb-4"></div>
                <h3 className="leading-10 text-2xl pb-5 lg:text-2xl">MORE THAN 10+ YEARS PROVIDING IT SOLUTIONS</h3>
                <p className="pb-5 text-lg lg:text-sm">Our focus is primarily on software development, crafting custom solutions that align with our client&apos;s unique requirements.</p>
                <p className="pb-5 text-lg lg:text-sm">Our team of experienced developers works closely with each client to understand their business goals and objectives.</p>
                <button className="bg-blue leading-7 text-lg rounded-md text-white p-2">Our Services</button>
              </div>
              <div className="w-full lg:w-470 bg-gray py-10 px-6 2xl:h-[700px] 2xl:py-6 xl:py-3 xl:h-[568px] lg:h-[443px]">
                <h2 className="text-3xl lg:text-2xl">ABOUT <span className="text-blue">TRANSCODE</span></h2>
                <div className="w-36 h-1 bg-blue mb-4"></div>
                <p className="pb-5 text-lg lg:text-sm lg:pb-1">Welcome to Transcode Solutions – where innovation meets excellence.</p>
                <p className="text-lg lg:text-sm">Transcode Solutions is dedicated to transforming the digital realm with advanced software solutions. As a leading IT firm, we specialize in crafting customized software services to suit each client&apos;s specific requirements. Our experienced team utilizes cutting-edge technologies and industry standards to bring concepts to life. Our goal is to equip businesses for success in the digital era by offering innovative, scalable, and cost-efficient solutions. Fueled by a commitment to excellence, we aim to surpass expectations and deliver concrete outcomes.</p>
              </div>
            </div>
            <div className="w-full lg:w-470 flex justify-center">
              <Image
                src={people}
                height={700}
                width={470}
                alt="Your Name"
              />
            </div>
          </div> */}

          <div className="container mx-auto gap-20 mt-10 text-center">
            <h3 className="font-bold text-3xl mb-6">Driving rapid change with software solutions for enhanced <span className="text-blue">flexibility and expansion, focusing on scalability and fostering growth.</span></h3>
            <p className="text-lg mb-6">Utilizing cutting-edge software solutions, we are driving rapid transformation to enhance flexibility and accommodate expansion within our organization. Our primary focus lies in scalability, ensuring that oursystems can easily handle increased demand and growth</p>
            {/* <div className="flex text-center ">
              <div className="flex flex-col	items-center gap-4 mx-auto">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className=" text-black  text-3xl	 font-extrabold">
                    5+
                  </h3>
                </div>
                <h3 className="text-2xl mt-2">Years of Experience</h3>
              </div>
              <div className="flex flex-col	items-center gap-4 mx-auto">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className=" text-black  text-3xl	 font-extrabold">
                    70+
                  </h3>
                </div>
                <h3 className="text-2xl mt-2">Talented IT Professionals</h3>
              </div>
              <div className="flex flex-col	items-center gap-4 mx-auto">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className=" text-black  text-3xl	 font-extrabold">
                    100+
                  </h3>
                </div>
                <h3 className="text-2xl mt-2">Successful Projects</h3>
              </div>
              <div className="flex flex-col	items-center gap-4 mx-auto">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className=" text-black  text-3xl	 font-extrabold">
                    30+
                  </h3>
                </div>
                <h3 className="text-2xl mt-2">Countries Served</h3>
              </div>
            </div>            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className="text-black text-3xl font-extrabold">5+</h3>
                </div>
                <h3 className="text-2xl mt-2">Years of Experience</h3>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className="text-black text-3xl font-extrabold">70+</h3>
                </div>
                <h3 className="text-2xl mt-2">Talented IT Professionals</h3>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className="text-black text-3xl font-extrabold">100+</h3>
                </div>
                <h3 className="text-2xl mt-2">Successful Projects</h3>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue">
                  <h3 className="text-black text-3xl font-extrabold">30+</h3>
                </div>
                <h3 className="text-2xl mt-2">Countries Served</h3>
              </div>
            </div>
            {/* <div className="mt-14">
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold mb-4">What <span className="text-blue">We Do</span></h3>
                <p className="text-3xl text-gray">OUR SPECIALIZED SERVICES ARE TAILORED EXCLUSIVELY FOR YOUR BUSINESS NEEDS.</p>
              </div>
              <div className="container mx-auto pt-24">
                <div className="flex flex-wrap justify-between gap-9 mb-4">
                  {cardData.map((data, index) => (
                    <CardWrapper key={index} {...data} />
                  ))}
                </div>
              </div>
            </div> */}
            <div className="my-14">
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold mb-4">What <span className="text-blue">We Do</span></h3>
                <p className="text-3xl text-gray">OUR SPECIALIZED SERVICES ARE TAILORED EXCLUSIVELY FOR YOUR BUSINESS NEEDS.</p>
              </div>
              <div className="container mx-auto mt-28 gap-y-24 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                {cardData.map((data, index) => (
                  <CardWrapper key={index} {...data} />
                ))}
              </div>
            </div>

            <div className="mb-10 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-center text-3xl font-extrabold pb-4"><span className="text-blue">OUR TECHNOLOGY</span> EXPERTISE</h3>
              <ul className="flex flex-wrap text-sm font-medium text-center justify-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'webdevelopment' ? 'border-b-4 border-blue' : 'border-transparent'}`}
                    id="webdevelopment-tab"
                    data-tabs-target="#webdevelopment"
                    type="button"
                    role="tab"
                    aria-controls="webdevelopment"
                    aria-selected={activeTab === 'webdevelopment'}
                    onClick={() => handleTabClick('webdevelopment')}
                  >
                    Web Development
                  </button>
                </li>
                <li className="me-2" role="presentation">
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'mobiledevelopment' ? 'border-b-4 border-blue' : 'border-transparent'}`}
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
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'database' ? 'border-b-4 border-blue' : 'border-transparent'}`}
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
                    className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'UI/UX Design' ? 'border-b-4 border-blue' : 'border-transparent'}`}
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
            </div>
            <div className="bg-gray mb-16">
              <h3 className="text-3xl font-extrabold mb-4"><span className="text-blue">Our work</span> Process</h3>
              <p className="text-3xl font-semibold text-center text-gray">Transcode Solution an exclusive approach for building modern, secure solutions tailored to each of its
                clients individual requirements. </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex justify-center">
                  <Image src={workProcess} alt="workProcess" width={880} height={552} />
                </div>
                <div className="flex justify-center">
                  <Image src={Process} alt="Process" width={556} height={556} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-sky mb-12">
            <div className="container mx-auto gap-20 mt-10 text-center">
              <div className=" mt-20 pb-12">
                <div className="container mx-auto">
                  <h3 className="text-3xl font-extrabold mb-4 pt-6"><span className="text-blue">Our</span> Portfolio</h3>
                  <Portfolio images={PortFolioImages} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray mb-12">
            <div className="container mx-auto gap-20 mt-10 text-center">
              <div className=" mt-20 pb-12">
                <div className="container mx-auto">
                  <h3 className="text-3xl font-extrabold mb-4 pt-6"><span className="text-blue">Our</span> Blog</h3>
                  <p className="text-3xl font-semibold text-center text-gray mb-4">Trending Custom Software Development Blog</p>
                  {/* <div className="container mx-auto">
                    <div className="grid grid-cols-3 justify-items-center gap-5">
                      {blogItems.map((blog, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <div className="p-2">
                            <a href={blog.link}>
                              <Image src={blog.image} alt="" className="rounded-t-lg" width={500} height={300} />
                            </a>
                          </div>
                          <div className="p-5 text-left">
                            <a href={blog.link}>
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                            <a href={blog.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              See Full Article
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}
                  <div className="container mx-auto">
                    <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                      {blogItems.map((blog, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105">
                          <div className="p-2">
                            <a href={blog.link} className="custom-hover">
                              <Image src={blog.image} alt="" className="rounded-t-lg" width={500} height={300} />
                            </a>
                          </div>

                          <div className="p-5 text-left">
                            <a href={blog.link}>
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                            <a href={blog.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              See Full Article
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="bg-blue text-white text-center mb-12 pb-4 pt-4">
              <h3 className="pb-6 font-extrabold">Get IN TOUCH</h3>
              <p className="pb-6">Let’s collaborate and work something amazing together. Let’s discuss
                and build something unforgettable together.</p>
              {/* <button className="bg-white px-4 py-2 rounded-md text-black text-lg">Start Conversation</button> */}            
              <button className="bg-blue px-4 py-2 rounded-md text-white text-lg border-2 border-white hover:bg-white hover:text-blue transition duration-300">Start Conversation</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

