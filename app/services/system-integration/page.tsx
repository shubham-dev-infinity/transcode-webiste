import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import systemIntegration from "@public/Assets/systemIntegration.png"
import Image from "next/image";
import systemadmin from "@public/Assets/systemadmin.png"
import efficacy from "@public/Assets/icon/efficacy2.png"
import data from "@public/Assets/icon/data2.png"
import rating from "@public/Assets/icon/rating1.png"
import discount from "@public/Assets/icon/discount1.png"
import agile from "@public/Assets/icon/agile1.png"
import Maskgroup from "@public/Assets/Maskgroup.png"
import people from "@public/Assets/icon/people1.png"
import customize from "@public/Assets/icon/customize.png"
import method from "@public/Assets/icon/method.png"
import Styles from "../../components/styles.module.scss"

const integration = () => {

    return (
        <main>
            <div className={style.heroBgImage}>
                <HeroSection image={systemIntegration} text={"SYSTEM INTEGRATION SERVICES"} discription={"Bridging the Gap and Unlocking Your Potential"} />
            </div>
            <div className="container mx-auto px-4 mt-8 md:mt-16">
                <h2 className="text-base text-gray font-semibold text-center md:text-xl">Integration services help businesses overcome the difficulties inherent to connecting disparate parts of their IT infrastructure, including databases, applications and hardware - each acting in dependently from one another. Integration allows these islands to interact more seamlessly; communication data exchange between each other as part of one unified whole is enabled through this bridge of integration services.</h2>

                <div className="grid grid-cols-12 gap-5 mt-8 items-center">
                    <div className="col-span-12 md:col-span-6 p-4" data-aos="slide-up" data-aos-delay="100">
                        <Image
                            src={systemadmin}
                            alt="email"
                            className="rounded-full"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6  md:p-12 text-left">
                        <h2 className="font-extrabold text-2xl md:text-3xl">
                            Benefits of<span className="text-blue"> System integration</span>
                        </h2>
                        {/* <div className="w-64 h-1 bg-blue mb-4"></div> */}
                        <div className="w-64 h-1 bg-blue mb-4 hidden sm:block "></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={efficacy}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Increased Efficiency</h4>
                                <p className="text-base text-gray">Automated processes and workflows improve productivity while cutting manual work by eliminating manual processes.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 my-2">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={data}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Enhancement in Data Analysis</h4>
                                <p className="text-base text-gray">Consolidated information can offer deeper insight and more effective decision-making abilities, leading to enhanced analytics results that lead to increased efficiencies and greater profits for an organization.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 my-2">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={rating}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Enhanced Customer Experience</h4>
                                <p className="text-base text-gray">Seamless interactions across channels make customers satisfied and loyal, leading to cost savings through reduced redundancies and streamlining operations. This creates the best experiences and builds customer loyalty!</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 my-2">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={discount}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Reduced Costs</h4>
                                <p className="text-base text-gray">Eliminating redundancies saves time and money in both time management and operations efficiency, giving a great customer service experience that creates loyal, returning customers.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 my-2">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={agile}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Enhanced Agility</h4>
                                <p className="text-base text-gray">Integrated systems can easily adapt to changing business needs and market trends quickly, offering significant agility benefits.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-6 p-12 text-left">
                        <h2 className="font-extrabold text-2xl md:text-3xl">
                            Why should you select<span className="text-blue"> our system integration services</span>
                        </h2>                       
                        <div className="w-96 h-1 bg-blue mb-4 hidden lg:block "></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={people}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-base md:text-xl font-extrabold text-blue">Our Experienced Team</h4>
                                <p className="text-sm md:text-base text-gray">AOur experts possess considerable expertise across a range of technologiesand integrations.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={customize}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-base md:text-xl  font-extrabold text-blue">Customizable Solutions</h4>
                                <p className="text-sm md:text-base text-gray">Our experts possess considerable expertise across a range of technologies and integrations.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden" data-aos="slide-up" data-aos-delay="100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={method}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-base md:text-xl  font-extrabold text-blue">Proven Methodology</h4>
                                <p className="text-sm md:text-base text-gray">Our proven approach ensures smooth implementation and success and includes on going support to guarantee optimal performance.</p>
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-12 md:col-span-4  p-4">
                                <div className="col-span-4 flex gap-10 pt-4">
                                    <Image
                                        src={people}
                                        alt="email"
                                        className="rounded-full"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <div className="items-center justify-center pt-4">
                                        <h4 className="text-3xl font-extrabold text-blue">Our Experienced Team</h4>
                                        <p className="text-lg text-gray">Our experts possess considerable expertise across a range of technologiesand integrations.</p>
                                    </div>
                                </div>
                                <div className="col-span-4 flex gap-10 pt-4">
                                    <Image
                                        src={customize}
                                        alt="letTalk"
                                        className="rounded-full"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <div className="items-center justify-center pt-4">
                                        <h4 className="text-3xl font-extrabold text-blue">Customizable Solutions</h4>
                                        <p className="text-lg text-gray">Our experts possess considerable expertise across a range of technologies and integrations.</p>
                                    </div>
                                </div>
                                <div className="col-span-4 flex gap-10 pt-4">
                                    <Image
                                        src={method}
                                        alt="email"
                                        className="rounded-full"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <div className="items-center justify-center pt-4">
                                        <h4 className="text-3xl font-extrabold text-blue">Proven Methodology</h4>
                                        <p className="text-lg text-gray">Our proven approach ensures smooth implementation and success and includes on going support to guarantee optimal performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-span-12 md:col-span-6 p-4" data-aos="slide-up" data-aos-delay="100">
                        <Image
                            src={Maskgroup}
                            alt="email"
                            style={{ width: '720px', height: '700px' }}
                        />
                    </div>
                </div>
                <div className="my-7 md:my-14">
                    <h2 className="text-blue font-extrabold text-xl md:text-2xl pb-6">Are You Looking To Unlock The Potential Of Integrated Systems?</h2>
                    <ul className={Styles.list_Style}>
                        <li className="text-gray">Contact us now for a complimentary consultation to see how our system integration services can transform your business!</li>
                        <li className="text-gray">Additionally, consider these elements</li>
                        <li className="text-gray">Showcasing specific areas of expertise such as cloud integration or IoT integration</li>
                        <li className="text-gray">Showcasing successful case studies</li>
                        <li className="text-gray">Demonstrate how your services have made an impactful statement about itself</li>
                        <li className="text-gray">Providing industry insights as thought leaders</li>
                        <li className="text-gray">Providing invaluable resources</li>
                        <li className="text-gray">Offering free white papers and webinars as valuable resources is always something worthwhile!</li>
                    </ul>
                    <p className="text-base md:text-lg text-gray">By offering relevant information and emphasizing your unique value proposition, you can attract prospective clients while reaching your marketing objectives.</p>
                </div>
            </div>
        </main>
    );
};

export default integration;


