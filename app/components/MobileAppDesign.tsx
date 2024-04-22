import { useState } from 'react';
import Image from "next/image";
// import projectsDetails from "./projectsDetails";
import Rishi from "@public/Assets/Rishi.jpg"
import Foodezy from "@public/Assets/Foodezy.jpg"
import Zwift from "@public/Assets/Zwift.jpg"
import Kisan from "@public/Assets/Kisan.jpg"
import Cosmatic from "@public/Assets/Cosmatic.jpg"

const projectsDetails = [
    {
        id: 1,
        image: Rishi,
        title: "Rishi Ratna Diamond & Gems",
        description: "Rishi ratna is the brand who manufactures there own jewelry with there own designs.we hava the moto behind is to give the real diamond n natural gemstone with the good quality n the Good rate so we always focus on it.This brands belong to Dattaji kapile sons Shubhrishi Jewellers nashik .Which was first kapile jewellers the son of the owner DR HRISHIKESH DATTATRAYA KAPILE have the Degree of GRADUATED GEMOLOGIST n also he has the DOCTORATE IN BUSINESS MANAGMENT n also have the huge Experience in DAIMOND & amp; COLOUR stones so he decided to build the brand for all.Rishi Ratna deals with the Wholesale as well as retail portal n also gives the guaranteed certification of GIA, IGA n other well non labs we also have our lab to.We r only focus on the great designs n great quality.",
        link: ""
    },
    {
        id: 2,
        image: Foodezy,
        title: "Foodezy Multi Restourant App &amp; Website with Delivery App",
        description: "Embark on a culinary journey with Foodezy, our comprehensive multi- restaurant app and website ecosystem, complemented by a robust delivery application.Delve into our case studies to witness how Foodezy transformed the dining experience, connecting users with a diverse range of restaurants and ensuring swift, efficient deliveries.Explore the technological innovations, user - centric features, and seamless integration that contributed to Foodezy's success.",
        link: ""
    },
    {
        id: 3,
        image: Zwift,
        title: "Zwift Indoor Cycling Made Fun",
        description: "Workout anytime, ride with friends, & discover training plans for everyone web & mobile UI.",
        link: "https://www.zwift.com/"
    },
    {
        id: 4,
        image: Cosmatic,
        title: "Cosmetic Choice - Discover Your Perfect Beauty Web",
        description: "Explore a world of beauty at CosmeticChoice, your ultimate destination for curated cosmetic options, expert advice, and personalized beauty solutions.",
        link: "https://www.cosmeticchoice.com/?language=en"
    },
    {
        id: 5,
        image: Kisan,
        title: "Kisan Ki Dukan : Patna's Online Vegetable Store",
        description: "We are Bihar Farmer's club, promoting organic farming to help people of Bihar to lead a healthy life.KISAN KI DUKAN is an online shopping app of Bihar Farmers Club which can make your life much easier by providing free home delivering FRESH FRUITS, ORGANIC VEGETABLES and other Products.Our Farm to Home team will reach out to you for the fruits and vegetables which you need while staying at home.Supreme in quality, each vegetable come straight from our farm to your plate and you can experience farm freshness in your kitchen.",
        link: ""
    },

]

const MobileAppDesign = () => {
    const [expandedTitleId, setExpandedTitleId] = useState<string | null>(null);

    const toggleTitle = (projectId: string | number) => {
        if (expandedTitleId === String(projectId)) {
            setExpandedTitleId(null);
        } else {
            setExpandedTitleId(String(projectId));
        }
    };

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
            {projectsDetails.map((project, index) => (
                <li key={project.id} className="element-item cat-1 hover:bg-white hover:scale-105 hover:shadow-2xl">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full" data-aos="zoom-in" >
                        <div className="pu bg-white p-4 rounded-lg shadow-md">
                            <div className="feeturre_image">
                                <Image src={project.image} alt="" width={600} height={600} />
                            </div>
                            <div className="content mt-10">
                                <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                                    {project.title}
                                    <button
                                        className="text-blue-500 hover:underline focus:outline-none ml-2"
                                        onClick={(e) => { e.preventDefault(); toggleTitle(project.id); }}
                                    >
                                        {expandedTitleId === String(project.id) ? 'Less' : 'Read more'}
                                    </button>
                                </h3>
                                <p className={`text-gray-600 ${expandedTitleId === String(project.id) ? '' : 'line-clamp-2'}`}>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </a>
                </li>
            ))}

        </ul>
    );
};

export default MobileAppDesign;