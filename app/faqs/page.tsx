import style from "../components/styles.module.scss"
import HeroSection from "@/components/HeroSection";
import AboutImage from "@public/Assets/About.png";
import FAQSection from "./FAQSection";
import faqs from "./faqs ";
import TravelData from "./TravelData";
import RealEstate from "./RealEstate";
import FinTechIndustry from "./FinTechIndustry";
import AndBeyond from "./Andbeyond";
import HealthCare from "./HealthCare";
const FrequentlyAskedQuestions = () => {
    return (
        <main className="mb-10 overflow-hidden">
            <div className={style.heroBgImage}>
                <HeroSection image={AboutImage} text={"FAQS"} />
            </div>
            <div className="container mx-auto my-12">
                <div className="">
                    <FAQSection faqs={faqs} />
                </div>
                <div className="mt-1 sm:mt-10">
                    <FAQSection faqs={TravelData} />
                </div>
                <div className="mt-1 sm:mt-10">
                    <FAQSection faqs={RealEstate} />
                </div>
                <div className="mt-1 sm:mt-10">
                    <FAQSection faqs={FinTechIndustry} />
                </div>
                <div className="mt-1 sm:mt-10">
                    <FAQSection faqs={AndBeyond} />
                </div>
                <div className="mt-1 sm:mt-10">
                    <FAQSection faqs={HealthCare} />
                </div>
            </div>
        </main>
    )
}

export default FrequentlyAskedQuestions;