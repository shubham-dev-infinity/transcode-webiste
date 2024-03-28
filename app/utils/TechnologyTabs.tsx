import Image from "next/image";
import NextJsIcon from "@public/Assets/icon/nextJsIcon.png"
import ReactJsIcon from "@public/Assets/icon/ReactJsIcon.png"
import NodeJsIcon from "@public/Assets/icon/NodeJsIcon.png"
import PhpIcon from "@public/Assets/icon/PhpIcon.png"


const TechnologyTabs = () => {
    return (
        <div className="container mx-auto px-4 pt-10" id="default-tab-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                    <div className="flex justify-center h-48">
                        <Image
                            src={NextJsIcon}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">React JS</h2>
                </div>
                <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                    <div className="flex justify-center h-48">
                        <Image
                            src={ReactJsIcon}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Node JS</h2>
                </div>
                <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                    <div className="flex justify-center h-48">
                        <Image
                            src={NodeJsIcon}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">PHP</h2>
                </div>
                <div className="mb-10 bg-gray p-4 relative rounded-3xl">
                    <div className="flex justify-center h-48">
                        <Image
                            src={PhpIcon}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Next JS</h2>
                </div>
            </div>
        </div>
    )

}
export default TechnologyTabs;