import Image from "next/image";
import android from "@public/Assets/icon/android.png"
import flutter from "@public/Assets/icon/flutter.png"
import Ios from "@public/Assets/icon/ios.png"
import reactnative from "@public/Assets/icon/reactnative.png"


const TechnologyMobileTabs = () => {
    return (
        <div className="container mx-auto px-4 pt-2 sm:pt-10" id="default-tab-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={android}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-28" 
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Android</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={flutter}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-32"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Flutter</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={Ios}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-28"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Ios</h2>
                </div>

                <div className="sm:mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
                    <div className="flex justify-center h-48">
                        <Image
                            src={reactnative}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10 max-w-28"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Reactnative</h2>
                </div>
            </div>
        </div>
    )
}

export default TechnologyMobileTabs;
