"use client"
import Image from "next/image";
import people from "@public/Assets/people.png"
import CardWrapper from "@/components/CardWrapper";
import cardData from "./utils/cardData";
import workProcess from "@public/Assets/workProcess.png"
import blogItems from "@/components/BlogCard";
import Process from "@public/Assets/process.png"
import { useState } from "react";
import PortFolioImages from "./utils/PortFolioImages";
import Portfolio from "@/components/PortFolio ";
import TechnologyTabs from "./utils/TechnologyTabs";
import TechnologyUiuxTabs from "./utils/TechnologyUiuxTabs";
import TechnologyMobileTabs from "./utils/TechnologyMobileTabs";
import TechnologyDatabaseTabs from "./utils/TechnologyDatabaseTabs";
import staff from "@public/Assets/staff.png"
import styles from "./styles.module.scss"
import sadiaAkter from "@public/Assets/sadiaAkter.png"
import Mizanur from "@public/Assets/Mizanur.png"
import mahim from "@public/Assets/mahim.png"
import Link from "next/link";
import { title } from "process";

interface HomeProps { }
const Home: React.FC<HomeProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('webdevelopment');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const slides = [
    {
      heading: "YOUR PREMIER",
      title: "Software Development",
      title1: "Destination for",
      title2: " Website & Mobile App",
      title4: " Innovation",
      description: "Our team offers expert design, development, and strategy services customized to your specific requirements.",
      buttonText: "Discover More",
      href: "/services/software",
      href1: "/contactus",
      buttonText1: "Contact Us"
    },
    {
      heading: "MASTERING IT SERVICES:",
      title1: "Reduce Costs, ",
      title2: " Enhance Security,",
      title3: " and Improve",
      title4: " User Experience",
      description: "Goals include cost reduction, security enhancement,and improved user experience",
      buttonText: "Explore Now",
      href: "/services/mobile",
      href1: "/contactus",
      buttonText1: "Contact Us"
    },
    {
      heading: "INNOVATE TO ELEVATE:",
      title1: "A Guide to Expert in",
      title2: " Software Development",
      title3: " in",
      title4: " Business ",
      description: "Goals include cost reduction, security enhancement,and improved user experience",
      buttonText: "Discover More",
      href: "/services/web-design",
      href1: "/contactus",
      buttonText1: "Contact Us"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <main>
      <div>
        <div className="relative mb-10 overflow-hidden">
          <div className="bg-gray">
            <div className="container mx-auto flex flex-col justify-center lg:pt-32">
              <div className="text-center pb-8">
                <h3 className="text-headertext text-xl sm:text-2xl font-extrabold pt-2" data-aos="fade-up" data-aos-delay="100">{slides[currentSlide].heading}</h3>
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-blue mb-4"></div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* <button onClick={goToPrevSlide} className="bg-gray-300 text-gray-800 rounded-full w-10 h-10 mr-4 focus:outline-none lg:w-12 lg:h-12">
                  &#10094;
                </button> */}
                <button onClick={goToPrevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue text-white rounded-full w-10 h-10 lg:w-12 lg:h-12 focus:outline-none">&#10094;</button>
              </div>
              <h4 className="text-black text-xl sm:text-2xl lg:text-5xl font-extrabold text-center mb-3" data-aos="fade-up" data-aos-delay="100">
                {slides[currentSlide].title1} <span className="text-headertext text-2xl sm:text-3xl lg:text-6xl font-extrabold text-center mb-3 wow fadeOutDownBig">{slides[currentSlide].title2}</span>{slides[currentSlide].title3}
              </h4>
              <h4 className="text-black text-2xl sm:text-3xl lg:text-6xl font-extrabold text-center mb-8" data-aos="fade-up" data-aos-delay="100">{slides[currentSlide].title4}</h4>
              <p className="text-black text-sm sm:text-base lg:text-xl font-medium text-center px-6 mb-12 sm:px-32 md:px-40 lg:px-56 xl:px-96" data-aos="fade-up" data-aos-delay="100">{slides[currentSlide].description}</p>
              <div className="flex  flex-row sm:flex-row gap-7 justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
                <Link href={slides[currentSlide].href}>
                  <button className="bg-blue px-2 py-1 lg:px-4 lg:py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">
                    {slides[currentSlide].buttonText}
                  </button>
                </Link>
                <Link href={slides[currentSlide].href1} className="wow fadeInRight">
                  <button className="bg-white px-2 py-1 lg:px-4 lg:py-2 rounded-md font-bold text-black hover:bg-dark hover:text-white transition duration-300">
                    {slides[currentSlide].buttonText1}
                  </button>
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                {/* <button onClick={goToNextSlide} className="bg-gray-300 text-gray-800 rounded-full w-10 h-10 focus:outline-none lg:w-12 lg:h-12" data-aos="fade-up" data-aos-delay="100">
                  &#10095;
                </button> */}
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue text-white rounded-full w-10 h-10 lg:w-12 lg:h-12 focus:outline-none" onClick={goToNextSlide} data-aos="fade-up" data-aos-delay="100">&#10095;</button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto gap-5 flex flex-col lg:gap-5 lg:flex-row items-center justify-between">
            <div className="flex-1 lg:order-2" >
              <Image
                src={people}
                height={700}
                width={470}
                alt="Your Name"
                data-aos="fade-up" data-aos-delay="100"
              />
            </div>
            <div className="flex-1 lg:order-1 lg:h-700 lg:w-[270px] bg-gray py-6 px-6 2xl:h-[700px] 2xl:py-6 xl:py-3 xl:h-[568px] lg:h-[443px]  wow fadeIn" data-wow-duration="2s">
              <h2 className="text-xl xl:text-3xl lg:text-2xl">Who <span className="text-blue">We Are</span></h2>
              <div className="w-36 h-1 bg-blue mb-2 sm:mb-4"></div>
              <h3 className="sm:leading-10 text-sm sm:text-2xl pb-1 sm:pb-5 lg:text-2xl">MORE THAN 10+ YEARS PROVIDING IT SOLUTIONS</h3>
              <p className="pb-1 sm:pb-5 text-sm sm:text-lg lg:text-sm">Our focus is primarily on software development, crafting custom solutions that align with our client&apos;s unique requirements.</p>
              <p className="pb-2 sm:pb-5 text-sm sm:text-lg lg:text-sm">Our team of experienced developers works closely with each client to understand their business goals and objectives.</p>
              <button className="bg-blue sm:leading-7 text-lg rounded-md font-semibold text-white p-1 sm:p-2 hover:bg-white hover:text-blue hover:shadow-2xl">Our Services</button>
            </div>
            <div className="flex-1 lg:order-3 lg:h-700 lg:w-470 bg-gray py-6 px-6 2xl:h-[700px] 2xl:py-6 xl:py-3 xl:h-[568px] lg:h-[443px] ">
              <h2 className="text-lg sm:text-xl lg:text-3xl">ABOUT <span className="text-blue">TRANSCODE</span></h2>
              <div className="w-36 h-1 bg-blue mb-4"></div>
              <p className="pb-5 text-sm sm:text-lg lg:text-sm lg:pb-1 wow fadeOutDownBig">Welcome to Transcode Solutions – where innovation meets excellence.</p>
              <p className="text-sm sm:text-lg lg:text-sm">
                Transcode Solutions is dedicated to transforming the digital realm with advanced software solutions. As a leading IT firm, we specialize in crafting customized software services to suit each client&apos;s specific requirements. Our experienced team utilizes cutting-edge technologies and industry standards to bring concepts to life. Our goal is to equip businesses for success in the digital era by offering innovative, scalable, and cost-efficient solutions. Fueled by a commitment to excellence, we aim to surpass expectations and deliver concrete outcomes.
              </p>
            </div>
          </div>
          <div className="container mx-auto gap-20 mt-10 text-center p-2">
            <h3 className="font-bold text-lg sm:text-2xl md:text-3xl mb-6">Driving rapid change with software solutions for enhanced <span className="text-blue">flexibility and expansion, focusing on scalability and fostering growth.</span></h3>
            <p className="text-sm sm:text-lg mb-6">Utilizing cutting-edge software solutions, we are driving rapid transformation to enhance flexibility and accommodate expansion within our organization. Our primary focus lies in scalability, ensuring that oursystems can easily handle increased demand and growth</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-auto">
              <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="100" >
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue wow animated bounce infinite delay-1s">
                  <h3 className="text-black text-3xl font-extrabold">5+</h3>
                </div>
                <h3 className="text-base sm:text-2xl" >Years of Experience</h3>
              </div>
              <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="100" >
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue wow animated bounce infinite delay-1s">
                  <h3 className="text-black text-3xl font-extrabold">70+</h3>
                </div>
                <h3 className="text-base sm:text-2xl">Talented IT Professionals</h3>
              </div>
              <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="100" >
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue wow animated bounce infinite delay-1s">
                  <h3 className="text-black text-3xl font-extrabold">100+</h3>
                </div>
                <h3 className="text-base sm:text-2xl mt-2">Successful Projects</h3>
              </div>
              <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="100" >
                <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue wow animated bounce infinite delay-1s">
                  <h3 className="text-black text-3xl font-extrabold">30+</h3>
                </div>
                <h3 className="text-base sm:text-2xl mt-2">Countries Served</h3>
              </div>
            </div>
            <div className="my-14">
              <div className="mb-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">What <span className="text-blue">We Do</span></h3>
                <p className="text-sm sm:text-2xl md:text-3xl text-gray">OUR SPECIALIZED SERVICES ARE TAILORED EXCLUSIVELY FOR YOUR BUSINESS NEEDS.</p>
              </div>
              <div className="container mx-auto mt-28 gap-y-24 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 What " >
                {cardData.map((data, index) => (
                  <div key={index} data-aos="flip-right">
                  <CardWrapper {...data} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-10 border-gray-200 dark:border-gray-700">
              <h3 className="text-center text-2xl md:text-3xl font-extrabold pb-4"><span className="text-blue">OUR TECHNOLOGY</span> EXPERTISE</h3>
              <ul className="mb-2 flex flex-wrap text-sm font-medium text-center justify-center" id="default-tab" role="tablist">
                <li className="me-2" role="presentation">
                  <button
                    className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-2xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'webdevelopment' ? 'border-b-4 border-blue' : 'border-transparent'}`}
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
                    className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-2xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'mobiledevelopment' ? 'border-b-4 border-blue' : 'border-transparent'}`}
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
                    className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-2xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'database' ? 'border-b-4 border-blue' : 'border-transparent'}`}
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
                    className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-2xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'UI/UX Design' ? 'border-b-4 border-blue' : 'border-transparent'}`}
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
            <div className="bg-gray sm:mb-16 p-2">
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 pt-8"><span className="text-blue">Our work</span> Process</h3>
              <p className="text-base sm:text-xl md:text-3xl font-semibold text-center text-gray">Transcode Solution an exclusive approach for building modern, secure solutions tailored to each of its
                clients individual requirements. </p>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <Image src={workProcess} alt="workProcess" width={880} height={552} />
                </div>
                <div className="flex justify-center">
                  <Image src={Process} alt="Process" width={556} height={556} />
                </div>
              </div> */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4" >
                <div className="md:col-span-8" data-aos="zoom-out">
                  <Image src={workProcess} alt="workProcess" width={880} height={552} />
                </div>
                <div className="md:col-span-4 md:mt-14" data-aos="zoom-out">
                  <Image src={Process} alt="Process" width={556} height={556} className="mt-14 md:mt-0" />
                </div>
              </div>
            </div>
            <div className="my-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-center py-4"><span className="text-blue">Client</span> Testimonials</h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-gray pb-10">Feedback and Statistics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-28">
                <div className="relative border-2 border-blue rounded-3xl text-left p-4 md:p-6 xl:p-10" data-aos="fade-up" data-aos-delay="100">
                  <div className="" >
                    <Image className="absolute top-[-34%] sm:top-[-26%] lg:top-[-24%] xl:top-[-25%]" src={sadiaAkter} alt="staff" />
                  </div>
                  <p className="text-sm sm:text-lg text-gray pt-28 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>
                  <h3 className="text-base sm:text-xl text-blue">mst. sadia akter</h3>
                  <h6 className="text-base sm:text-base text-gray py-4">dhaka</h6>
                </div>
                <div className="relative border-2 border-blue rounded-3xl text-left p-4 md:p-6 xl:p-10 mt-20 sm:mt-0" data-aos="fade-up" data-aos-delay="100">
                  <div className="">
                    <Image className="absolute top-[-34%] sm:top-[-26%] lg:top-[-24%] xl:top-[-25%]" src={Mizanur} alt="staff" />
                  </div>
                  <p className="text-sm sm:text-lg text-gray pt-28 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>
                  <h3 className="text-base sm:text-xl text-blue">Mizanur islam</h3>
                  <h6 className="text-base sm:text-base text-gray py-4">khulna</h6>
                </div>
                <div className="relative border-2 border-blue rounded-3xl text-left p-4 md:p-6 xl:p-10 mt-20 lg:mt-0 sm:mt-40" data-aos="fade-up" data-aos-delay="100">
                  <div className="">
                    <Image className="absolute top-[-34%] sm:top-[-26%] lg:top-[-24%] xl:top-[-25%]" src={mahim} alt="staff" />
                  </div>
                  <p className="text-sm sm:text-lg text-gray pt-28 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.</p>
                  <h3 className="text-base sm:text-xl text-blue">md. mahim miya</h3>
                  <h6 className="text-base sm:text-base text-gray py-4">Chittagong</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-sky sm:mb-12">
            <div className="container mx-auto gap-20 mt-10 text-center">
              <div className="mt-6 sm:mt-20 pb-12">
                <div className="container mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 pt-6 "><span className="text-blue">Our</span> Portfolio</h3>
                  <Portfolio images={PortFolioImages} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray mb-12">
            <div className="container mx-auto gap-20 mt-10 text-center">
              <div className=" mt-20 pb-12">
                <div className="container mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 pt-6"><span className="text-blue">Our</span> Blog</h3>
                  <p className="text-lg sm:text-3xl font-semibold text-center text-gray mb-4">Trending Custom Software Development Blog</p>
                  <div className="container mx-auto">
                    <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left" >
                      {/* {blogItems.map((blog, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105" data-aos="zoom-in-up" data-aos-delay="100" >
                          <div className="p-2">
                            <a href={blog.link} className="custom-hover">
                              <Image src={blog.image} alt="" className="rounded-t-lg" width={500} height={300}  />
                            </a>
                          </div>
                          <div className="px-2 sm:p-5 text-left">
                            <a href={blog.link}>
                              <h5 className="mb-1 sm:mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                            </a>
                            <p className="mb-2 sm:mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                            <a href={blog.link} className="mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              See Full Article
                            </a>
                          </div>
                        </div>
                      ))} */}
                      {blogItems.map((blog, index) => (
                        <div
                          key={index}
                          className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105"
                          data-aos="zoom-in-up"
                          data-aos-delay={(index + 1) * 100} // Delay increases for each blog item
                        >
                          <div className="p-2">
                            <a href={blog.link} className="custom-hover">
                              <Image src={blog.image} alt="" className="rounded-t-lg" width={500} height={300} />
                            </a>
                          </div>
                          <div className="px-2 sm:p-5 text-left">
                            <a href={blog.link}>
                              <h5 className="mb-1 sm:mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                            </a>
                            <p className="mb-2 sm:mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                            <a href={blog.link} className="mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue hover:bg-white hover:text-blue hover:border-blue border hover:border-solid">
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
              <Link href="/contactus">
                <button className="bg-blue px-4 py-2 rounded-md font-semibold text-white text-lg border-2 border-white hover:bg-white hover:text-blue hover:shadow-xl">Start Conversation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
