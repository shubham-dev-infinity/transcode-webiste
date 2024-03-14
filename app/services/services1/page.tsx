
import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import softwareDevelopment from "@public/Assets/softwareDevelopment.png"

const services1 = () => {

    return (
        <div
            className={style.heroBgImage}
        >
            <HeroSection image={softwareDevelopment} text={"Software Development"} discription={"Software development refers to the process of designing computer applications from their initial conception through completion, consisting of several steps."} />
        </div>
    );
};

export default services1;