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
            <div className="container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={strategy}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={strategy}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">IT strategy</h2>
                        <p className="text-lg text-center">Assisting businesses in creating and executing long-term plans for their IT infrastructure and initiatives.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={server}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={server}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Cloud Computing</h2>
                        <p className="text-lg text-center">Assisting businesses in creating and executing long-term plans for their IT infrastructure and initiatives.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={cyberSecurity}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={cyberSecurity}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Cybersecurity</h2>
                        <p className="text-lg text-center">Assisting businesses in assessing cyber securityrisks, creating a security strategy, and implementing security controls.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={data}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10 "
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={data}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Data Analytics</h2>
                        <p className="text-lg text-center">Helping organizations collect, analyze, and use their data more effectively for making smarter decisions.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={networking}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10 "
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={networking}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Networking</h2>
                        <p className="text-lg text-center">Design, Implement, and Manage Business Networks.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={systemIntegration1}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10 "
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={systemIntegration1}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Systems Integration</h2>
                        <p className="text-lg text-center">Integrating various IT systems and apps into an interoperable solution environment.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={projectManagement}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10 "
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={projectManagement}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Project management</h2>
                        <p className="text-lg text-center">Ensuring IT projects are delivered on schedule and within budget is what project management entails.</p>
                    </div>
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray">
                    IT consulting and advisory services can bring immense value to businesses of all shapes and sizes in various industries, saving money while improving efficiency, lowering risks, and cutting expenses.
                </h3>
                <div className="grid grid-cols-12 gap-5 mt-8">
                    <div className="col-span-12 md:col-span-6 p-4">
                        <Image
                            src={Converted}
                            alt="email"
                            className="rounded-full"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 p-12 text-left">
                        <h2 className="font-extrabold text-2xl" style={{ textTransform: 'capitalize' }}>
                            Below are a few benefits associated<span className="text-blue"> with IT consulting and advisory services</span>
                        </h2>
                        <div className="w-64 h-1 bg-blue mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={experience1}
                                        alt="experience1"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold">Obtain expertise</h4>
                                <p className="text-lg text-gray">IT consultants and advisors possess extensive technical knowledge that allowsbusinesses to make well-informed decisions with regards to technology.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={efficacy1}
                                        alt="efficacy"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold">Increased Efficiency</h4>
                                <p className="text-lg text-gray">IT consultants and advisors can assist businesses by streamlining IT operations toboost efficiency, while at the same time helping save money through findingopportunities to cut IT expenses.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-14">
                    <p className="text-2xl text-gray font-semibold text-center ">IT consultants and advisors provide businesses with valuable services that help identify and mitigate IT risks, increasing competitiveness.</p>
                    <p className="text-2xl text-gray font-semibold text-center py-6">
                        When choosing IT consulting and advisory services, be sure to select a reputable provider with extensive experience and check references as well as their track record. When in doubt, check references provided and seek additional opinions if needed.
                    </p>
                    <p className="text-2xl text-gray font-semibold text-center ">Here are a few guidelines for selecting an IT consulting and advisory services provider:</p>
                </div>
                <div className="mb-20">
                    <h2 className="font-extrabold text-blue text-3xl pb-6">Define Your Needs</h2>
                    <p className="text-xl text-gray">Define What Your IT Goals and Challenges Are mes * seek referrals from businesses that have used IT consulting or advisory services from providers with excellent credentials such as certification as well as excellent reputation among business peers before hiring them as needed, to avoid surprises later down the line.</p>
                    <p className="text-xl text-gray py-6">To save yourself the hassle, get multiple quotes before making your choice. Don&apos;t be intimidated into choosing any provider; always ask plenty of questions regarding experience and qualifications when interviewing prospective service providers.</p>
                    <p className="text-xl text-gray">By following these tips, you can select an IT consulting and advisory services provider who will assist in reaching your business objectives.</p>
                </div>
            </div>
        </main>

    );
};

export default consulting;


