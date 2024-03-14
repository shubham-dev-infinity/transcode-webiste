import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import qualityTesting from "@public/Assets/qualityTesting.png"

const services6 = () => {

    return (
        <div
            className={style.heroBgImage}
        >
            <HeroSection image={qualityTesting} text={"QUALITY ASSURANCE AND TESTING"} discription={"Establishing Trust and Achieving Excellence"} />
        </div>
    );
};

export default services6;
