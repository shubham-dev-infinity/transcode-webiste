import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import qualityTesting from "@public/Assets/qualityTesting.png"
import Image from "next/image";
import IncreaseStakeholder from "@public/Assets/IncreaseStakeholder.png"
import testing from "@public/Assets/icon/testing.png"
import performance from "@public/Assets/icon/performance.png"
import mobileApp from "@public/Assets/icon/mobileApp.png"

const quality = () => {

    return (
        <main>
            <div className={style.heroBgImage}>
                <HeroSection image={qualityTesting} text={"QUALITY ASSURANCE AND TESTING"} discription={"Establishing Trust and Achieving Excellence"} />
            </div>
            <div className="container mx-auto my-4 px-4 md:mt-16 md:mb-32">
                <div className="">
                    <h3 className="text-xl md:text-2xl text-gray font-semibold mb-8">
                        Quality assurance and testing are often underappreciated aspects ofsoftware development. Their role ensures applications we rely on are reliable,secure, and user-friendly—but what exactly are these tests all about?
                    </h3>
                    <p className="font-bold text-gray text-lg md:text-xl">
                        Quality assurance (QA) is an approach geared toward identifying, mitigating, and eliminating defects throughout the development process. In other words,
                    </p>
                    <ul className="list-disc list-inside text-blue p-2 leading-relaxed mb-6">
                        <li className="text-gray text-base md:text-lg">Establishing clear requirements and specifications</li>
                        <li className="text-gray text-base md:text-lg">Reviewing code early and often</li>
                        <li className="text-gray text-base md:text-lg">Implement automated testing tools</li>
                        <li className="text-gray text-base md:text-lg">Proactively identify and mitigate risks</li>
                    </ul>
                    <p className="font-bold text-gray text-lg md:text-xl">Software testing is the practical arm of Quality Assurance (QA), overseeing tests to confirm that software functions as intended. This may involve:</p>
                    <ul className="list-disc list-inside text-blue p-2 leading-relaxed mb-6">
                        <li className="text-gray text-base md:text-lg">Functional testing entails verifying features work as intended, while non-functional testing evaluates performance, usability, and security (NFT). Regression testing verifies stability after changes are implemented, while exploratory testing uncovers edge cases or hidden defects.</li>
                    </ul>
                    <h2 className="text-blue font-extrabold text-3xl pb-4">Why Are Quality Assurance and Testing So Crucial?</h2>
                    <h3 className="text-blue text-xl md:text-2xl font-extrabold">Reduced Costs :</h3>
                    <p className="text-gray text-lg md:text-xl pb-3">Spotting and fixing bugs early saves both time and money as opposed to post-release fixes.</p>
                    <h3 className="text-blue text-xl md:text-2xl font-extrabold">Improved User Experience</h3>
                    <p className="text-gray text-lg md:text-xl pb-10">Software that&apos;s bug free increases usersatisfaction and loyalty.</p>
                    <p className="text-gray text-lg md:text-xl pb-2">Proactive testing helps address vulnerabilities before they&apos;re exploited by attackers and reduce stakeholder trust by assuring investors, partners, and customers of its thorough testing procedures.</p>
                    <p className="text-gray text-lg md:text-xl pb-10">[Enhanced Security ]: Proactive testing helps identify vulnerabilities before they&apos;re exploited in exploitative ways by hackers or malware authors.</p>
                    <h3 className="text-blue text-xl md:text-2xl font-extrabold pb-3">Increase Stakeholder Confidence :</h3>
                    <p className="text-gray text-lg md:text-xl pb-3">Knowing that their software has been rigorously screened can increase confidence among investors, partners, and customers.</p>
                    <p className="text-gray text-lg md:text-xl pb-3">How can we assist you? Our range of quality& testing services has been tailored specifically to suit the unique requirements of each of our clients:</p>
                </div>
                <div className="grid grid-cols-12 gap-5 md:my-8 items-center">
                    <div className="col-span-12 md:col-span-6 p-4" data-aos="slide-up" data-aos-delay="100">
                        <Image
                            src={IncreaseStakeholder}
                            alt="email"
                            width={708} height={708}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 px-12 md:p-12 text-left">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={testing}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl md:text-2xl font-extrabold text-blue">Manual and Automated Testing</h4>
                                <p className="text-sm md:text-base text-gray">Our highly skilled testers combine manual and automated testing tools for maximum coverage.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={performance}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl md:text-2xl font-extrabold text-blue">Performance & Security Testing</h4>
                                <p className="text-sm md:text-base text-gray">We ensure your software performs optimally while meeting security compliance.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={mobileApp}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl md:text-2xl font-extrabold text-blue">Mobile and Web Testing</h4>
                                <p className="text-sm md:text-base text-gray">Our tests encompass various devices and platforms to provide users with asmooth user experience. Our consulting & training experts share their expertise to establish an efficient QA culture within organizations of any size.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <p className="text-gray text-lg md:text-xl pb-5">Are you wanting to enhance the quality and trustworthiness of your software?</p>
                    <p className="text-gray text-lg md:text-xl">Reach out today for a complimentary consultation and discover how our Quality Assurance (QA) & Testing solutions can assist in creating exceptional software experiences for customers.</p>
                </div>
                <div className="mb-2">
                    <h3 className="text-blue text-xl md:text-2xl font-extrabold pb-4">Additional Tips :</h3>
                    <p className="text-gray text-lg md:text-xl">To showcase the expertise and certifications of your team. Show case studies that showcase how clients benefited from working with your organization. Offer white papers, webinars, or any other resources designed to educate potential clients.</p>
                    <p className="text-gray text-lg md:text-xl py-10">Get involved with industry events and conferences to boost brand recognition and expand market presence.</p>
                    <p className="text-gray text-lg md:text-xl">By demonstrating your expertise and value proposition, you can attract businesses seeking high-quality software solutions.</p>
                </div>
            </div>
        </main>

    );
};

export default quality;
