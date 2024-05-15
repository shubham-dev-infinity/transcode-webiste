'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow up icon from react-icons/fa
import { RiTriangleFill } from "react-icons/ri";
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`fixed bottom-4 right-8 bg-blue-500 bg-customBlue text-white p-3 rounded-full cursor-pointer transition-opacity duration-300 shadow-custom-light ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop}
        >
            <RiTriangleFill className=" text-white" />
        </div>
    );
};

export default BackToTopButton;
