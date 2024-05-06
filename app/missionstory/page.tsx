import HeroSection from "@/components/HeroSection";
import missionStory from "@public/Assets/MissionStory.png";
import style from "../components/styles.module.scss";
import styles from "./styles.module.scss";
import Image from "next/image";
import ProblemsImage from "@public/Assets/ProblemsImage.png"
import opportunitiesImage from "@public/Assets/opportunitiesImage.png"
import ExperienceImage from "@public/Assets/ExperienceImage.png"
import Doing from "@public/Assets/Doing2.png"
import Problems from "@public/Assets/Problems.png"
import Opportunities from "@public/Assets/Opportunities.png"
import Experience from "@public/Assets/Experience.png"
import technologies from "@public/Assets/technologies.png"
import fasterServices from "@public/Assets/fasterServices.png"
import resource from "@public/Assets/resource.png"
import experimenting from "@public/Assets/experimenting.png"
import development from "@public/Assets/development.png"
import Maskgroups from "@public/Assets/Maskgroups.png"

const MissionStory = () => {

    return (
        <main className="mb-20">
            <div className={style.heroBgImage}>
                <HeroSection image={missionStory} text={"Our Mission Story"} />
            </div>
            <div className="container mx-auto my-10 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="md:col-span-1 flex items-center justify-center" data-aos="fade-right" data-aos-delay="100">
                        <Image src={Maskgroups} alt="" width={720} height={500} />
                    </div>
                    <div className="md:col-span-1 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="100">
                        <h2 className="text-blue font-extrabold text-xl sm:text-2xl xl:text-3xl">Mission Statement</h2>
                        <h3 className="text-lg sm:text-xl xl:text-2xl text-gray py-2 sm:py-6">At Transcodezy  Solutions, we empower every startup and entrepreneur to achieve their unique vision. Our mission is to provide innovative, scalable, and tailored IT solutions that enable our clients to transform their ideas into reality, ensuring they have the tools and support necessary to thrive in a dynamic global marketplace.</h3>                      
                    </div>
                </div>
                <div className="mb-16">
                    <h2 className="text-blue text-center text-xl sm:text-2xl xl:text-3xl font-extrabold">Mission Story</h2>
                    <p className="text-gray text-lg md:text-xl 2xl:text-2xl py-4">In the heart of the bustling tech industry, Transcodezy  Solutions was founded with a singular purpose: to serve as a catalyst for innovation and success for startups and entrepreneurs across the globe. Recognizing the challenges and hurdles that new ventures face, we set out to create a company that not only provides cutting-edge IT solutions but also partners with our clients to help them realize their visions.</p>
                    <p className="text-gray text-lg md:text-xl xl:text-2xl py-4">Our journey began with a small team of passionate IT professionals who believed in the transformative power of technology. As we grew, so did our capabilities and our understanding of the unique needs of startups. We learned that beyond just technical solutions, these companies needed a partner who could understand their vision, anticipate their needs, and provide support at every step of their growth.</p>
                    <p className="text-gray text-lg md:text-xl xl:text-2xl py-4">Today, Transcodezy  Solutions stands as a beacon of innovation and support for entrepreneurs. We have helped hundreds of startups to launch, scale, and succeed in competitive markets. Our approach is simple yet powerful: listen to our clients, understand their vision, and deliver solutions that are not just effective but transformative.</p>
                    <p className="text-gray text-lg md:text-xl xl:text-2xl py-4">Our mission is not just about technology; it&apos;s about people and their dreams. Every project we undertake is a step towards fulfilling this mission, helping each entrepreneur to not just navigate the complex world of technology but to master it. We are more than just a service provider; we are a partner in innovation, a supporter of dreams, and a believer in the potential of every startup to change the world.</p>
                    <p className="text-gray text-lg md:text-xl xl:text-2xl py-4">By aligning our expertise with the aspirations of our clients, we continue to forge paths towards a future where every entrepreneur can achieve their vision. This is not just our mission; it &apos;s our commitment to the world.</p>
                </div>
                <div className={styles.BgImage}>
                    <div className="grid grid-cols-12 gap-8 mb-8 p-6 text-2xl font-bold">
                        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay="100">
                            <Image src={Problems} alt="Problems" width={300} height={300} />
                            <h3 className="hover:text-blue mt-4">Problems In The World</h3>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay="100">
                            <Image src={Opportunities} alt="Opportunities" width={300} height={300} />
                            <h3 className="hover:text-blue mt-4">Opportunities</h3>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-delay="100">
                            <Image src={Experience} alt="Experience" width={300} height={300} />
                            <h3 className="hover:text-blue mt-4">My Past Experience</h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="md:col-span-1 flex items-center justify-center" data-aos="fade-right" data-aos-delay="100">
                        <Image src={ProblemsImage} alt="" width={720} height={500} />
                    </div>
                    <div className="md:col-span-1 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="100">
                        <h2 className="text-blue font-extrabold text-3xl pt-8 md:pt-0">PROBLEMS IN THE WORLD</h2>
                        <h3 className="text-xl font-semibold py-6">Most custom software built in this world is not launched or crosses the curve of early adopters that causes waste of resources and money. It is due to</h3>
                        <p className="text-gray text-xl">A. The software offers all the features of fantasy except the effective solution for the core problem it was supposed to solve.</p>
                        <p className="text-gray text-xl py-6">B. The software is designed with investors in mind rather than the user who will use it.</p>
                        <p className="text-gray text-xl">C. It takes a long time to get the software in front of the user, at the time it is launched either does not exist anymore or is no longer relevant.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="md:col-span-1 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="100">
                        <h2 className="text-blue font-extrabold text-3xl pt-20 md:pt-0">OPPORTUNITIES</h2>
                        <p className="text-gray text-xl pt-4">Once the client software is built with the efficient process, do a proper problem analysis and research with the real user in the center, faster and more frequent software releases to shorten the feedback cycle and stay focused on the core problem. It helps companies provide better services to their customers and resolve their problems with better value for money. It brings innovations in practical use and encourages the companies to make more experiments, upgrades, and broader adoption of the latest technology</p>
                    </div>
                    <div className="md:col-span-1 flex items-center justify-center" data-aos="fade-left" data-aos-delay="100">
                        <Image src={opportunitiesImage} alt="" width={720} height={500} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="md:col-span-1 flex items-center justify-center" data-aos="fade-right" data-aos-delay="100">
                        <Image src={ExperienceImage} alt="" width={720} height={500} />
                    </div>
                    <div className="md:col-span-1 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="100">
                        <h2 className="text-blue font-extrabold text-2xl py-8 md:pb-6 md:py-0">MY PAST EXPERIENCES</h2>
                        <p className="text-gray text-xl">In the past, I have seen and also have contributed to failed custom software missions. I have seen and worked with companies who have spent millions and years of valuable time in a failed attempt to build custom software or upgrade an existing system to the latest technology. This led the company to major layoffs and to stick to old and inefficient systems compared to current times. This impacted their customer to be away from better possible services. It also had an impact on the world by inefficient use of resources which could be used to solve the world&apos;s common problems. It also slows down innovation in companies because they are now more resistant to change as well as experiment.</p>
                    </div>
                </div>
                <div className="my-16">
                    <h2 className="text-center font-extrabold text-3xl mb-14"><span className="text-blue">WHAT AM</span> I DOING</h2>
                    {/* <div className="grid grid-cols-12 gap-8 mb-8">
                        <div className="col-span-12 sm:col-span-6">
                            <div className="hidden xl:block">
                                <Image src={Doing} alt="Doing" width={563.91} height={2500} />
                            </div>
                            <div className="xl:hidden grid grid-cols-1 pl-12 gap-7 xl:pl-16 md:gap-10 xl:gap-12 2xl:gap-4">
                                <Image src={development} alt="Development" width={260} height={250} />
                                <Image src={experimenting} alt="Experimenting" width={260} height={250} />
                                <Image src={resource} alt="Resource" width={260} height={250} />
                                <Image src={fasterServices} alt="Faster Services" width={260} height={250} />
                                <Image src={technologies} alt="Technologies" width={260} height={250} />
                            </div>
                        </div> */}
                    <div className="grid grid-cols-12 gap-8 mb-8">
                        <div className="col-span-12 sm:col-span-6">
                            <div className="hidden xl:block">
                                <Image src={Doing} alt="Doing" width={563.91} height={2500} />
                            </div>
                            <div className="xl:hidden grid grid-cols-1 pl-12  md:pl-12 lg:pl-28 gap-7 xl:pl-16 md:gap-10 xl:gap-12 2xl:gap-4">
                                <Image src={development} alt="Development" width={260} height={250} />
                                <p className="sm:hidden text-gray text-base lg:text-base xl:text-2xl font-medium pt-2 md:pt-4 lg:pt-12 xl:pt-52">From the experience of my past failures and witnessing the failure of others in custom software development, I have realized the real core ingredients required to build real needed, problem-focused software that solves users&apos; actual problems. I understand good software requires more than talented engineers who know how to build.</p>
                                <Image src={experimenting} alt="Experimenting" width={260} height={250} />
                                <p className="sm:hidden text-gray text-base lg:text-base xl:text-2xl font-medium py-6 md:py-28 lg:py-40 xl:py-64">To better serve our customers in building problem-centric software and adapt the latest technology, I want to keep the spirit of engineers alive to keep experimenting and be early adopters of the latest technologies. We keep ourselves aware of our processes and always strive for continued improvements to build and serve better.</p>
                                <Image src={resource} alt="Resource" width={260} height={250} />
                                <p className="sm:hidden text-gray text-base lg:text-base xl:text-2xl font-medium sm:py-8 xl:py-20">I am not running yet another resource augmentation company. We own the problem and take accountability and ownership to build a solution that solves the root of the issues.</p>
                                <Image src={fasterServices} alt="Faster Services" width={260} height={250} />
                                <p className="sm:hidden text-gray text-base lg:text-base xl:text-2xl font-medium py-6 md:py-40 lg:pt-56 lg:pb-48 xl:py-72">I have helped my customers to successfully replace their decade older systems with new and better software to provide better and faster services to more users.</p>
                                <Image src={technologies} alt="Technologies" width={260} height={250} />
                                <p className="sm:hidden text-gray text-base lg:text-base xl:text-2xl font-medium md:pt-8 lg:pt-0 xl:pt-20">I want to reduce the failure rate in custom software development and system migrations to new technologies to get better services and opportunities for more users.</p>
                            </div>
                        </div>
                        <div className="hidden sm:block col-span-12 sm:col-span-6">
                            <p className="text-gray text-base lg:text-base xl:text-2xl font-medium pt-2 md:pt-4 lg:pt-12 xl:pt-52 ">From the experience of my past failures and witnessing the failure of others in custom software development, I have realized the real core ingredients required to build real needed, problem-focused software that solves users&apos; actual problems. I understand good software requires more than talented engineers who know how to build.</p>
                            <p className="text-gray text-base lg:text-base xl:text-2xl font-medium py-6 md:py-28 lg:py-40 xl:py-64 ">To better serve our customers in building problem-centric software and adapt the latest technology, I want to keep the spirit of engineers alive to keep experimenting and be early adopters of the latest technologies. We keep ourselves aware of our processes and always strive for continued improvements to build and serve better.</p>
                            <p className="text-gray text-base lg:text-base xl:text-2xl font-medium sm:py-8 xl:py-20 ">I am not running yet another resource augmentation company. We own the problem and take accountability and ownership to build a solution that solves the root of the issues.</p>
                            <p className="text-gray text-base lg:text-base xl:text-2xl font-medium py-6 md:py-40 lg:pt-56 lg:pb-48 xl:py-72">I have helped my customers to successfully replace their decade older systems with new and better software to provide better and faster services to more users.</p>
                            <p className="text-gray text-base lg:text-base xl:text-2xl font-medium md:pt-8 lg:pt-0 xl:pt-20">I want to reduce the failure rate in custom software development and system migrations to new technologies to get better services and opportunities for more users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MissionStory;
