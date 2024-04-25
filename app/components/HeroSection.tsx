import Image from "next/image";
interface HeroSectionProps {
    image?: any;
    text?: string;
    discription?: string;   
}

const HeroSection: React.FC<HeroSectionProps> = ({ image, text, discription}) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center pb-6"> 
            <div className="container mx-auto px-8">
                <div className={"lg:pl-8 xl:pl-16 2xl:pl-60"}>
                    <h1 className="text-headertext xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-extrabold mb-3 sm:mb-5">
                        {text}
                    </h1>
                    <p className="text-black text-lg sm:text-2xl font-medium my-auto"> 
                        {discription}
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2"> 
                <Image
                    src={image}
                    alt="Your Name"
                    className="object-contain mb-6 lg:-mb-6"
                />
            </div>
        </div>
    );
};

export default HeroSection;
