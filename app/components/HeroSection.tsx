import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
    image?: any;
    text?: string;
    discription?: string;
    link?: string; // Changed "Link" to "link" to follow conventions
}

const HeroSection: React.FC<HeroSectionProps> = ({ image, text, discription, link }) => {
    const externalUrl = "https://casestudy.transcodesolution.com"; // External URL

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center pb-6">
            <div className="container mx-auto px-8">
                <div className={"lg:pl-8 xl:pl-16 2xl:pl-60"}>
                    <h1 className="text-headertext xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-extrabold mb-3 sm:mb-5">
                        {text}
                    </h1>
                    {link && (
                        <Link href={externalUrl} target="_blank" rel="noopener noreferrer" className="bg-blue px-4 py-2 rounded-md font-bold text-white mb-2 lg:mb-0 hover:bg-white hover:text-blue hover:shadow-2xl">
                            CaseStudy
                        </Link>
                    )}
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
