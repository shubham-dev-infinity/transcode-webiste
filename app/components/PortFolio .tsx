import React, { useState } from 'react';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
interface PortfolioProps {
    images: StaticImageData[];
}

const Portfolio: React.FC<PortfolioProps> = ({ images }) => {
    const [showAllImages, setShowAllImages] = useState(false);
    const router = useRouter();

    // Function to handle "Show More" button click
    const handleShowMoreClick = () => {
        // setShowAllImages(true);
        router.push('/portfolio');
    };

    // Decide which set of images to display based on the state
    const imagesToShow = showAllImages ? images : images.slice(0, 6);

    return (
        <div className="grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            {imagesToShow.map((image: StaticImageData, index: number) => (
                <div key={index}>
                    <img src={image.src} alt={`Portfolio Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
            {/* Show more button */}
            {!showAllImages && (
                // <div className="col-span-3">
                //     <button onClick={handleShowMoreClick} className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                //         Show More
                //     </button>
                // </div>
                <div className="col-span-3">
                    <button onClick={handleShowMoreClick} className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Portfolio;




