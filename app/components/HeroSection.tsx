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





import Image from "next/image";

interface HeroSectionProps {
    image?: any;
    text?: string;
    discription?: string;
    centerText?: boolean; // Add a prop to control text alignment
}

const HeroSection: React.FC<HeroSectionProps> = ({ image, text, discription, centerText }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="container mx-auto pl-24">
                <div className={centerText ? "text-center" : "text-left"}> {/* Conditionally apply text-center class */}
                    <h1 className="text-headertext xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-extrabold mb-5">{text}</h1>
                    <p className="text-black text-2xl font-medium  my-auto">{discription}</p>
                </div>
            </div>
            <Image
                src={image}
                alt="Your Name"
                className="object-contain"
            />
        </div>
    );
};

export default HeroSection;
