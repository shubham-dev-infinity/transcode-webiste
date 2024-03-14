import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import managedServices from "@public/Assets/managedServices.png"

const services4 = () => {

    return (
        <div
            className={style.heroBgImage}
        >
            <HeroSection image={managedServices} text={"MANAGED IT SERVICES"} />
        </div>
    );
};

export default services4;

