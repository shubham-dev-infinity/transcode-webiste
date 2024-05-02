// import Image from "next/image";
// import projectsDetails from "./projectsDetails";

// const PortfolioTemplate = () => {  
//     return (
//         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
//             {projectsDetails.map(project => (
//                 <li key={project.id} className="element-item cat-1 hover:bg-white hover:scale-105 hover:shadow-2xl">
//                     <div className="pu bg-white p-4 rounded-lg shadow-md">
//                         <a href={`/project/${project.title.replace(/\s+/g, '-').toLowerCase()}.html`}>
//                             <div className="feeturre_image">
//                                 <Image src={project.image} alt="" width={600} height={600} />
//                             </div>
//                             <div className="content mt-10">
//                                 <h3 className="text-xl font-semibold mb-6">{project.title}</h3>
//                                 <p className="text-gray-600">{project.description}</p>
//                                 {/* <div className="mt-4 flex flex-wrap">
//                                     <div className="category bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">BACK-END</div>
//                                     <div className="category bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">FRONT-END</div>
//                                     <div className="category bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">MOBILE</div>
//                                     <div className="category bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 mb-2">WEB</div>
//                                 </div> */}
//                             </div>
//                         </a>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default PortfolioTemplate;


// import { useState } from 'react';
// import Image from "next/image";
// import projectsDetails from "./projectsDetails";

// const PortfolioTemplate = () => {
//     const [expandedDescriptionId, setExpandedDescriptionId] = useState<string | null>(null);

//     const toggleDescription = (projectId: string | number) => {
//         if (String(expandedDescriptionId) === String(projectId)) {
//             setExpandedDescriptionId(null);
//         } else {
//             setExpandedDescriptionId(String(projectId));
//         }
//     };

//     return (
//         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
//             {projectsDetails.map(project => (
//                 <li key={project.id} className="element-item cat-1 hover:bg-white hover:scale-105 hover:shadow-2xl">
//                     <div className="pu bg-white p-4 rounded-lg shadow-md">
//                         <a href={`/project/${project.title.replace(/\s+/g, '-').toLowerCase()}.html`}>
//                             <div className="feeturre_image">
//                                 <Image src={project.image} alt="" width={600} height={600} />
//                             </div>
//                             <div className="content mt-10">
//                                 <h3 className="text-xl font-semibold mb-6">{project.title}</h3>
//                                 <p className="text-gray-600">
//                                     {String(expandedDescriptionId) === String(project.id) ? project.description : `${project.description.slice(0, 100)}...`}
//                                     <button
//                                         className="text-blue-500 hover:underline focus:outline-none"
//                                         onClick={() => toggleDescription(project.id)}
//                                     >
//                                         {String(expandedDescriptionId) === String(project.id) ? 'Less' : 'Read more'}
//                                     </button>
//                                 </p>
//                             </div>
//                         </a>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default PortfolioTemplate;

import { useState } from 'react';
import Image from "next/image";
import projectsDetails from "./projectsDetails";

const PortfolioTemplate = () => {
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

export default PortfolioTemplate;
