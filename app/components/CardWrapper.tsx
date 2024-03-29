import Image, { ImageProps } from "next/image";
import React from 'react';

interface CardWrapperProps {
    title: string;
    description: string;
    image?: ImageProps['src'];
}

const CardWrapper: React.FC<CardWrapperProps> = ({ title, description, image }) => {
    return (
        <div className="bg-gray px-7 pt-28 pb-8 rounded-3xl relative transform transition-transform hover:bg-white hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
                {image && (
                    <Image
                        src={image}
                        alt="Your Name"
                        className="h-48 w-auto absolute -top-[70px] left-auto right-auto"
                    />
                )}
            </div>
            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray">{description}</p>
            </div>
        </div>
    );
};

export default CardWrapper;

