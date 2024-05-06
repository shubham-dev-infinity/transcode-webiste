
import Image from "next/image";
import style from "./styles.module.scss"
import TransformingData from "./TransformingData"
const TravelandHospitality = () => {
    return(
        <main>
            <div className={style.heroBgImage}>
                <div className="px-4 lg:px-28 pb-12 sm:pb-52 pt-20 sm:pt-64 mb-5 sm:mb-10 text-white">
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Travel and Hospitality Software Solution</h2>
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-center">Company</h2>
                        <h4 className="text-lg sm:text-xl text-center py-3 sm:py-6">Building Your Own Brand in the Travel Industry</h4>
                        <p className="text-sm sm:text-lg text-center px-2 sm:px-40">Collaborating with us extends beyond mere travel software development — it entails forging a strategic alliance aimed at crafting bespoke software solutions for the travel and hospitality sector. Our focus lies in tailoring each project to precisely match your unique requirements, ensuring an unparalleled fit for your business needs.</p>
                        <div className="text-center	  pt-4">
                            <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Talk to an Expert</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-2 sm:px-4">
                <div className="text-center mb-6 sm:mb-12">                  
                    <h3 className="text-lg sm:text-3xl font-extrabold mb-2 sm:mb-4">Overview</h3>
                    <h6 className="text-sm sm:text-base text-gray font-semibold">Travel & Hospitality Software Development</h6>
                    <h6 className="text-sm sm:text-base text-blue font-semibold my-2 sm:my-4">Transcodezy  Solution: Empowering Your Retail & E-commerce Success</h6>
                    <h5 className="text-base sm:text-xl font-semibold">At the heart of our operations lies a commitment to driving digital transformation, tackling business hurdles head-on through our proficient team of travel app developers. Our repertoire includes a diverse array of customized travel and hospitality software solutions, empowering businesses to thrive in the digital age.</h5>
                    <div className="text-center	  pt-4">
                        <button className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">Free Consultation</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 rounded-3xl mb-10">
                    {TransformingData.map((step, index) => (
                        <div key={index} className={`p-16 shadow-lg rounded-lg bg-gray ${TransformingData.length % 2 !== 0 && index === TransformingData.length - 1 ? 'md:col-start-1 md:col-span-2 lg:col-start-1 lg:col-span-2 text-center' : 'md:mx-11'}`}>
                            <div className="mb-2">
                                {/* Placeholder for image, add actual image path in `src` */}
                                {/* <Image src={step.image || "path/to/default/image.png"} alt={step.title} className="w-full h-auto object-cover rounded-md" /> */}
                            </div>
                            <h4 className="text-base sm:text-xl font-bold text-gray">{step.title}</h4>
                            <p className="text-gray text-sm sm:text-lg">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </main>
    )
} 

export default TravelandHospitality;