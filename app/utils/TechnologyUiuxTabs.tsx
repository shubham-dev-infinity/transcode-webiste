import Image from "next/image";
import figma from "@public/Assets/icon/figma.png"
import illustrator from "@public/Assets/icon/illustrator.png"
import photoshop from "@public/Assets/icon/photoshop.png"
import premiere from "@public/Assets/icon/premiere_pro.png"


const TechnologyUiuxTabs = () => {
    return (
        <div className="container mx-auto px-4 pt-2 sm:pt-10" id="default-tab-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">             
                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={figma}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-24"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Figma</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={illustrator}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-24"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Illustrator</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={photoshop}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-24"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Photoshop</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={premiere}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-24"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">premiere</h2>
                </div>
            </div>
        </div>
    )
}

export default TechnologyUiuxTabs;
