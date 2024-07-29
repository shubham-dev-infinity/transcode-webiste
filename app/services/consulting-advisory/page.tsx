import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import consultingAdvisory from "@public/Assets/consultingAdvisory.png"
import Image from "next/image";
import strategy from "@public/Assets/icon/strategy.png"
import server from "@public/Assets/icon/server.png"
import cyberSecurity from "@public/Assets/icon/cyberSecurity.png"
import data from "@public/Assets/icon/data.png"
import networking from "@public/Assets/icon/networking.png"
import systemIntegration1 from "@public/Assets/icon/systemIntegration1.png"
import projectManagement from "@public/Assets/icon/projectManagement.png"
import Converted from "@public/Assets/Converted.png"
import experience1 from "@public/Assets/icon/experience1.png"
import efficacy1 from "@public/Assets/icon/efficacy1.png"
const consulting = () => {

    return (
        <main>
            <div className={style.heroBgImage}>
                <HeroSection image={consultingAdvisory} text={"IT CONSULTING AND ADVISORY SERVICES"} discription={"IT consulting and advisory services provide professional assistance that assists businesses in using technology effectively to reach their business objectives. Such services cover an extensive array of disciplines."} />
            </div>
            <div className="mt-8 container mx-auto px-4 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-4">
                    <div className="bg-gray p-4 relative rounded-3xl sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10" data-aos="zoom-in" data-aos-delay="100">                      
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={strategy}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-blue text-center mb-2 sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">IT strategy</h2>
                        <p className="text-sm text-center sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">Assisting businesses in creating and executing long-term plans for their IT infrastructure and initiatives.</p>
                    </div>
                    <div className="bg-gray p-4 relative rounded-3xl sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10" data-aos="zoom-in" data-aos-delay="100">                      
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={server}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-blue text-center mb-2 sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Cloud Computing</h2>
                        <p className="text-sm text-center sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">Assisting businesses in creating and executing long-term plans for their IT infrastructure and initiatives.</p>
                    </div>
                    <div className="bg-gray p-4 relative rounded-3xl sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10" data-aos="zoom-in" data-aos-delay="100">                     
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={cyberSecurity}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-blue text-center mb-2 sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Cybersecurity</h2>
                        <p className="text-sm text-center sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">Assisting businesses in assessing cyber securityrisks, creating a security strategy, and implementing security controls.</p>
                    </div>
                    <div className="bg-gray p-4 relative rounded-3xl sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10" data-aos="zoom-in" data-aos-delay="100">                       
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={data}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-blue text-center mb-2 sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Data Analytics</h2>
                        <p className="text-sm text-center sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">Helping organizations collect, analyze, and use their data more effectively for making smarter decisions.</p>
                    </div>
                    <div className="bg-gray p-4 relative rounded-3xl sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10" data-aos="zoom-in" data-aos-delay="100">                        
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={networking}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-blue text-center mb-2 sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Networking</h2>
                        <p className="text-sm text-center sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">Design, Implement, and Manage Business Networks.</p>
                    </div>
                    <div className="bg-gray p-4 relative rounded-3xl sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10" data-aos="zoom-in" data-aos-delay="100">                        
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={systemIntegration1}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-blue text-center mb-2 sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Systems Integration</h2>
                        <p className="text-sm text-center sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">Integrating various IT systems and apps into an interoperable solution environment.</p>
                    </div>
                    <div className="bg-gray p-4 relative rounded-3xl sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10" data-aos="zoom-in" data-aos-delay="100">                      
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={projectManagement}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-blue text-center mb-2 sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Project management</h2>
                        <p className="text-sm text-center sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">Ensuring IT projects are delivered on schedule and within budget is what project management entails.</p>
                    </div>
                </div>
                <h3 className="text-base font-semibold text-center text-gray sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                    IT consulting and advisory services can bring immense value to businesses of all shapes and sizes in various industries, saving money while improving efficiency, lowering risks, and cutting expenses.
                </h3>
                <div className="grid grid-cols-12 gap-5 mt-8">
                    <div className="col-span-12 lg:col-span-6 p-4" data-aos="slide-up" data-aos-delay="100">
                        <Image
                            src={Converted}
                            alt="email"
                            className="rounded-full"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-6 p-12 text-left">
                        <h2 className="font-extrabold text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl" style={{ textTransform: 'capitalize' }}>
                            Below are a few benefits associated<span className="text-blue"> with IT consulting and advisory services</span>
                        </h2>
                        {/* <div className="w-64 h-1 bg-blue mb-6 "></div> */}
                        <div className="w-64 h-1 bg-blue mb-6 hidden sm:block "></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={experience1}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h3 className="text-lg font-extrabold md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Obtain expertise</h3>
                                <p className="text-sm text-gray sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">IT consultants and advisors possess extensive technical knowledge that allowsbusinesses to make well-informed decisions with regards to technology.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={efficacy1}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-lg font-extrabold md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Increased Efficiency</h4>
                                <p className="text-sm text-gray sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base">IT consultants and advisors can assist businesses by streamlining IT operations toboost efficiency, while at the same time helping save money through findingopportunities to cut IT expenses.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-7 md:mb-14">
                    <p className="text-base text-gray font-semibold text-center sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl ">IT consultants and advisors provide businesses with valuable services that help identify and mitigate IT risks, increasing competitiveness.</p>
                    <p className="text-base text-gray font-semibold text-center py-6 sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
                        When choosing IT consulting and advisory services, be sure to select a reputable provider with extensive experience and check references as well as their track record. When in doubt, check references provided and seek additional opinions if needed.
                    </p>
                    <p className="text-base text-gray font-semibold text-center sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">Here are a few guidelines for selecting an IT consulting and advisory services provider:</p>
                </div>
                <div className="mb-20">
                    <h2 className="font-extrabold text-blue text-2xl md:text-3xl pb-2 md:pb-6">Define Your Needs</h2>
                    <p className="text-sm text-gray md:text-base">Define What Your IT Goals and Challenges Are mes * seek referrals from businesses that have used IT consulting or advisory services from providers with excellent credentials such as certification as well as excellent reputation among business peers before hiring them as needed, to avoid surprises later down the line.</p>
                    <p className="text-sm text-gray py-6 md:text-base">To save yourself the hassle, get multiple quotes before making your choice. Don&apos;t be intimidated into choosing any provider; always ask plenty of questions regarding experience and qualifications when interviewing prospective service providers.</p>
                    <p className="text-sm text-gray md:text-base">By following these tips, you can select an IT consulting and advisory services provider who will assist in reaching your business objectives.</p>
                </div>
            </div>
        </main>

    );
};

export default consulting;


