import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import trainingEducation from "@public/Assets/trainingEducation.png"

const training = () => {

    return (
        <div
            className={style.heroBgImage}
        >
            <HeroSection image={trainingEducation} text={"TRAINING AND EDUCATION"} discription={"Transforming Future Learners One at a Time"} />
        </div>
    );
};

export default training;



