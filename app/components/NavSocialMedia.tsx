import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaBehanceSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


const NavSocialMedia = () => {
    return (
        <div className="hidden sm:flex text-white p-4 items-center justify-between h-[50px] bg-blue">
            <div className="container mx-auto text-white py-0.5 flex items-center justify-between ">
                <div className="text-white">
                    <Link href="mailto:company@example.com">
                        <span className="hover:underline">Email : info@transcodesolution.com</span>
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
    )
}

export default NavSocialMedia;