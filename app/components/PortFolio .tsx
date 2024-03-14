// Portfolio.tsx

import React from 'react';
import { StaticImageData } from 'next/image';

interface PortfolioProps {
    images: StaticImageData[];  // Corrected the property name to 'images'
}

const Portfolio: React.FC<PortfolioProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-12 gap-4">
            {images.map((image: StaticImageData, index: number) => (
                <div key={index} className="col-span-3">
                    <img src={image.src} alt={`Portfolio Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
