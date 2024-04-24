// import Image, { ImageProps } from "next/image";

// interface HeroSectionProps {
//     // image?: ImageProps['src']; // Use ImageProps['src'] as the type   
//     image?:any;
//     text?: String;
//     discription?: String;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ image, text, discription }) => {
//     return (
//         <>
//             <div className="flex justify-between items-center ">
//                 <div className="container mx-auto pl-24">
//                     <div>
//                         <h1 className="text-headertext xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-extrabold text-left mb-5">{text}</h1>
//                         <p className="text-black text-2xl font-medium text-left my-auto">{discription}</p>
//                     </div>
//                 </div>
//                 <Image
//                     src={image}
//                     alt="Your Name"
//                     className="object-contain"
//                 />
//             </div>            
//         </>
//     );
// };

// export default HeroSection;





// import Image from "next/image";

// interface HeroSectionProps {
//     image?: any;
//     text?: string;
//     discription?: string;
//     centerText?: boolean; // Add a prop to control text alignment
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ image, text, discription, centerText }) => {
//     return (
//         <div className="flex justify-between items-center">
//             <div className="container mx-auto pl-24">
//                 <div className={centerText ? "text-center" : "text-left"}> {/* Conditionally apply text-center class */}
//                     <h1 className="text-headertext xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-extrabold mb-5">{text}</h1>
//                     <p className="text-black text-2xl font-medium  my-auto">{discription}</p>
//                 </div>
//             </div>
//             <Image
//                 src={image}
//                 alt="Your Name"
//                 className="object-contain"
//             />
//         </div>
//     );
// };

// export default HeroSection;


import Image from "next/image";

interface HeroSectionProps {
    image?: any;
    text?: string;
    discription?: string;
    centerText?: boolean; // Add a prop to control text alignment
}

const HeroSection: React.FC<HeroSectionProps> = ({ image, text, discription, centerText }) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center pb-6"> {/* Adjust flex direction based on screen size */}
            <div className="container mx-auto px-8">
                <div className={centerText ? "text-center" : "lg:pl-8 xl:pl-16 2xl:pl-32"}>
                    <h1 className="text-headertext xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-extrabold mb-3 sm:mb-5"> {/* Adjust text size for smaller screens */}
                        {text}
                    </h1>
                    <p className="text-black text-lg sm:text-2xl font-medium my-auto"> {/* Adjust text size for smaller screens */}
                        {discription}
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2"> {/* Adjust width for image container and add margin bottom */}
                <Image
                    src={image}
                    alt="Your Name"
                    className="object-contain mb-6"
                />
            </div>
        </div>
    );
};

export default HeroSection;
