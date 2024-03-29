import HeroSection from "@/components/HeroSection";
import style from "../components/styles.module.scss";
import culture from "@public/Assets/culture.png"
import Image from "next/image";
import dinnerPizza from "@public/Assets/dinner-pizza.png";
import office from "@public/Assets/office.png";
import calibration from "@public/Assets/calibration.png";
import working from "@public/Assets/working.png";
import dinner from "@public/Assets/dinner.png";


const WorkCulture = () => {
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={culture} text={"Our Work Culture"} />
            </div>
            <div className="container mx-auto my-16">
                <div className="grid grid-cols-12 gap-2 my-10">
                    <div className="col-span-12 md:col-span-7">
                        <Image src={office} alt="DreamJob" width={800} height={470} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <Image src={dinnerPizza} alt="DreamJob" width={640} height={470} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-12">
                        <Image src={dinner} alt="DreamJob" width={1470} height={1102.5} style={{ height: "100%" }} />
                    </div>                  
                </div>
                <div className="grid grid-cols-12 gap-2 my-10">
                    <div className="col-span-12 md:col-span-4 ">
                        <Image src={calibration} alt="DreamJob" width={640} height={470} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <Image src={working} alt="DreamJob" width={800} height={470} style={{ height: "100%" }} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WorkCulture;