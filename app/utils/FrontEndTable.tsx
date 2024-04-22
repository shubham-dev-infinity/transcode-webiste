import Image from "next/image";
import NextJsIcon from "@public/Assets/icon/nextJsIcon.png"
import NodeJsIcon from "@public/Assets/icon/NodeJsIcon.png"
import ReactjsIcon from "@public/Assets/icon/reactjsIcon2.png"
import PhpIcon from "@public/Assets/icon/phpIcon.png"
import java from "@public/Assets/java.png"
import wordpress from "@public/Assets/wordpress.png"
import net from "@public/Assets/net.png"
import My_SQL from "@public/Assets/icon/My_SQL.png"
import Mongo_DB from "@public/Assets/icon/Mongo_DB.png"
import MS_SQL from "@public/Assets/icon/MS_SQL.png"
import SQLite from "@public/Assets/icon/SQLite.png"
import PostgreSQL from "@public/Assets/icon/PostgreSQL.png"
import firebase from "@public/Assets/icon/firebase.png"
import Realm from "@public/Assets/icon/Realm.png"

const FrontEndTable = () => {
    return (
        <div className="container mx-auto px-4" id="default-tab-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-8">
                <div className="p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" >
                    <div className="flex justify-center h-[8.50rem]" data-aos="zoom-in" data-aos-delay="100">
                        <Image
                            src={My_SQL}
                            alt="Your Name"
                            className="absolute  mx-auto z-10"
                        />
                    </div>
                </div>
                <div className=" p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" >
                    <div className="flex justify-center h-[8.50rem]" data-aos="zoom-in" data-aos-delay="100">
                        <Image
                            src={MS_SQL}
                            alt="Your Name"
                            className="absolute  mx-auto z-10"
                        />
                    </div>
                </div>
                <div className=" p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" >
                    <div className="flex justify-center h-[8.50rem]" data-aos="zoom-in" data-aos-delay="100">
                        <Image
                            src={Mongo_DB}
                            alt="Your Name"
                            className="absolute  mx-auto z-10"
                        />
                    </div>
                </div>
                <div className=" p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" >
                    <div className="flex justify-center h-[8.50rem]" data-aos="zoom-in" data-aos-delay="100">
                        <Image
                            src={SQLite}
                            alt="Your Name"
                            className="absolute  mx-auto z-10"
                        />
                    </div>
                </div>
                <div className="p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" >
                    <div className="flex justify-center h-[8.50rem]" data-aos="zoom-in" data-aos-delay="100">
                        <Image
                            src={PostgreSQL}
                            alt="Your Name"
                            className="absolute  mx-auto z-10"
                        />
                    </div>
                </div>
                <div className="p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" >
                    <div className="flex justify-center h-[8.50rem]" data-aos="zoom-in" data-aos-delay="100">
                        <Image
                            src={firebase}
                            alt="Your Name"
                            className="absolute mx-auto z-10"
                        />
                    </div>
                </div>
                <div className="p-4 relative rounded-3xl hover:bg-white hover:shadow-2xl" >
                    <div className="flex justify-center h-[8.50rem]" data-aos="zoom-in" data-aos-delay="100">
                        <Image
                            src={Realm}
                            alt="Your Name"
                            className="absolute mx-auto z-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontEndTable;
