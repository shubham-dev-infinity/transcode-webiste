import Image, { ImageProps } from "next/image";
import React from 'react';

interface CardWrapperProps {
    title: string;
    description: string;
    image?: ImageProps['src'];

}

const CardWrapper: React.FC<CardWrapperProps> = ({ title, description, image }) => {
    return (
        <div className="mb-10 bg-gray p-6 m-4 relative -z-10 w-3/12 h-438 rounded-3xl">
            <div className="flex justify-center h-48">
                {image && (
                    <Image
                        src={image}
                        alt="Your Name"
                        className="absolute -top-16 mx-auto	z-10"
                    />
                )}
            </div>
            <div className="">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray">{description}</p>
            </div>
        </div>
    );
};

export default CardWrapper;
