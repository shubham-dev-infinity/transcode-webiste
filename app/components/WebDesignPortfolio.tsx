import { useState } from 'react';
import Image from "next/image";
// import projectsDetails from "./projectsDetails";
import Sephora from "@public/Assets/Sephora.jpg";
import YouGig from "@public/Assets/yougig.jpg"
import Skillz from "@public/Assets/Skillz.jpg"
import Fitness from "@public/Assets/Fitness.jpg"

const projectsDetails = [
    {
        id: 5,
        image: Sephora,
        title: "Sephora - Define Your Shine Web UI",
        description: "Sephora's web user interface (UI) for makeup, hair care, skincare, fragrance, bath & body,and brands is designed to offer an immersive and user-friendly shopping experience.",
        link: "https://sephora.in/"
    },
    {
        id: 10,
        image: YouGig,
        title: "Yougig - Roles Shaping the Future of App and Web Development at Yougig",
        description: "Be at the forefront of technological evolution. YouGig offers an inspiring space where your design and development expertise redefine digital experiences.",
        link: "https://yougig.work/"
    },
    {
        id: 13,
        image: Skillz,
        title: "Skillz Cafe - A Comprehensive E-Learning Journey - Web & App",
        description: "Unlock the world of software development with our comprehensive e- learning program.Gain expertise in coding, algorithms, and software engineering principles from industry experts.",
        link: "https://www.skillzcafe.com/"
    },
    {
        id: 14,
        image: Fitness,
        title: "247fitness - Anytime, Anywhere with 24/7 Gym - Web",
        description: "24/7 Fitness Your key to unparalleled health and wellness.Discover a world of fitness possibilities with our 24-hour gym access and intuitive app.",
        link: "https://247fitness.co/gyms/birmingham"
    },   
]

const WebDesignPortfolio = () => {
    const [expandedTitleId, setExpandedTitleId] = useState<string | null>(null);

    const toggleTitle = (projectId: string | number) => {
        if (expandedTitleId === String(projectId)) {
            setExpandedTitleId(null);
        } else {
            setExpandedTitleId(String(projectId));
        }
    };

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-0 sm:mt-14">
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

export default WebDesignPortfolio;
