
import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import softwareDevelopment from "@public/Assets/softwareDevelopment.png"
import Image from "next/image";
import softwareLicense from "@public/Assets/icon/softwareLicense.png"
import laptopCoding from "@public/Assets/icon/laptopCoding.png"
import Requirements from "@public/Assets/icon/Requirements.png"
import Design from "@public/Assets/icon/Design.png"
import commonTypes from "@public/Assets/commonTypes.png"
import laptopCodings from "@public/Assets/icon/LaptopCodings.png"
import developer from "@public/Assets/icon/developer.png"
import Desktop from "@public/Assets/icon/Desktop.png"
import gameController from "@public/Assets/icon/gameController.png"


const software = () => {

    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={softwareDevelopment} text={"Software Development"} discription={"Software development refers to the process of designing computer applications from their initial conception through completion, consisting of several steps."} />
            </div>
            <div className="container mx-auto px-4 pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={Requirements}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={Requirements}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Planning and Define Requirements</h2>
                        <p className="text-base text-center">This stage requires understanding what the software must do as well as its intended users&apos; use case.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={Design}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={Design}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Design the Software</h2>
                        <p className="text-base text-center">This involves developing its architecture, user interface design, and data structures as per PDR.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={laptopCoding}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={laptopCoding}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Coding Software</h2>
                        <p className="text-base text-center">This involves writing the code needed to make itfunctional, while testing ensures it runs as expected and is free from bugs.Finally, deployment refers to making the software accessible for users.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        {/* <div className="flex justify-center h-48">
                            <Image
                                src={softwareLicense}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10 "
                            />
                        </div> */}
                        <div className="my-4 flex justify-center">
                            <div className=" border-4 border-blue rounded-full p-5">
                                <Image
                                    src={softwareLicense}
                                    alt="Your Name"
                                    className=" "
                                />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Maintaining Software</h2>
                        <p className="text-base text-center">This entails fixing bugs, adding features, and keeping the softwarecurrent.</p>
                    </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray mt-2 mb-6">Software development can be an intricate and time-consuming endeavor, yet its rewards can be immense. When done right, software can revolutionize our lives in many ways.</h3>
                <p className="text-xl font-semibold text-center text-gray my-2">There are various kinds of software development,each offering different challenges and rewards.</p>
                <div className="grid grid-cols-12 gap-5 mt-6">
                    <div className="col-span-12 md:col-span-6 p-4">
                        <Image
                            src={commonTypes}
                            alt="email"
                            className="rounded-full"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 p-12 text-left">
                        <h2 className="font-extrabold text-2xl">
                            Common <span className="text-blue">Types Include</span>
                        </h2>
                        <div className="w-64 h-1 bg-blue mb-2"></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-6 mb-4">
                            <div className="col-span-3">
                                {/* <div className="">
                                    <Image
                                        src={laptopCodings}
                                        alt="laptopCodings"
                                        className="object-scale-down"
                                    />
                                </div> */}
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={laptopCodings}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                           
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Web development</h4>
                                <p className="text-base text-gray">encompasses creating software applicationsdesigned for use on the World Wide Web and in particular Web 2.0 applications.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={developer}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Mobile development</h4>
                                <p className="text-base text-gray">involves building apps to run on mobile devicessuch as phones or tablets.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={Desktop}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Desktop development</h4>
                                <p className="text-base text-gray">is concerned with creating software applications to run on desktop computers. &quot;Embedded System Development&quot; is used when software needs to be embedded within certain objects, like cars, medical devices, and appliances.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="relative w-24 h-24 rounded-full bg-gray bg-opacity-40 border-6 border-gray-300 shadow-md overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={gameController}
                                            alt="laptopCodings"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-xl font-extrabold text-blue">Game development</h4>
                                <p className="text-base text-gray">Game development involves designing software applications primarily usedfor entertainment purposes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-xl text-gray text-center">Software development is an ever-evolving field, with new technologies and methodologies being released all of the time, meaning there will always be something new to learn and challenges to face in software development careers. If you want a career in software development, prepare to embark on an incessant learning and growth journey!</p>
                </div>
            </div>
        </main>
    );
};

export default software;