import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import consultingAdvisory from "@public/Assets/consultingAdvisory.png"

const services2 = () => {

    return (
        <div
            className={style.heroBgImage}
        >
            <HeroSection image={consultingAdvisory} text={"IT CONSULTING AND ADVISORY SERVICES"} discription={"IT consulting and advisory services provide professional assistance that assists businesses in using technology effectively to reach their business objectives. Such services cover an extensive array of disciplines."} />
        </div>
    );
};

export default services2;


