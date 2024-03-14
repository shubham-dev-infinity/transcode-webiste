// import React from "react";
// import Image from "next/image";
// import NextJsIcon from "../../../public/Assets/nextJsIcon.png";
// import ReactJsIcon from "../../../public/Assets/reactJsIcon.png";
// import NodeJsIcon from "../../../public/Assets/NodeJsIcon.png";
// import PhpIcon from "../../../public/Assets/phpIcon.png";

// type Tab = "webdevelopment" | "mobiledevelopment" | "database" | "design";

// function IconForTab({ tabId }: { tabId: Tab }) {
//     switch (tabId) {
//         case "webdevelopment":
//             return (
//                 <Image
//                     src={NextJsIcon}
//                     alt="React JS Icon"
//                     className="absolute top-16 mx-auto z-10"
//                 /> 
//             );
//         case "mobiledevelopment":
//             return (
//                 <Image
//                     src={ReactJsIcon}
//                     alt="Node JS Icon"
//                     className="absolute top-16 mx-auto z-10"
//                 />
//             );
//         case "database":
//             return (
//                 <Image
//                     src={NodeJsIcon}
//                     alt="PHP Icon"
//                     className="absolute top-16 mx-auto z-10"
//                 />
//             );
//         case "design":
//             return (
//                 <Image
//                     src={PhpIcon}
//                     alt="Next JS Icon"
//                     className="absolute top-16 mx-auto z-10"
//                 />
//             );
//         default:
//             return null;
//     }
// }

// export default IconForTab;


import React from "react";
import Image from "next/image";
import NextJsIcon from "@public/Assets/nextJsIcon.png";
import ReactJsIcon from "@public/Assets/reactJsIcon.png";
import NodeJsIcon from "@public/Assets/NodeJsIcon.png";
import PhpIcon from "@public/Assets/phpIcon.png";
import { StaticImageData } from 'next/image';

type Tab = "webdevelopment" | "mobiledevelopment" | "database" | "design";

const iconMapping: Record<Tab, StaticImageData[]> = {
    webdevelopment: [NextJsIcon, ReactJsIcon, NodeJsIcon, PhpIcon],
    mobiledevelopment: [ReactJsIcon],
    database: [NodeJsIcon],
    design: [PhpIcon],
};

function IconForTab({ tabId }: { tabId: Tab }) {
    const icons = iconMapping[tabId];

    if (!icons) {
        return null;
    }

    return (
        <div className="flex">
            {icons.map((icon, index) => (
                <Image
                    key={index}
                    src={icon}
                    alt={`${tabId} Icon ${index + 1}`}
                    className="mx-2"
                />
            ))}
        </div>
    );
}

export default IconForTab;
