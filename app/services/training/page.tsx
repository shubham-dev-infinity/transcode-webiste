import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import trainingEducation from "@public/Assets/trainingEducation.png"
import Image from "next/image";
import webanalystOnline from "@public/Assets/webanalystOnline.png"
import innovation from "@public/Assets/icon/innovation.png"
import collaboration from "@public/Assets/icon/collaboration.png"
import personalGrowth from "@public/Assets/icon/personalGrowth.png"
import businessman from "@public/Assets/icon/businessman.png"
import interaction from "@public/Assets/icon/interaction.png"

const training = () => {

    return (
        <main>
            <div className={style.heroBgImage}>
                <HeroSection image={trainingEducation} text={"TRAINING AND EDUCATION"} discription={"Transforming Future Learners One at a Time"} />
            </div>
            <div className="container mx-auto px-4 mt-16">
                <div className="text-lg md:text-xl text-gray font-semibold mb-8">
                    <p>
                        Training and education are vital pillars of a thriving society. Individuals gain the knowledge, skills, and values needed to navigate the complexity of modern society while contributing meaningfully to their communities. Through new technical abilities acquisition, expanding personal horizons exploration, or professional growth training and education provide pathways towards both personal and collective progress.
                    </p>
                    <p className="py-6">
                        Training and education cover an expansive spectrum, covering everything from formal to informal learning experiences. Classroom settings, vocational programs, online courses, apprenticeships, and self-directed initiatives all offer different forms of formal and informal instruction designed to cater for diverse learning preferences and individual needs.
                    </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-center"><span className="text-blue">Our Managed IT Services</span> consist of the following elements</h2>
                <div className="grid grid-cols-12 gap-5 mt-8 items-center">
                    <div className="col-span-12 md:col-span-6 p-4">
                        <Image
                            src={webanalystOnline}
                            alt="email"
                            width={730} height={674}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 px-12 pb-12  md:p-12 text-left">
                        <h2 className="font-extrabold text-2xl md:text-3xl">
                            key <span className="text-blue font-extrabold text-2xl md:text-3xl">benefits</span>
                        </h2>
                        {/* <div className="w-36 h-1 bg-blue mb-2"></div> */}
                        <div className="w-36 h-1 bg-blue mb-6 hidden sm:block "></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={businessman}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl md:text-2xl font-extrabold text-blue">Enhanced employability</h4>
                                <p className="text-sm md:text-base text-gray">To equip individuals with the skills and qualifications desired by employers in order to increase their chances of securing jobs they desire while furthering their careers.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={personalGrowth}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl md:text-2xl font-extrabold text-blue">Personal Growth and Development</h4>
                                <p className="text-sm md:text-base text-gray">Foster the acquisition of new knowledge, widen perspectives, develop critical thinking abilities and problem-solving techniques, foster critical thinking abilities, and foster problem-solving abilities.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={collaboration}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl md:text-2xl font-extrabold text-blue">Enhanced communication and collaboration</h4>
                                <p className="text-sm md:text-base text-gray">These courses focus on building effective communication and collaborative strategies, helping individuals work better with others.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={interaction}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl md:text-2xl font-extrabold text-blue">Civic engagement and positive social change</h4>
                                <p className="text-sm md:text-base text-gray">These courses focus on building effective communication and collaborative strategies, helping individuals work better with others.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={innovation}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl md:text-2xl font-extrabold text-blue">Innovation and economic growth</h4>
                                <p className="text-sm md:text-base text-gray">Foster a skilled, adaptable workforce capable of driving innovation and economic prosperity..</p>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div className="mb-12">
                    <div className="my-4">
                        <h3 className="font-extrabold text-blue text-xl md:text-2xl pb-3">Challenges and Opportunities</h3>
                        <p className="text-gray text-sm md:text-base">Even with its many benefits, education and training present several unique obstacles:</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-extrabold text-blue text-xl md:text-2xl pb-3">Accessibility and affordability :</h3>
                        <p className="text-gray text-sm md:text-base">Ensuring equal access to high-quality training and education regardlessof socioeconomic background is of utmost importance.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-extrabold text-blue text-xl md:text-2xl pb-3">Project-Based Services :</h3>
                        <p className="text-gray text-sm md:text-base">Our project-based services address specific ITrequirements or challenges.</p>
                    </div>
                    <div className="mb-4 ">
                        <h3 className="font-extrabold text-blue text-xl md:text-2xl">Relevance and responsiveness :</h3>
                        <p className="text-gray text-sm md:text-base py-3">Staying ahead of fast-evolved technological innovations and industry requirements to make sure skills taught remainapplicable and appropriate is of utmost importance for success in any work place environment.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-extrabold text-blue text-xl md:text-2xl">Engagement and Motivation :</h3>
                        <p className="text-gray text-sm md:text-base py-3">Staying ahead of fast-evolved technological innovations and industry requirements to make sure skills taught remain applicable and appropriate is of utmost importance for success in any workplace environment.</p>
                        <p className="text-gray text-sm md:text-base">These challenges present opportunities for innovation and improvement. By harnessing technology, adapting multiple learning modalities, and cultivating partnerships between educators, employers, and policymakers we can build an education system that supports inclusive growth within individuals as well as societies alike in today&apos;s 21st Century society.</p>
                    </div>
                    <div className="">
                        <h3 className="font-extrabold text-blue text-xl md:text-2xl">Conclusion :</h3>
                        <p className="text-gray text-sm md:text-base py-3">Education and training are investments that we all can benefit from today and in the future. By prioritizing learning, nurturing talent, and encouraging lifelong education, we can create a brighter tomorrow for ourselves all.</p>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default training;



