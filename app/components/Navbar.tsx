"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaBehanceSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import logo from "@public/Assets/logo.png";
import style from "../styles.module.scss"
import { SlArrowRight } from "react-icons/sl";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpens, setIsDropdownOpens] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutDropdownOpens, setIsAboutDropdownOpens] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    const [isOpenAbout, setIsOpenAbout] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleIndustryMenu = () => {
        setIsOpens(!isOpens);
    }
    const toggleAboutMenu = () => {
        setIsOpenAbout(!isOpenAbout);
    }
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownsClick = () => {
        setIsDropdownOpens(!isDropdownOpens)
    };

    const handleAboutDropdownsClick = () => {
        setIsAboutDropdownOpens(!isAboutDropdownOpens)
    };
    const handleSubmenuClick = () => {
        setIsDropdownOpen(false);
        closeMobileMenu();
        toggleMenu();

    };

    const handlesSubmenuClick = () => {
        setIsDropdownOpens(false);
        closeMobileMenu();
        toggleIndustryMenu();
    };

    const handlesAboutSubmenuClick = () => {
        setIsDropdownOpens(false);
        closeMobileMenu();
        toggleAboutMenu();
    };

    useEffect(() => {
        const handleResize = () => {
            // Close the mobile menu if it's open when the screen size increases
            if (isMobileMenuOpen && window.innerWidth > 767) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    return (
        <nav>
            <div className="hidden sm:flex text-white p-4 items-center justify-between h-[50px] bg-blue">
                <div className="container mx-auto text-white py-0.5 flex items-center justify-between ">
                    <div className="text-white">
                        <Link href="mailto:company@example.com">
                            <span className="hover:underline">company@example123.com</span>
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="https://www.linkedin.com/in/transcodesolution/" target="_blank" rel="noopener noreferrer">
                            <span className="text-xl hover:text-white">
                                <BsLinkedin />
                            </span>
                        </Link>
                        <Link href="https://www.instagram.com/nextorbitz" target="_blank" rel="noopener noreferrer">
                            <span className="text-xl hover:text-pink-500">
                                <FaInstagramSquare />
                            </span>
                        </Link>
                        <Link href="https://m.facebook.com/profile.php/" target="_blank" rel="noopener noreferrer">
                            <span className="text-xl hover:text-blue-500">
                                <FaFacebookSquare />
                            </span>
                        </Link>
                        <Link href="company-behance" target="_blank" rel="noopener noreferrer">
                            <span className="text-xl hover:text-blue-500">
                                <FaBehanceSquare />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="container mx-auto flex justify-between h-[100px] space-x-4 px-4 py-2 items-center">
                    <div className="flex">
                        <Link href="/">
                            <Image src={logo} width={80} alt="logo" />
                        </Link>
                    </div>
                    {/* <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="navbar-burger flex items-center text-blue p-3"
                        >
                            <svg
                                className="block h-4 w-4 fill-current"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div> */}
                    {/* Navbar links */}
                    <div className="hidden items-center lg:flex">
                        {/* <Link href="/" onClick={closeMobileMenu}>                      
                            <span className="hover:text-blue hover:border-b-4 hover:border-blue font-bold text-lg">HOME</span>
                        </Link>                         */}
                        {/* Dropdown Button */}
                        <div
                            onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                            className="relative"
                        >
                            <button
                                aria-expanded={isOpen} onClick={toggleMenu}
                                id="serviceDropdownButton"
                                className="hover:text-blue hover:border-b-4 px-3.5  hover:border-blue font-bold text-lg"
                                type="button"
                            >
                                SERVICES
                            </button>
                            {/* Dropdown menu */}
                            <ul className={`origin-top-right z-50 absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl ${isOpen ? 'block' : 'hidden'}`}>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/services/software" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handleSubmenuClick}>
                                        Software Development
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/services/consulting" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handleSubmenuClick}>
                                        Consulting Advisory
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/services/integration" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handleSubmenuClick}>
                                        SystemIntegration
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/services/managedservices" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handleSubmenuClick}>
                                        Managed Services
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/services/training" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handleSubmenuClick}>
                                        Training
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/services/quality" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handleSubmenuClick}>
                                        Quality Testing
                                    </Link>
                                </li>
                                {/* Add more list items here */}
                            </ul>
                        </div>
                        <div
                            onMouseEnter={() => setIsOpens(true)} onMouseLeave={() => setIsOpens(false)}
                            className="relative"
                        >
                            <button
                                aria-expanded={isOpens} onClick={toggleIndustryMenu}
                                id="industryDropdownButton"
                                className="hover:text-blue hover:border-b-4 px-3.5  hover:border-blue font-bold text-lg"
                                type="button"
                            >
                                INDUSTRY
                            </button>
                            {/* Dropdown menu */}
                            <ul className={`origin-top-right z-50 absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl ${isOpens ? 'block' : 'hidden'}`}>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesSubmenuClick}>
                                        Health Care
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesSubmenuClick}>
                                        Fintech
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/retail" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesSubmenuClick}>
                                        Retail & E-commerce
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesSubmenuClick}>
                                        Travel & Hospitality
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesSubmenuClick}>
                                        Real Estate
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesSubmenuClick}>
                                        Any Beyond
                                    </Link>
                                </li>
                                {/* Add more list items here */}
                            </ul>
                        </div>
                        <Link href="/portfolio" onClick={closeMobileMenu}>
                            <span className="hover:text-blue hover:border-b-4 px-3.5  hover:border-blue font-bold text-lg">PORTFOLIO</span>
                        </Link>
                        <Link href="/blog" onClick={closeMobileMenu}>
                            <span className="hover:text-blue hover:border-b-4 px-3.5  hover:border-blue font-bold text-lg">BLOG</span>
                        </Link>
                        {/* <Link href="/about" onClick={closeMobileMenu}>
                            <span className="hover:text-blue hover:border-b-4 px-3.5  hover:border-blue font-bold text-lg">ABOUT US</span>
                        </Link> */}
                        <div
                            onMouseEnter={() => setIsOpenAbout(true)} onMouseLeave={() => setIsOpenAbout(false)}
                            className="relative"
                        >
                            <button
                                aria-expanded={isOpenAbout} onClick={toggleAboutMenu}
                                id="aboutDropdownButton"
                                className="hover:text-blue hover:border-b-4 px-3.5  hover:border-blue font-bold text-lg"
                                type="button"
                            >
                                ABOUT US
                            </button>
                            {/* Dropdown menu */}
                            <ul className={`origin-top-right z-50 absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl ${isOpenAbout ? 'block' : 'hidden'}`}>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/about" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesAboutSubmenuClick}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesAboutSubmenuClick}>
                                        Our Culture
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesAboutSubmenuClick}>
                                        Our Team
                                    </Link>
                                </li>
                                <li className="flex items-center hover:translate-x-4 hover:text-blue">
                                    <SlArrowRight size={10} />
                                    <Link href="/" className="px-4 py-2 text-sm font-semibold hover:transform hover:bg-transparent" onClick={handlesAboutSubmenuClick}>
                                        Our Story
                                    </Link>
                                </li>
                                {/* Add more list items here */}
                            </ul>
                        </div>
                        <Link href="/contactus" onClick={closeMobileMenu}>
                            <span className="hover:text-blue hover:border-b-4 px-3.5  hover:border-blue font-bold text-lg">CONTACT</span>
                        </Link>
                    </div>
                    <div className=" flex">
                        <button className="bg-blue px-4 py-2 rounded-md font-bold text-white hover:bg-white hover:text-blue hover:shadow-2xl hover:border-blue">LET’S TALK</button>
                        <button
                            onClick={toggleMobileMenu}
                            className="navbar-burger flex items-center text-blue p-3 lg:hidden"
                        >
                            <svg
                                className="block h-4 w-4 fill-current"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    {/* <div className="">
                        <button className="bg-blue px-4 py-2 rounded-md font-bold text-white hover:bg-white hover:text-blue hover:shadow-2xl hover:border-blue">LET’S TALK</button>
                    </div> */}
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`navbar-menu ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMobileMenu}></div>
                <div className="navbar-menu-content">
                    {/* <div
                        onMouseEnter={toggleMobileMenu}
                        onMouseLeave={toggleMobileMenu}
                        className="relative">
                        <Link href="/" onClick={closeMobileMenu}>
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">HOME</span>
                        </Link>                      
                    </div> */}
                    <div
                        onMouseEnter={handleDropdownClick}
                        onMouseLeave={handleDropdownClick}
                        className="relative"
                    >
                        <button
                            id="serviceDropdownButtonMobile"
                            className="block py-2 px-4 text-blue hover:bg-blue hover:text-white w-full text-left font-semibold"
                            aria-expanded={isOpen} onClick={toggleMenu}
                        >
                            SERVICES
                        </button>
                        <div
                            id="dropdownDelay"
                            className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y
              divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 absolute top-full left-0 mt-1`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="serviceDropdownButtonMobile">
                                <li>
                                    <Link href="/services/software" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handleSubmenuClick}>
                                        Software Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/consulting" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handleSubmenuClick}>
                                        Consulting Advisory
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/integration" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handleSubmenuClick}>
                                        SystemIntegration
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/managedservices" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handleSubmenuClick}>
                                        Managed Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/training" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handleSubmenuClick}>
                                        Training
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/quality" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handleSubmenuClick}>
                                        Quality Testing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        onMouseEnter={handleDropdownsClick}
                        onMouseLeave={handleDropdownsClick}
                        className="relative">
                        <button
                            id="industryDropdownButtonMobile"
                            className="block py-2 px-4 text-blue hover:bg-blue hover:text-white w-full text-left font-semibold"
                            aria-expanded={isOpens} onClick={toggleIndustryMenu}
                        >
                            INDUSTRY
                        </button>
                        <div
                            id="dropdownDelay"
                            className={`z-10 ${isOpens ? 'block' : 'hidden'} bg-white divide-y
                             divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 absolute top-full left-0 mt-1`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="industryDropdownButtonMobile">
                                <li>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesSubmenuClick}>
                                        Health Care
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesSubmenuClick}>
                                        Fintech
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/retail" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesSubmenuClick}>
                                        Retail & E-commerce
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesSubmenuClick}>
                                        Travel & Hospitality
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesSubmenuClick}>
                                        Real Estate
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesSubmenuClick}>
                                        Any Beyond
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        onMouseEnter={toggleMobileMenu}
                        onMouseLeave={toggleMobileMenu}
                        className="relative">
                        <Link href="/portfolio" >
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">PORTFOLIO</span>
                        </Link>
                        <Link href="/blog" >
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">BLOG</span>
                        </Link>
                        {/* <Link href="/about" onClick={closeMobileMenu}>
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">ABOUT US</span>
                        </Link> */}
                        <div
                            onMouseEnter={handleAboutDropdownsClick}
                            onMouseLeave={handleAboutDropdownsClick}
                            className="relative">
                            <button
                                id="aboutDropdownButtonMobile"
                                className="block py-2 px-4 text-blue hover:bg-blue hover:text-white w-full text-left font-semibold"
                                aria-expanded={isOpenAbout} onClick={toggleAboutMenu}
                            >
                                ABOUT US
                            </button>
                            <div
                                id="dropdownDelay"
                                className={`z-10 ${isOpenAbout ? 'block' : 'hidden'} bg-white divide-y
                             divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 absolute top-full left-0 mt-1`}
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="aboutDropdownButtonMobile">
                                    <li>
                                        <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesAboutSubmenuClick}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesAboutSubmenuClick}>
                                            Our Culture
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/retail" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesAboutSubmenuClick}>
                                            Our Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black" onClick={handlesAboutSubmenuClick}>
                                            Our Story
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link href="/contactus">
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">CONTACT US</span>
                        </Link>
                        <button className="bg-blue px-4 py-2 rounded-md text-white ml-3 hover:bg-white hover:text-blue hover:shadow-2xl">LET’S TALK</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


