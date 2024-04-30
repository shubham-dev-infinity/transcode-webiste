import HeroSection from "@/components/HeroSection";
import style from "../components/styles.module.scss"
import Ourteam from "@public/Assets/OurTeam.png"
import Image from "next/image";
import DharmeshKumbhani from "@public/Assets/DharmeshKumbhani.png"
const OurTeam = () => {
    return (
        <main className="mb-20">
            <div className={style.heroBgImage}>
                <HeroSection image={Ourteam} text={"Our Team"} />
            </div>
            <div className="container mx-auto my-12">
                <h3 className="text-center text-3xl font-extrabold">OUR LEADER <span className="text-blue">OUR GREATEST ASSETS</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10">
                    <div className="col-span-1 md:col-span-1">
                        <Image src={DharmeshKumbhani} alt="Image 1" width={345} height={470} className="rounded-3xl" />
                        <h4 className="text-center font-semibold text-2xl mt-3 mb-1">Dharmesh Kumbhani</h4>
                        <p className="text-center text-gray text-xl">Chief Executive Officer</p>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <Image src={DharmeshKumbhani} alt="Image 2" width={345} height={470} className="rounded-3xl" />
                        <h4 className="text-center font-semibold text-2xl mt-3 mb-1">Dharmesh Kumbhani</h4>
                        <p className="text-center text-gray text-xl">Chief Executive Officer</p>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <Image src={DharmeshKumbhani} alt="Image 3" width={345} height={470} className="rounded-3xl" />
                        <h4 className="text-center font-semibold text-2xl mt-3 mb-1">Dharmesh Kumbhani</h4>
                        <p className="text-center text-gray text-xl">Chief Executive Officer</p>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <Image src={DharmeshKumbhani} alt="Image 4" width={345} height={470} className="rounded-3xl" />
                        <h4 className="text-center font-semibold text-2xl mt-3 mb-1">Dharmesh Kumbhani</h4>
                        <p className="text-center text-gray text-xl">Chief Executive Officer</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default OurTeam;