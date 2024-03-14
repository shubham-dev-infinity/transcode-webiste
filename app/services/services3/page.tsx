import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import systemIntegration from "@public/Assets/systemIntegration.png"

const services3 = () => {

    return (
        <div
            className={style.heroBgImage}
        >
            <HeroSection image={systemIntegration} text={"SYSTEM INTEGRATION SERVICES"} discription={"Bridging the Gap and Unlocking Your Potential"} />
        </div>
    );
};

export default services3;


