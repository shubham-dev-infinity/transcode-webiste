import Image from "next/image";
import HeroSection from "../components/HeroSection";
import style from "../components/styles.module.scss";
import AboutImage from "@public/Assets/About.png";
import bgImage from "@public/Assets/bgImage.png";
import officeStaff from "@public/Assets/officeStaff.png";
import Subscribe from "@public/Assets/Subscribe.png";
import team from "@public/Assets/team.png";
import FAQSection from "./FAQSection";
import faqs from "./faqs ";


const About = () => {
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={AboutImage} text={"About Transcode"} centerText={true} />
            </div>
            <div className="container mx-auto my-12">
                <h1 className="text-center text-3xl font-extrabold">Our <span className="text-blue">Client</span></h1>
                <div className="grid grid-cols-5 gap-8 my-8">
                    {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="col-span-1">
                            <Image
                                src={bgImage}
                                alt={`bgImage${i}`}
                                width={270}
                                height={270}
                            />
                        </div>
                    ))}
                </div>
                {/* <div className="bg-blue grid grid-cols-12">
                    <div className="col-span-5 p-6">
                        <Image src={officeStaff} alt="officeStaff" width={550} height={500} />
                    </div>
                    <div className="col-span-7 text-white pr-6">
                        <h2 className="font-extrabold text-3xl pt-20">ABOUT TRANSCODE</h2>
                        <p className="text-xl pt-6">Welcome to Transcode Solutions, where we pour our hearts and souls into every project we undertake. We are a team of passionate individuals who believe in the power of technology to drive positive change. With each line of code we write, we strive to create solutions that not only meet but exceed our clients&apos; expectations. Our dedication to excellence is unwavering, as we work tirelessly to bring innovative ideas to life and make a lasting impact in the digital world.</p>
                        <p className="text-xl pt-6">At Transcode Solutions, we are more than just an IT firm - we are dreamers, creators, and problem solvers. We take great pride in our ability to craft customized software services that empower businesses for success in today&apos;s fast-paced environment. Our journey is fueled by a shared vision of pushing boundaries, embracing challenges, and delivering tangible results that make a difference. Join us on this exciting adventure as we continue to innovate and transform the digital landscape together</p>
                    </div>
                </div> */}
                <div className="bg-blue grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 md:order-first p-6">
                        <Image src={officeStaff} alt="officeStaff" width={550} height={500} className="w-full" />
                    </div>
                    <div className="col-span-12 p-2 lg:col-span-7 md:order-last text-white pr-6 sm:p-4">
                        <h2 className="font-extrabold text-3xl xl:pt-20 lg:text-xl lg:pt-6 sm:pt-0">ABOUT TRANSCODE</h2>
                        <p className="text-xl pt-6 xl:pt-3 xl:text-lg lg:text-base lg:pt-1 sm:text-base sm:pt-4">Welcome to Transcode Solutions, where we pour our hearts and souls into every project we undertake. We are a team of passionate individuals who believe in the power of technology to drive positive change. With each line of code we write, we strive to create solutions that not only meet but exceed our clients&apos; expectations. Our dedication to excellence is unwavering, as we work tirelessly to bring innovative ideas to life and make a lasting impact in the digital world.</p>
                        <p className="text-xl pt-6 xl:pt-3 xl:text-lg lg:text-base lg:pt-1 sm:text-base sm:pt-4">At Transcode Solutions, we are more than just an IT firm - we are dreamers, creators, and problem solvers. We take great pride in our ability to craft customized software services that empower businesses for success in today&apos;s fast-paced environment. Our journey is fueled by a shared vision of pushing boundaries, embracing challenges, and delivering tangible results that make a difference. Join us on this exciting adventure as we continue to innovate and transform the digital landscape together</p>
                    </div>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-4 my-16 p-2">
                    <Image src={team} width={1470} height={775} alt="blogDetail" />
                </div>
                <div className="p-4">
                    <h2 className="text-blue text-center text-3xl">FAQS</h2>
                    <FAQSection faqs={faqs} />
                </div>
            </div>
            <div className="bg-blue flex justify-center items-center">
                <div className="max-w-4xl px-4 py-8">
                    <Image src={Subscribe} alt="" width={720} height={500.09} />
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center mb-8">
                            <h3 className="text-white text-center mb-4">REGISTER FOR OUR NEWSLETTER FOR LATEST UPDATES</h3>
                            <input type="text" className="p-2 rounded-md w-full mb-4" placeholder="Email Address" />
                            <button className="bg-white px-4 py-2 rounded-md text-blue">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;
