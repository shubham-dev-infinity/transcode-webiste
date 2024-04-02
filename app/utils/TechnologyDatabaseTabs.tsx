import Image from "next/image";
import mongodb from "@public/Assets/icon/mongodb.png"
import mysql from "@public/Assets/icon/mysql.png"



const TechnologyDatabaseTabs = () => {
    return (
        <div className="container mx-auto px-4 pt-10" id="default-tab-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl">
                    <div className="flex justify-center h-64">
                        <Image
                            src={mongodb}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">mongodb</h2>
                </div>

                <div className="mb-10 bg-gray p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl">
                    <div className="flex justify-center h-64">
                        <Image
                            src={mysql}
                            alt="Your Name"
                            className="absolute top-16 mx-auto z-10"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">mysql</h2>
                </div>
            </div>
        </div>
    )
}

export default TechnologyDatabaseTabs;
