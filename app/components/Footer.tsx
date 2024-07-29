import Link from "next/link";
import Image from 'next/image';
import logo from "@public/Assets/logo.png"
import Oman from "@public/Assets/Oman.png";
import FlagOfIndia from "@public/Assets/Flag_of_India.png";
import Facebook from "@public/Assets/Facebook.png"
import Twitter from "@public/Assets/Twitter.png"
import YouTube from "@public/Assets/YouTube.png"
import Pinterest from "@public/Assets/Pinterest.png"
const Footer = () => {
    return (
        <div className="bg-footerbackground">
            <div className="container mx-auto text-white pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-3">
                <div>
                    <Image
                        src={logo}
                        height={94}
                        width={116.51}
                        alt="Your Name"
                    />
                    <span className="text-sm sm:text-sm">
                        Welcome to Transcodezy  Solutions – Empowering your digital success with innovative solutions.
                    </span>
                    <h1 className="text-lg sm:text-xl font-bold pt-4">Project Inquiry</h1>
                    <div className="w-28 h-0.5 bg-white mb-2"></div>
                    <p className="text-sm leading-0 sm:leading-8">Call: +91 9879868908</p>
                    <p className="text-sm leading-0 sm:leading-8">Email: info@transcodesolution.com</p>
                </div>
                <div>
                    <h1 className="text-base sm:text-xl font-bold">Quick Links</h1>
                    <div className="w-24 h-0.5 bg-white mb-0 sm:mb-4"></div>
                    <div className="flex flex-col leading-0 sm:leading-8">
                        <Link href="/" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover">
                                Home
                            </span>
                        </Link>
                        <Link href="/about" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                About Transcodezy
                            </span>
                        </Link>
                        <Link href="company-linkedin" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Services
                            </span>
                        </Link>
                        <Link href="/blog" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Insight
                            </span>
                        </Link>
                        <Link href="/portfolio" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Client Portfolio
                            </span>
                        </Link>
                        <Link href="/contact-us" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-base sm:text-xl font-bold">Services</h2>
                    <div className="w-28 h-0.5 bg-white mb-1 sm:mb-4"></div>
                    <div className="flex flex-col leading-0 sm:leading-8">
                        <Link href="/services/software-development" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Software Development
                            </span>
                        </Link>
                        <Link href="/services/consulting-advisory" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                IT consulting-advisory
                            </span>
                        </Link>
                        <Link href="/services/system-integration" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                System-integration Services
                            </span>
                        </Link>
                        <Link href="/services/manage-it-services" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Manage IT Services
                            </span>
                        </Link>
                        <Link href="/services/training-and-education" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Training & Education
                            </span>
                        </Link>
                        <Link href="/services/quality-testing" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Quality Assurance & Testing
                            </span>
                        </Link>
                    </div>
                    {/* <h1 className="text-lg sm:text-xl font-bold pt-6 sm:pt-12">Project Inquiry</h1>
                    <div className="w-28 h-0.5 bg-white mb-2 sm:mb-6"></div>
                    <p className="text-sm leading-0 sm:leading-8">Call: +91 9879868908</p>
                    <p className="text-sm leading-0 sm:leading-8">Email: info@transcodesolution.com</p> */}
                </div>
                <div >
                    <h1 className="text-lg sm:text-xl font-bold">Resource</h1>
                    <div className="w-28 h-0.5 bg-white mb-2 sm:mb-4"></div>
                    <div className="flex flex-col leading-0 sm:leading-8 md:mb-10 lg:mb-52 xl:mb-36">
                        <Link href="/career" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Careers
                            </span>
                        </Link>
                        <Link href="/work-culture" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Our Work Culture
                            </span>
                        </Link>
                        <Link href="/our-mission-story" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Our Mission Story
                            </span>
                        </Link>
                        <Link href="/sitemap" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                Site Map
                            </span>
                        </Link>
                        <Link href="/faqs" rel="noopener noreferrer">
                            <span className="text-sm hover:text-white_hover pb-0 sm:pb-3">
                                FAQS
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-white">
                <h2 className="text-lg sm:text-xl font-bold">Connect With Us</h2>
                <div className="w-24 h-0.5 bg-white mx-auto"></div>
            </div>

            <div className="container mx-auto text-white grid grid-cols-1 sm:grid-cols-2 gap-8 p-3">
                <div className="sm:col-start-1">
                    <div className="grid grid-cols-12 items-start mt-6">
                        <Image src={FlagOfIndia} alt="Flag_of_India" width={50} height={33.34} className="col-span-12 sm:col-span-2 lg:col-span-12 xl:col-span-1 mb-3 sm:mb-0 lg:pb-2 xl:pb-0" />
                        <div className="ml-3 col-span-12 sm:col-span-5">
                            <p className="text-sm col-span-12">
                                301, Ambika Pinnacle, beside Lajamni Chowk, Maruti Dham Society, Digital Valley (Mota Varachha), Surat, Gujarat, India
                            </p>
                            <p className="text-sm my-2 col-span-12">Call: +91 9510249833</p>
                            <p className="text-sm my-2 col-span-12">Email: ceo@transcodesolution.com</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 sm:items-start mt-6 justify-end">
                    <Image src={Oman} alt="Oman" width={60} height={30} className="col-span-12 sm:col-span-2 lg:col-span-12 xl:ml-[302px] xl:col-span-7 mb-3 sm:mb-0 lg:pb-2 xl:pb-0" />
                    <div className="ml-3 col-span-12 sm:col-span-5 float-right">
                        <p className="text-sm col-span-12">
                            P.O.Box:1890, PC:130, Ruwi, Muscat, Sultanate of Oman.
                        </p>
                        <p className="text-sm my-2 col-span-12">Call: +968-91945242</p>
                        <p className="text-sm my-2 col-span-12">Email: cso@transcodesolution.com</p>
                    </div>
                </div>
            </div>
            <hr className="container mx-auto border-t border-white mt-6 mb-4" />
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 items-center pb-4">
                <p className="text-white text-sm mb-2 sm:mb-4 sm:text-left col-start-1 sm:col-start px-2 sm:px-0">© 2024 All Rights Reserved - transcodesolution.com</p>
                <div className="flex justify-start sm:justify-end px-2 sm:px-0 gap-5 mb-4 text-white col-start-1 sm:col-start-auto sm:col-end-auto">
                    <div className="flex items-center justify-center">
                        <Link href="https://m.facebook.com/profile.php/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-1">
                            <Image src={Facebook} alt="Facebook" width={24} height={24} className="w-6 h-6 text-black transform transition-transform hover:scale-110" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="https://twitter.com/dharmeshkumbhani3" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-1">
                            <Image src={Twitter} alt="Twitter" width={24} height={24} className="w-6 h-6 text-black transform transition-transform hover:scale-110" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="https://youtube.com/@Dharmeshkumbhani2580?si=Ek-XLWVTscwtpP8p" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-1">
                            <Image src={YouTube} alt="YouTube" width={24} height={24} className="w-6 h-6 text-black transform transition-transform hover:scale-110" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="https://in.pinterest.com/transcodesolution/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white p-1">
                            <Image src={Pinterest} alt="Pinterest" width={24} height={24} className="w-6 h-6 text-black transform transition-transform hover:scale-110" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

