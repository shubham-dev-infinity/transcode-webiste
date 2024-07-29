import HeroSection from "@/components/HeroSection";
import style from "../components/styles.module.scss";
import culture from "@public/Assets/culture.png"
import Image from "next/image";
import dinnerPizza from "@public/Assets/dinner-pizza.png";
import office from "@public/Assets/office.png";
import calibration from "@public/Assets/calibration.png";
import working from "@public/Assets/working.png";
import dinner from "@public/Assets/dinner.png";
import styles from "./styles.module.scss"
import adventure from "@public/Assets/adventure.png";
import roccia from "@public/Assets/roccia.png";
import officeMeeting from "@public/Assets/office meeting.png";
import office_tem from "@public/Assets/office_tem.png";
import adventure1 from "@public/Assets/adventure1.png";
import adventure2 from "@public/Assets/adventure2.png";
import adventureLunch from "@public/Assets/adventureLunch.png";
import pinbal from "@public/Assets/pinbal.png";
import adventure4 from "@public/Assets/adventure4.png";
import holi_Celebration from "@public/Assets/holi_Celebration.png";
import HoliNo_Re from "@public/Assets/HoliNo_Re.png";
import holi_office from "@public/Assets/holi_office.png";


const WorkCulture = () => {
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={culture} text={"Our Work Culture"} />
            </div>
            <div className="container mx-auto my-6 px-4 py-1">
                <div className="grid grid-cols-12 gap-2 my-10">
                    <div className="col-span-12 md:col-span-7" data-aos="fade-right" data-aos-delay="100">
                        <Image src={roccia} alt="roccia" width={800} height={470} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-5" data-aos="fade-left" data-aos-delay="100">
                        <Image src={adventure} alt="adventure" width={640} height={470} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-12 my-6" data-aos="fade-up" data-aos-delay="100">
                        <Image src={dinner} alt="dinner" className={styles.calibration_Img} />
                    </div>
                    <div className="col-span-12 md:col-span-5 flex justify-start" data-aos="fade-right" data-aos-delay="100">
                        <Image src={calibration} alt="calibration" width={640} height={470} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-7 flex justify-end" data-aos="fade-left" data-aos-delay="100">
                        <Image src={officeMeeting} alt="officeMeeting" width={800} height={470} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-12 my-6" data-aos="fade-up" data-aos-delay="100">
                        <Image src={office_tem} alt="dinner" className={styles.calibration_Img} />
                    </div>
                    <div className="col-span-12 md:col-span-6" data-aos="fade-right" data-aos-delay="100">
                        <Image src={adventure1} alt="calibration" width={720} height={958.75} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-6" data-aos="fade-left" data-aos-delay="100">
                        <Image src={adventure2} alt="officeMeeting" width={720} height={958.75} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-12 my-6" data-aos="fade-up" data-aos-delay="100">
                        <Image src={adventureLunch} alt="dinner" width={1470} height={1106.82} />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex justify-start" data-aos="fade-right" data-aos-delay="100">
                        <Image src={pinbal} alt="calibration" width={720} height={958.75} style={{ height: "100%" }} />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex justify-end" data-aos="fade-left" data-aos-delay="100">
                        <Image src={adventure4} alt="officeMeeting" width={720} height={958.75} />
                    </div>
                    <div className="col-span-12 md:col-span-8 flex justify-start mt-6" data-aos="fade-right" data-aos-delay="100">
                        <Image src={holi_Celebration} alt="holi_Celebration" width={960} height={1280} />
                    </div>
                    <div className="col-span-12 md:col-span-4 mt-6" data-aos="fade-left" data-aos-delay="100">
                        <div className="mb-10">
                            <Image src={HoliNo_Re} alt="holiOffice" width={480} height={640} />
                        </div>
                        <div>
                            <Image src={holi_office} alt="Holi" width={480} height={640} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WorkCulture;