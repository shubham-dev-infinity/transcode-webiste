import HeroSection from "@/components/HeroSection";
import style from "./styles.module.scss";
import portfolio from "@public/Assets/portfolio.png";
import PortfolioTabs from "@/components/PortfolioTabs";

const Portfolio = () => {
    return (
        <div className="mb-20">
            <div className={style.heroBgImage}>
                <HeroSection image={portfolio} text={"Portfolio"} /> {/* Pass centerText prop */}
            </div>
            <div className="container mx-auto">
                <PortfolioTabs />
            </div>
        </div>
    )
}

export default Portfolio;
