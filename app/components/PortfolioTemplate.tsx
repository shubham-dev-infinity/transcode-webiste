import Image from "next/image";
import projectsDetails from "./projectsDetails";

const PortfolioTemplate = () => {  
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
            {projectsDetails.map(project => (
                <li key={project.id} className="element-item cat-1 hover:bg-white hover:scale-105 hover:shadow-2xl">
                    <div className="pu bg-white p-4 rounded-lg shadow-md">
                        <a href={`/project/${project.title.replace(/\s+/g, '-').toLowerCase()}.html`}>
                            <div className="feeturre_image">
                                <Image src={project.image} alt="" width={600} height={600} />
                            </div>
                            <div className="content mt-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                <div className="mt-4 flex flex-wrap">
                                    <div className="category bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">BACK-END</div>
                                    <div className="category bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">FRONT-END</div>
                                    <div className="category bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">MOBILE</div>
                                    <div className="category bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">WEB</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PortfolioTemplate;
