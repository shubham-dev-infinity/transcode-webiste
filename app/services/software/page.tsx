
import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import softwareDevelopment from "@public/Assets/softwareDevelopment.png"
import Image from "next/image";
import softwareLicense from "@public/Assets/softwareLicense.png"
import laptopCoding from "@public/Assets/laptopCoding.png"
import Requirements from "@public/Assets/Requirements.png"
import Design from "@public/Assets/Design.png"
import commonTypes from "@public/Assets/commonTypes.png"
import laptopCodings from "@public/Assets/LaptopCodings.png"
import developer from "@public/Assets/developer.png"
import Desktop from "@public/Assets/Desktop.png"
import gameController from "@public/Assets/gameController.png"


const software = () => {

    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={softwareDevelopment} text={"Software Development"} discription={"Software development refers to the process of designing computer applications from their initial conception through completion, consisting of several steps."} />
            </div>
            <div className="container mx-auto px-4 pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        <div className="flex justify-center h-48">
                            <Image
                                src={Requirements}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Planning and Define Requirements</h2>
                        <p className="text-lg text-center">This stage requires understanding what the software must do as well as its intended users&apos; use case.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        <div className="flex justify-center h-48">
                            <Image
                                src={Design}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Design the Software</h2>
                        <p className="text-lg text-center">This involves developing its architecture, user interface design, and data structures as per PDR.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        <div className="flex justify-center h-48">
                            <Image
                                src={laptopCoding}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Coding Software</h2>
                        <p className="text-lg text-center">This involves writing the code needed to make itfunctional, while testing ensures it runs as expected and is free from bugs.Finally, deployment refers to making the software accessible for users.</p>
                    </div>
                    <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                        <div className="flex justify-center h-48">
                            <Image
                                src={softwareLicense}
                                alt="Your Name"
                                className="absolute top-16 mx-auto z-10 "
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-blue text-center mb-2">Maintaining Software</h2>
                        <p className="text-lg text-center">This entails fixing bugs, adding features, and keeping the softwarecurrent.</p>
                    </div>
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray mt-2 mb-6">Software development can be an intricate and time-consuming endeavor, yet its rewards can be immense. When done right, software can revolutionize our lives in many ways.</h3>
                <p className="text-2xl font-semibold text-center text-gray my-2">There are various kinds of software development,each offering different challenges and rewards.</p>
                <div className="grid grid-cols-12 gap-5 mt-6">
                    <div className="col-span-12 md:col-span-6 p-4">
                        <Image
                            src={commonTypes}
                            alt="email"
                            className="rounded-full"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 p-12 text-left">
                        <h2 className="font-extrabold text-3xl">
                            Contact Transcode Solution
                        </h2>                       
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                          
                            <div className="col-span-12 md:col-span-4  p-4">
                                <div className="col-span-4 flex gap-10 pt-4">
                                    <Image
                                        src={laptopCodings}
                                        alt="email"
                                        className="rounded-full"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <div className="items-center justify-center pt-4">
                                        <h4 className="text-xl font-bold">Web development</h4>
                                        <p className="text-lg">encompasses creating software applicationsdesigned for use on the World Wide Web and in particular Web 2.0 applications.</p>
                                    </div>
                                </div>
                                <div className="col-span-4 flex gap-10 pt-4">
                                    <Image
                                        src={developer}
                                        alt="letTalk"
                                        className="rounded-full"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <div className="items-center justify-center pt-4">
                                        <h4 className="text-xl font-bold">Mobile development</h4>
                                        <p className="text-lg">involves building apps to run on mobile devicessuch as phones or tablets.</p>
                                    </div>
                                </div>

                                <div className="col-span-4 flex gap-10 pt-4">
                                    <Image
                                        src={Desktop}
                                        alt="homeLocation"
                                        className="rounded-full"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <div className="items-center justify-center pt-4">
                                        <h4 className="text-xl font-bold">Desktop development</h4>
                                        <p className="text-lg">is concerned with creating software applications to run on desktop computers. &quot;Embedded System Development&quot; is used when software needs to be embedded within certain objects, like cars, medical devices, and appliances.</p>
                                    </div>
                                </div>
                                <div className="col-span-4 flex gap-10 pt-4">
                                    <Image
                                        src={gameController}
                                        alt="homeLocation"
                                        className="rounded-full"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <div className="items-center justify-center pt-4">
                                        <h4 className="text-xl font-bold">Game development</h4>
                                        <p className="text-lg">Game development involves designing software applications primarily usedfor entertainment purposes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-2xl text-gray text-center">Software development is an ever-evolving field, with new technologies and methodologies being released all of the time, meaning there will always be something new to learn and challenges to face in software development careers. If you want a career in software development, prepare to embark on an incessant learning and growth journey!</p>
                </div>
            </div>
        </main>
    );
};

export default software;