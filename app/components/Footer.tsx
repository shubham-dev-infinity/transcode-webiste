// import Link from "next/link";
// import { FaFacebookSquare, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
// import Image from 'next/image';
// import logo from "@public/Assets/logo.png"
// import { MdLocationPin } from "react-icons/md";
// const Footer = () => {
//     return (
//         <div className="bg-blue">
//             <div className="container mx-auto text-white pt-8">
//                 <div className="flex">
//                     <div className="flex-1">
//                         <Image
//                             src={logo}
//                             height={94}
//                             width={116.51}
//                             alt="Your Name"
//                             className="pb-4"
//                         />
//                         <span>
//                             Welcome to Transcode Solutions – Empowering your digital success with innovative solutions.
//                         </span>
//                         <h1 className="text-2xl font-bold pt-4">Address</h1>
//                         <div className="w-24 h-0.5 bg-white mb-4"></div>
//                         <p className="text-lg">
//                             301, Ambika Pinnacle, beside Lajamni Chowk, Maruti Dham Society, Mota Varachha, Surat, Gujarat 394101
//                         </p>
//                         <div className="flex gap-5 mt-4">
//                             <div className="flex">
//                                 <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                     <span className="text-xl hover:text-blue-500">
//                                         <FaFacebookSquare className="w-6 h-6 rounded-md" />
//                                     </span>
//                                 </Link>
//                             </div>
//                             <div className="flex">
//                                 <Link href="company-instagram" target="_blank" rel="noopener noreferrer">
//                                     <span className="text-xl hover:text-pink-500">
//                                         <FaTwitter className="w-6 h-6 rounded-md" />
//                                     </span>
//                                 </Link>
//                             </div>
//                             <div className="flex">
//                                 <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
//                                     <span className="text-xl hover:text-blue-500">
//                                         <FaYoutube className="w-6 h-6 rounded-md" />
//                                     </span>
//                                 </Link>
//                             </div>
//                             <div className="flex">
//                                 <Link href="company-behance" target="_blank" rel="noopener noreferrer">
//                                     <span className="text-xl hover:text-blue-500">
//                                         <FaPinterest className="w-6 h-6 rounded-md" />
//                                     </span>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex-1">
//                         <h1 className="text-2xl font-bold">Quick Links</h1>
//                         <div className="w-24 h-0.5 bg-white mb-2"></div>
//                         {/* <div className="flex gap-4">    
//                             <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     <MdLocationPin className="w-8 h-9 rounded-md" />
//                                 </span>
//                             </Link>
//                             <p>
//                                 301, Ambika Pinnacle, beside Lajamni Chowk, Maruti Dham Society, Mota Varachha, Surat, Gujarat 394101
//                             </p>
//                         </div> */}
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Home
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     About Transcode
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Services
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Insight
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Client Portfolio
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Contact
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="flex-1">
//                         <h1 className="text-2xl font-bold">Services</h1>
//                         <div className="w-28 h-0.5 bg-white mb-2"></div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Software Development
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     IT Consulting & Advisory
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     System Integration Services
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Manage IT Services
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Training & Education
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Quality Assurance & Testing
//                                 </span>
//                             </Link>
//                         </div>
//                         <h1 className="text-2xl font-bold pt-6">Project Inquiry</h1>
//                         <div className="w-28 h-0.5 bg-white mb-2"></div>
//                         <p className="pb-1">Call: +1 4758123694</p>
//                         <p>Email: info@transcodesolution.com</p>
//                     </div>
//                     <div className="flex-1">
//                         <h1 className="text-2xl font-bold">Resource</h1>
//                         <div className="w-28 h-0.5 bg-white mb-2"></div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Careers
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Our Work Culture
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1 pb-2">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Our Mission Story
//                                 </span>
//                             </Link>
//                         </div>
//                         <div className="flex-1">
//                             <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                                 <span className="text-base hover:text-blue-500">
//                                     Site Map
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <hr className="border-t border-white my-6" />
//                 <div className="pb-7 text-center text-sm">
//                     © 2024 All Rights Reserved - transcodesolution.com
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;



import Link from "next/link";
import { FaFacebookSquare, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import logo from "@public/Assets/logo.png"
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-footerbackground">
            <div className="container mx-auto text-white pt-8 grid grid-cols-2 lg:grid-cols-4 gap-8 p-3">
                <div>
                    <Image
                        src={logo}
                        height={94}
                        width={116.51}
                        alt="Your Name"
                        className="pb-4"
                    />
                    <span>
                        Welcome to Transcode Solutions – Empowering your digital success with innovative solutions.
                    </span>
                    <h1 className="text-2xl font-bold pt-4">Address</h1>
                    <div className="w-24 h-0.5 bg-white mb-4"></div>
                    <p className="text-lg">
                        301, Ambika Pinnacle, beside Lajamni Chowk, Maruti Dham Society, Mota Varachha, Surat, Gujarat 394101
                    </p>
                    <div className="flex gap-5 mt-4">
                        <div className="flex">
                            <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
                                <span className="text-xl hover:text-blue-500">
                                    <FaFacebookSquare className="w-6 h-6 rounded-md" />
                                </span>
                            </Link>
                        </div>
                        <div className="flex">
                            <Link href="company-instagram" target="_blank" rel="noopener noreferrer">
                                <span className="text-xl hover:text-pink-500">
                                    <FaTwitter className="w-6 h-6 rounded-md" />
                                </span>
                            </Link>
                        </div>
                        <div className="flex">
                            <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
                                <span className="text-xl hover:text-blue-500">
                                    <FaYoutube className="w-6 h-6 rounded-md" />
                                </span>
                            </Link>
                        </div>
                        <div className="flex">
                            <Link href="company-behance" target="_blank" rel="noopener noreferrer">
                                <span className="text-xl hover:text-blue-500">
                                    <FaPinterest className="w-6 h-6 rounded-md" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Quick Links</h1>
                    <div className="w-24 h-0.5 bg-white mb-2"></div>
                    <div className="flex flex-col">
                        <Link href="/" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-10">
                                Home
                            </span>
                        </Link>
                        <Link href="/about" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                About Transcode
                            </span>
                        </Link>
                        <Link href="company-linkedin" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Services
                            </span>
                        </Link>
                        <Link href="/blog" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Insight
                            </span>
                        </Link>
                        <Link href="/portfolio" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Client Portfolio
                            </span>
                        </Link>
                        <Link href="/contactus" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Services</h1>
                    <div className="w-28 h-0.5 bg-white mb-2"></div>
                    <div className="flex flex-col">
                        <Link href="/services/software" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Software Development
                            </span>
                        </Link>
                        <Link href="/services/consulting" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                IT Consulting & Advisory
                            </span>
                        </Link>
                        <Link href="/services/integration" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                System Integration Services
                            </span>
                        </Link>
                        <Link href="/services/managedservices" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Manage IT Services
                            </span>
                        </Link>
                        <Link href="/services/training" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Training & Education
                            </span>
                        </Link>
                        <Link href="/services/quality" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Quality Assurance & Testing
                            </span>
                        </Link>
                    </div>
                    <h1 className="text-2xl font-bold pt-6">Project Inquiry</h1>
                    <div className="w-28 h-0.5 bg-white mb-2"></div>
                    <p className="pb-1">Call: +1 4758123694</p>
                    <p>Email: info@transcodesolution.com</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Resource</h1>
                    <div className="w-28 h-0.5 bg-white mb-2"></div>
                    <div className="flex flex-col">
                        <Link href="/career" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Careers
                            </span>
                        </Link>
                        <Link href="/workculture" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Our Work Culture
                            </span>
                        </Link>
                        <Link href="/missionstory" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Our Mission Story
                            </span>
                        </Link>
                        <Link href="/sitemap" rel="noopener noreferrer">
                            <span className="text-base hover:text-white_hover pb-3">
                                Site Map
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <hr className="border-t border-white my-6" /> */}
            <div className="pb-7 text-center text-sm mt-6">
                © 2024 All Rights Reserved - transcodesolution.com
            </div>
        </div>
    );
};

export default Footer;

