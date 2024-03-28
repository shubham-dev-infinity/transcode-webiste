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
const integration = () => {

    return (
        <main>
            <div className={style.heroBgImage}>
                <HeroSection image={systemIntegration} text={"SYSTEM INTEGRATION SERVICES"} discription={"Bridging the Gap and Unlocking Your Potential"} />
            </div>
            <div className="container mx-auto px-4 mt-16">
                <h2 className="text-2xl text-gray font-semibold text-center">Integration services help businesses overcome the difficulties inherent to connecting disparate parts of their IT infrastructure, including databases, applications and hardware - each acting in dependently from one another. Integration allows these islands to interact more seamlessly; communication data exchange between each other as part of one unified whole is enabled through this bridge of integration services.</h2>

                <div className="grid grid-cols-12 gap-5 mt-8 items-center">
                    <div className="col-span-12 md:col-span-6 p-4">
                        <Image
                            src={systemadmin}
                            alt="email"
                            className="rounded-full"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 p-12 text-left">
                        <h2 className="font-extrabold text-3xl">
                            Benefits of<span className="text-blue"> System integration</span>
                        </h2>
                        <div className="w-64 h-1 bg-blue mb-4"></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={efficacy}
                                        alt="efficacy"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Increased Efficiency</h4>
                                <p className="text-lg text-gray">Automated processes and workflows improve productivity while cutting manual work by eliminating manual processes.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 my-2">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={data}
                                        alt="data"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Enhancement in Data Analysis</h4>
                                <p className="text-lg text-gray">Consolidated information can offer deeper insight and more effective decision-making abilities, leading to enhanced analytics results that lead to increased efficiencies and greater profits for an organization.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 my-2">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={rating}
                                        alt="rating"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Enhanced Customer Experience</h4>
                                <p className="text-lg text-gray">Seamless interactions across channels make customers satisfied and loyal, leading to cost savings through reduced redundancies and streamlining operations. This creates the best experiences and builds customer loyalty!</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 my-2">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={discount}
                                        alt="discount"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Reduced Costs</h4>
                                <p className="text-lg text-gray">Eliminating redundancies saves time and money in both time management and operations efficiency, giving a great customer service experience that creates loyal, returning customers.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 my-2">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={agile}
                                        alt="agile"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Enhanced Agility</h4>
                                <p className="text-lg text-gray">Integrated systems can easily adapt to changing business needs and market trends quickly, offering significant agility benefits.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5 mt-8">
                    <div className="col-span-12 md:col-span-6 p-12 text-left">
                        <h2 className="font-extrabold text-3xl">
                            Why should you select<span className="text-blue"> our system integration services</span>
                        </h2>
                        <div className="w-96 h-1 bg-blue mb-4"></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={people}
                                        alt="people"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Our Experienced Team</h4>
                                <p className="text-lg text-gray">AOur experts possess considerable expertise across a range of technologiesand integrations.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={customize}
                                        alt="customize"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Customizable Solutions</h4>
                                <p className="text-lg text-gray">Our experts possess considerable expertise across a range of technologies and integrations.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={method}
                                        alt="method"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Proven Methodology</h4>
                                <p className="text-lg text-gray">Our proven approach ensures smooth implementation and success and includes on going support to guarantee optimal performance.</p>
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
                    <div className="col-span-12 md:col-span-6 p-4">
                        <Image
                            src={Maskgroup}
                            alt="email"
                            style={{ width: '720px', height: '700px' }}
                        />
                    </div>
                </div>
                <div className="my-14">
                    <h2 className="text-blue font-extrabold text-3xl pb-6">Are You Looking To Unlock The Potential Of Integrated Systems?</h2>
                    <ul className="list-disc list-inside text-blue p-2 leading-relaxed mb-6">
                        <li className="text-gray text-xl">Contact us now for a complimentary consultation to see how our system integration services can transform your business!</li>
                        <li className="text-gray text-xl">Additionally, consider these elements</li>
                        <li className="text-gray text-xl">Showcasing specific areas of expertise such as cloud integration or IoT integration</li>
                        <li className="text-gray text-xl">Showcasing successful case studies</li>
                        <li className="text-gray text-xl">Demonstrate how your services have made an impactful statement about itself</li>
                        <li className="text-gray text-xl">Providing industry insights as thought leaders</li>
                        <li className="text-gray text-xl">Providing invaluable resources</li>
                        <li className="text-gray text-xl">Offering free white papers and webinars as valuable resources is always something worthwhile!</li>
                    </ul>
                    <p className="text-xl text-gray">By offering relevant information and emphasizing your unique value proposition, you can attract prospective clients while reaching your marketing objectives.</p>
                </div>
            </div>
        </main>
    );
};

export default integration;


