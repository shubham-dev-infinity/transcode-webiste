"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaBehanceSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import logo from "@public/Assets/logo.png";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log("open");
        setIsOpen(!isOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropClick = () => {
        setIsDropdownOpen(false);
    };
    const handleSubmenuClick = () => {
        setIsDropdownOpen(false);
        closeMobileMenu();
        toggleMenu();
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
            <div className="hidden sm:flex text-white p-4 items-center justify-between bg-blue">
                <div className="container mx-auto text-white py-0.5 flex items-center justify-between ">
                    <div className="text-white">
                        <Link href="mailto:company@example.com">
                            <span className="hover:underline">company@example123.com</span>
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
                            <span className="text-xl hover:text-blue">
                                <BsLinkedin />
                            </span>
                        </Link>
                        <Link href="company-instagram" target="_blank" rel="noopener noreferrer">
                            <span className="text-xl hover:text-pink-500">
                                <FaInstagramSquare />
                            </span>
                        </Link>
                        <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
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
                <div className="container mx-auto flex justify-between space-x-4 px-4 py-2 items-center">
                    <div className="flex">
                        <Link href="/">
                            <Image src={logo} width={80} alt="logo" />
                        </Link>
                    </div>
                    <div className="lg:hidden">
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
                    </div>
                    {/* Navbar links */}
                    <div className="hidden items-center lg:flex space-x-4">
                        <Link href="/" onClick={closeMobileMenu}>
                            {/* <span className="hover:underline hover:text-blue">HOME</span> */}
                            <span className="hover:text-blue hover:border-b-4 hover:border-blue font-bold text-lg">HOME</span>

                        </Link>
                        <Link href="/about" onClick={closeMobileMenu}>
                            <span className="hover:text-blue hover:border-b-4 hover:border-blue font-bold text-lg">ABOUT US</span>
                        </Link>
                        {/* Dropdown Button */}
                        <div
                            onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                            className="relative"
                        >
                            <button
                                aria-expanded={isOpen} onClick={toggleMenu}
                                id="serviceDropdownButton"
                                className="hover:text-blue hover:border-b-4 hover:border-blue font-bold text-lg"
                                type="button"
                            >
                                SERVICES
                            </button>
                            {/* Dropdown menu */}
                            <ul className={`origin-top-right z-50 absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl ${isOpen ? 'block' : 'hidden'}`}>
                                <li>
                                    <Link href="/services/software" className="block px-4 py-2 hover:bg-gray dark:hover:bg-gray dark:hover:text-black font-semibold" onClick={handleSubmenuClick}>
                                        Software Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/consulting" className="block px-4 py-2 hover:bg-gray dark:hover:bg-gray dark:hover:text-black font-semibold" onClick={handleSubmenuClick}>
                                        Consulting Advisory
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/integration" className="block px-4 py-2 hover:bg-gray dark:hover:bg-gray dark:hover:text-black font-semibold" onClick={handleSubmenuClick}>
                                        SystemIntegration
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/managedservices" className="block px-4 py-2 hover:bg-gray dark:hover:bg-gray dark:hover:text-black font-semibold" onClick={handleSubmenuClick}>
                                        Managed Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/training" className="block px-4 py-2 hover:bg-gray dark:hover:bg-gray dark:hover:text-black font-semibold" onClick={handleSubmenuClick}>
                                        Training
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/quality" className="block px-4 py-2 hover:bg-gray dark:hover:bg-gray dark:hover:text-black font-semibold" onClick={handleSubmenuClick}>
                                        Quality Testing
                                    </Link>
                                </li>
                                {/* Add more list items here */}
                            </ul>
                        </div>
                        <Link href="/portfolio" onClick={closeMobileMenu}>
                            <span className="hover:text-blue hover:border-b-4 hover:border-blue font-bold text-lg">PORTFOLIO</span>
                        </Link>
                        <Link href="/contactus" onClick={closeMobileMenu}>
                            <span className="hover:text-blue hover:border-b-4 hover:border-blue font-bold text-lg">CONTACT US</span>
                        </Link>
                        <button className="bg-blue px-4 py-2 rounded-md font-bold text-white hover:bg-white hover:text-blue hover:shadow-2xl hover:border-blue">LET’S TALK</button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {/* <div className={`navbar-menu ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMobileMenu}></div>
                <div className="navbar-menu-content">
                    <div
                        onMouseEnter={toggleMobileMenu}
                        onMouseLeave={toggleMobileMenu}
                        className="relative">
                        <Link href="/" onClick={closeMobileMenu}>
                            <span className="block py-2 px-4 text-black hover:bg-blue hover:text-white">HOME</span>
                        </Link>
                        <Link href="/about" onClick={closeMobileMenu}>
                            <span className="block py-2 px-4 text-black hover:bg-blue hover:text-white">ABOUT US</span>
                        </Link>
                    </div>
                    <div
                        onMouseEnter={handleDropdownClick}
                        onMouseLeave={handleDropdownClick}
                        className="relative"
                    >
                        <button
                            id="serviceDropdownButtonMobile"
                            className="block py-2 px-4 text-black hover:bg-blue hover:text-white w-full text-left"
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
                        onMouseEnter={toggleMobileMenu}
                        onMouseLeave={toggleMobileMenu}
                        className="relative">
                        <Link href="/portfolio" >
                            <span className="block py-2 px-4 text-black hover:bg-blue hover:text-white">PORTFOLIO</span>
                        </Link>
                        <Link href="/contactus">
                            <span className="block py-2 px-4 text-black hover:bg-blue hover:text-white">CONTACT US</span>
                        </Link>
                        <button className="bg-blue px-4 py-2 rounded-md text-white w-full">LET’S TALK</button>
                    </div>
                </div>
            </div> */}




            {/* Mobile Menu */}
            <div className={`navbar-menu ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMobileMenu}></div>
                <div className="navbar-menu-content">
                    <div
                        onMouseEnter={toggleMobileMenu}
                        onMouseLeave={toggleMobileMenu}
                        className="relative">
                        <Link href="/" onClick={closeMobileMenu}>
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">HOME</span>
                        </Link>
                        <Link href="/about" onClick={closeMobileMenu}>
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">ABOUT US</span>
                        </Link>
                    </div>
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
                        onMouseEnter={toggleMobileMenu}
                        onMouseLeave={toggleMobileMenu}
                        className="relative">
                        <Link href="/portfolio" >
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">PORTFOLIO</span>
                        </Link>
                        <Link href="/contactus">
                            <span className="block py-2 px-4 text-blue hover:bg-blue hover:text-white font-semibold">CONTACT US</span>
                        </Link>
                        <button className="bg-blue px-4 py-2 rounded-md text-white w-full hover:bg-white hover:text-blue hover:shadow-2xl">LET’S TALK</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


