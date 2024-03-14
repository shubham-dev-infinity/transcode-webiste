"use client";

import Link from "next/link";
import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaBehanceSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav>
            <div className="flex text-white p-4 items-center justify-between bg-blue">
                <div className="container mx-auto text-white py-0.5 flex items-center justify-between ">
                    <div className="text-white">
                        <Link href="mailto:company@example.com">
                            <span className="hover:underline">company@example123.com</span>
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
                            <span className="text-xl hover:text-blue-500">
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
                <div className="container mx-auto flex justify-end space-x-4 p-4 items-center">
                    <Link href="/">
                        <span className="hover:underline hover:text-blue">HOME</span>
                    </Link>
                    <Link href="/about">
                        <span className="hover:underline hover:text-blue">ABOUT US</span>
                    </Link>
                    {/* Dropdown Button */}
                    <div
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        className="relative"
                    >
                        <Link href="/services" passHref>
                            <button
                                id="serviceDropdownButton"
                                className="hover:underline hover:text-blue"
                                type="button"
                            >
                                SERVICES
                            </button>
                        </Link>
                        {/* <button
                            id="serviceDropdownButton"
                            className="hover:underline hover:text-blue"
                        >
                            SERVICES
                        </button> */}
                        {/* Dropdown menu */}
                        <div
                            id="dropdownDelay"
                            className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full right-0 mt-1`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="serviceDropdownButton">
                                <li>
                                    <Link href="/services/services1" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black">
                                        Service-page1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/services2" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black">
                                        Service-page2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/services3" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black">
                                        Service-page3
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/services4" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black">
                                        Service-page4
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/services5" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black">
                                        Service-page5
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/services6" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray dark:hover:text-black">
                                        Service-page6
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="/portfolio">
                        <span className="hover:underline hover:text-blue">PORTFOLIO</span>
                    </Link>
                    <Link href="/contactus">
                        <span className="hover:underline hover:text-blue">CONTACT US</span>
                    </Link>
                    <button className="bg-blue px-4 py-2 rounded-md text-white">LET’S TALK</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;






