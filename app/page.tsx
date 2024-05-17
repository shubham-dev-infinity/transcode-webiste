"use client"
import Image from "next/image";
import people from "@public/Assets/people.png"
import CardWrapper from "@/components/CardWrapper";
import cardData from "./utils/cardData";
import workProcess from "@public/Assets/workProcess.png"
import blogItems from "@/components/BlogCard";
import Process from "@public/Assets/process.png"
import { useEffect, useState } from "react";
import PortFolioImages from "./utils/PortFolioImages";
import Portfolio from "@/components/PortFolio ";
import TechnologyTabs from "./utils/TechnologyTabs";
import TechnologyUiuxTabs from "./utils/TechnologyUiuxTabs";
import TechnologyMobileTabs from "./utils/TechnologyMobileTabs";
import TechnologyDatabaseTabs from "./utils/TechnologyDatabaseTabs";
import sadiaAkter from "@public/Assets/sadiaAkter.png"
import Mizanur from "@public/Assets/Mizanur.png"
import mahim from "@public/Assets/mahim.png"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import style from "./styles.module.scss"
import MaskgroupSlider from "@public/Assets/MaskgroupSlider.png"
import MaskgroupSliderse from "@public/Assets/MaskgroupSliderse.png"
import MaskgroupSliderth from "@public/Assets/MaskgroupSliderth.png"
import Head from 'next/head';
import BlogDetailPage from "./blogarticle/page";


interface HomeProps { }
const Home: React.FC<HomeProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('webdevelopment');
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleShowMoreClick = () => {
    // setShowAllImages(true);
    router.push('/blog');
  };

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
      buttonText1: "Contact Us",
      img: MaskgroupSlider
    },
    {
      heading: "MASTERING IT SERVICES:",
      title1: "Reduce Costs, ",
      title2: " Enhance Security,",
      title3: " and Improve",
      title4: " User Experience",
      description: "Goals include cost reduction, security enhancement,and improved user experience",
      buttonText: "Explore Now",
      href: "/services/software",
      href1: "/contactus",
      buttonText1: "Contact Us",
      img: MaskgroupSliderth
    },
    {
      heading: "INNOVATE TO ELEVATE:",
      title1: "A Guide to Expert in",
      title2: " Software Development",
      title3: " in",
      title4: " Business ",
      description: "Goals include cost reduction, security enhancement,and improved user experience",
      buttonText: "Discover More",
      href: "/services/software",
      href1: "/contactus",
      buttonText1: "Contact Us",
      img: MaskgroupSliderse
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      // Increment current slide index
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <main>      
      <div className="relative mb-10 overflow-hidden">
        <Image
          src="/Assets/BgSlider.png"
          alt="Hero Background Image"
          layout="fill"
          objectFit="cover"
          className="hidden"
          priority={true}
        />
        <div className={style.heroBgImage}>
          <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start pt-8 sm:pt-16 lg:pt-32">
            <div className="lg:w-1/2 lg:mr-8">
              <div className="pb-0 md:pb-8">
                <h3 className="text-headertext text-center lg:text-start text-xl sm:text-2xl font-extrabold pt-2" data-aos="fade-up" data-aos-delay="100">{slides[currentSlide].heading}</h3>
                <div className="flex justify-center lg:justify-start">
                  <div className="w-24 h-1 bg-blue mb-4"></div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 pr-1 sm:pr-0 right-0 flex items-center">
                  <button onClick={goToNextSlide} className="bg-blue text-white rounded-full w-6 sm:w-10 h-6 sm:h-10 focus:outline-none lg:w-12 lg:h-12" data-aos="fade-up" data-aos-delay="100">
                    &#10095;
                  </button>
                </div>               */}
              <h4 className="text-black text-center lg:text-start text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold mb-3" data-aos="fade-up" data-aos-delay="100">
                {slides[currentSlide].title1} <span className="text-headertext text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold  mb-3 wow fadeOutDownBig">{slides[currentSlide].title2}</span>{slides[currentSlide].title3}
              </h4>
              <h4 className="text-black text-center lg:text-start text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold mb-8" data-aos="fade-up" data-aos-delay="100">{slides[currentSlide].title4}</h4>
              <p className="text-black text-sm sm:text-base lg:text-xl font-medium px-6 mb-12 sm:px-32 md:px-40 lg:px-0 xl:px-0" data-aos="fade-up" data-aos-delay="100">{slides[currentSlide].description}</p>
              <div className="flex flex-row sm:flex-row gap-7 justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
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
            </div>
            <div className="lg:w-1/2 lg:ml-8 relative ">
              <Image src={slides[currentSlide].img} alt="img" width={979} height={575} />
            </div>
          </div>
          {/* <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={goToPrevSlide} className="bg-blue text-white rounded-full w-6 sm:w-10 h-6 sm:h-10  focus:outline-none lg:w-12 lg:h-12">
                &#10094;
              </button>
            </div> */}
        </div>
      </div>
      <div className="container mx-auto overflow-hidden">
        <div className="gap-5 flex flex-col lg:gap-5 lg:flex-row items-center justify-between">
          <div className="flex-1 lg:order-2" >
            <Image
              src={people}
              height={700}
              width={470}
              alt="Your Name"
              data-aos="fade-up" data-aos-delay="100"
              className="2xl:h-[652.33px] xl:h-[568px] lg:h-[443px] "
            />
          </div>
          <div className="flex-1 lg:order-1 lg:h-700 lg:w-[270px] bg-gray py-6 px-6 2xl:h-[652.33px] 2xl:py-7 xl:py-3 xl:h-[568px] lg:h-[443px]  wow fadeIn" data-wow-duration="2s">
            <h2 className="text-xl xl:text-3xl lg:text-2xl">Who <span className="text-blue">We Are</span></h2>
            <div className="w-36 h-1 bg-blue mb-2 sm:mb-4"></div>
            <h3 className="sm:leading-10 font-bold text-sm sm:text-xl pb-1 sm:pb-5 lg:text-2xl">MORE THAN 10+ YEARS PROVIDING IT SOLUTIONS</h3>
            <p className="pb-1 sm:pb-5 text-sm sm:text-lg lg:text-sm xl:text-lg lg:pb-7">Our focus is primarily on software development, crafting custom solutions that align with our client&apos;s unique requirements.</p>
            <p className="pb-2 sm:pb-5 text-sm sm:text-lg lg:text-sm xl:text-lg lg:pb-7">Our team of experienced developers works closely with each client to understand their business goals and objectives.</p>
            <Link href="/contactus" className="bg-blue sm:leading-7 text-lg rounded-md font-semibold text-white p-1 sm:p-2 hover:bg-white hover:text-blue hover:shadow-2xl">Our Services</Link>
          </div>
          <div className="flex-1 lg:order-3 lg:h-700 lg:w-470 bg-gray py-6 px-6 2xl:h-[652.33px] 2xl:py-7 xl:py-3 xl:h-[568px] lg:h-[443px] ">
            <h2 className="text-lg sm:text-xl lg:text-3xl">ABOUT <span className="text-blue">TRANSCODE</span></h2>
            <div className="w-36 h-1 bg-blue mb-4"></div>
            <p className="pb-5 text-sm sm:text-lg lg:text-sm xl:text-lg xl:pb-7 lg:pb-1 wow fadeOutDownBig">Welcome to Transcodezy  Solutions – where innovation meets excellence.</p>
            <p className="text-sm sm:text-lg lg:text-sm xl:text-lg lg:pb-7">
              Transcodezy  Solutions is dedicated to transforming the digital realm with advanced software solutions. As a leading IT firm, we specialize in crafting customized software services to suit each client&apos;s specific requirements. Our experienced team utilizes cutting-edge technologies and industry standards to bring concepts to life. Our goal is to equip businesses for success in the digital era by offering innovative, scalable, and cost-efficient solutions. Fueled by a commitment to excellence, we aim to surpass expectations and deliver concrete outcomes.
            </p>
          </div>
        </div>
        <div className="gap-20 mt-10 text-center p-2">
          <h3 className="font-bold text-lg sm:text-2xl md:text-3xl mb-6">Driving rapid change with software solutions for enhanced <span className="text-blue">flexibility and expansion, focusing on scalability and fostering growth.</span></h3>
          <p className="text-sm text-gray sm:text-lg mb-6">Utilizing cutting-edge software solutions, we are driving rapid transformation to enhance flexibility and accommodate expansion within our organization. Our primary focus lies in scalability, ensuring that oursystems can easily handle increased demand and growth</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-auto">
            <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="100" >
              <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue wow animated bounce infinite delay-1s">
                <h3 className="text-black text-3xl font-extrabold">5+</h3>
              </div>
              <h3 className="text-base text-gray_Light sm:text-2xl" >Years of Experience</h3>
            </div>
            <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="100" >
              <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue wow animated bounce infinite delay-1s">
                <h3 className="text-black text-3xl font-extrabold">70+</h3>
              </div>
              <h3 className="text-base text-gray_Light sm:text-2xl">Talented IT Professionals</h3>
            </div>
            <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="100" >
              <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue wow animated bounce infinite delay-1s">
                <h3 className="text-black text-3xl font-extrabold">100+</h3>
              </div>
              <h3 className="text-base text-gray_Light sm:text-2xl mt-2">Successful Projects</h3>
            </div>
            <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="100" >
              <div className="w-24 h-24 bg-gray rounded-full flex items-center justify-center shadow-blue wow animated bounce infinite delay-1s">
                <h3 className="text-black text-3xl font-extrabold">30+</h3>
              </div>
              <h3 className="text-base text-gray_Light sm:text-2xl mt-2">Countries Served</h3>
            </div>
          </div>
          <div className="my-14">
            <div className="mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">What <span className="text-blue">We Do</span></h3>
              <p className="text-sm sm:text-lg md:text-xl text-gray">Our specialized services are tailored exclusively for your business needs.</p>
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
                {/* <button
                  className={`inline-block p-2 sm:p-4 border-b-2 rounded-t-lg text-lg sm:text-xl hover:text-blue hover:border-b-4 hover:border-blue ${activeTab === 'webdevelopment' ? 'border-b-4 border-blue' : 'border-transparent'}`}
                  id="webdevelopment-tab"
                  data-tabs-target="#webdevelopment"
                  type="button"
                  role="tab"
                  aria-controls="webdevelopment"
                  aria-selected={activeTab === 'webdevelopment'}
                  onClick={() => handleTabClick('webdevelopment')}
                >
                  Web Development
                </button> */}
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
          <div className="bg-gray sm:mb-16 p-2">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 pt-8"><span className="text-blue">Our work</span> Process</h3>
            <p className="text-base sm:text-base md:text-lg xl:text-xl font-semibold text-center text-gray">Transcodezy  Solution an exclusive approach for building modern, secure solutions tailored to each of its
              clients individual requirements. </p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4" >
              <div className="md:col-span-8" data-aos="zoom-out">
                <Image src={workProcess} alt="workProcess" width={880} height={552} />
              </div>
              <div className="md:col-span-4 mt-0 md:mt-14" data-aos="zoom-out">
                <Image src={Process} alt="Process" width={556} height={556} className=" md:mt-0" />
              </div>
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center py-2"><span className="text-blue">Client</span> Testimonials</h2>
            <h2 className="text-sm sm:text-base md:text-xl text-center font-semibold text-gray pb-10">Feedback and Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 gap-16 mt-28">
              <div className="relative border-2 border-blue rounded-3xl text-left p-4 md:p-6 xl:p-10" data-aos="fade-up" data-aos-delay="100">
                <div className="" >
                  <Image className="absolute top-[-34%] sm:top-[-26%] lg:top-[-24%] xl:top-[-25%]" src={sadiaAkter} alt="staff" />
                </div>
                <p className="text-sm sm:text-lg text-gray pt-28 pb-8">
                  Sadia Akter, hailing from Dhaka, shines with client testimonials, showcasing her professionalism and expertise. Her track record speaks volumes about her capabilities and commitment to excellence.</p>
                <h3 className="text-base sm:text-xl text-blue">mst. sadia akter</h3>
                <h6 className="text-base sm:text-base text-gray py-4">dhaka</h6>
              </div>
              <div className="relative border-2 border-blue rounded-3xl text-left p-4 md:p-6 xl:p-10 mt-20 sm:mt-0" data-aos="fade-up" data-aos-delay="100">
                <div className="">
                  <Image className="absolute top-[-34%] sm:top-[-26%] lg:top-[-24%] xl:top-[-25%]" src={Mizanur} alt="staff" />
                </div>
                <p className="text-sm sm:text-lg text-gray pt-28 pb-8">Mizanur Islam of Khulna is your trusted partner, offering expert guidance and personalized support. With integrity and professionalism, he helps clients achieve success in their endeavors.</p>
                <h3 className="text-base sm:text-xl text-blue">Mizanur islam</h3>
                <h6 className="text-base sm:text-base text-gray py-4">khulna</h6>
              </div>
              <div className="relative border-2 border-blue rounded-3xl text-left p-4 md:p-6 xl:p-10 mt-20 lg:mt-0 sm:mt-40" data-aos="fade-up" data-aos-delay="100">
                <div className="">
                  <Image className="absolute top-[-34%] sm:top-[-26%] lg:top-[-24%] xl:top-[-25%]" src={mahim} alt="staff" />
                </div>
                <p className="text-sm sm:text-lg text-gray pt-28 pb-8">Mahim Miya from Chittagong offers compelling client testimonials, showcasing satisfaction and trust. His track record reflects reliability and excellence, supported by impressive statistics.</p>
                <h3 className="text-base sm:text-xl text-blue">md. mahim miya</h3>
                <h6 className="text-base sm:text-base text-gray py-4">Chittagong</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky sm:mb-12">
        <div className="container mx-auto gap-20 mt-10 text-center">
          <div className="mt-6 sm:mt-20 pb-2 sm:pb-12">
            <div className="container mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold pt-4 sm:py-20 "><span className="text-blue">Our</span> Portfolio</h3>
              <Portfolio images={PortFolioImages} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray mb-12">
        <div className="container mx-auto gap-20 mt-10 text-center">
          <div className="sm:mt-20 sm:pb-12">
            <div className="container mx-auto">
              <h3 className="text-xl sm:text-3xl font-extrabold mb-4 pt-6"><span className="text-blue">Our</span> Blog</h3>
              <p className="text-base sm:text-xl font-semibold text-center text-gray mb-4 p-1 sm:p-0">Trending Custom Software Development Blog</p>
              <div className="container mx-auto pl-3 pr-2 sm:pl-0 sm:pr-0">
                {/* <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-2 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-4 2xl:mt-8 sm:text-left">
                  {blogItems.map((blog, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105"
                      data-aos="zoom-in-up"
                      data-aos-delay={(index + 1) * 100}
                    >
                      <div className="p-2">
                        <Link href={blog.link} className="custom-hover">
                          <Image src={blog.image} alt="" className="rounded-t-lg" width={500} height={300} />
                        </Link>
                      </div>
                      <div className="px-2 sm:p-4 text-left">
                        <p className="mb-2  text-base font-normal text-gray">{blog.date}</p>
                        <p className="mb-2 text-xs sm:text-sm sm:mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
                        <Link href={blog.link} className="inline-flex items-center mb-1 sm:mb-0 px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg hover:bg-white hover:text-blue hover:border-blue border hover:border-solid">
                          See Full Article
                        </Link>
                      </div>
                    </div>
                  ))}
                </div> */}
                <BlogDetailPage/>
                <div className="col-span-3 py-6 sm:py-0 sm:mt-10">
                  <button onClick={handleShowMoreClick} className="bg-blue hover:bg-blue-700 text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded hover:bg-white hover:text-blue transition duration-300 hover:shadow-xl">
                    Show Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="bg-blue text-white text-center mb-12 pb-6 pt-4 sm:pt-12">
          <h3 className="font-extrabold text-lg sm:text-2xl lg:text-3xl">Get IN TOUCH</h3>
          <p className="text-center text-sm sm:text-xl lg:text-2xl sm:px-40 xl:px-80 my-2 sm:my-6">Let’s collaborate and work something amazing together. Let’s discuss
            and build something unforgettable together.</p>
          <Link href="/contactus">
            <button className="bg-blue px-2 sm:px-4 py-1 sm:py-2 rounded-md font-semibold text-white text-sm sm:text-lg border-2 border-white hover:bg-white hover:text-blue hover:shadow-xl">Start Conversation</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;



