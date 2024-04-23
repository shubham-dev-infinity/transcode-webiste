import HeroSection from "@/components/HeroSection";
import contact1 from "@public/Assets/contact1.png";
import style from "../components/styles.module.scss"
import Image from "next/image";
import letTalk from "@public/Assets/letTalk.png"
import email from "@public/Assets/email.png"
import homeLocation from "@public/Assets/icon/homeLocation.png"
import serviceImmediately from "@public/Assets/serviceImmediately.png"

const ContactUs = () => {
    return (
        <main className="mb-10">
            <div className={style.heroBgImage}>
                <HeroSection image={contact1} text={"Contact Us"} centerText={true} />
            </div>
            <div className="mt-12">
                <div className="container mx-auto ">
                    <h2 className="font-extrabold text-center text-3xl pb-4">
                        Please don&apos;t hesitate to contact us with any inquiries or
                        messages.
                    </h2>
                    <h3 className="text-gray text-center text-2xl">
                        You can also reach out to us by phone or email in many variations.
                    </h3>
                    <div className="grid grid-cols-12 gap-4 mt-6">
                        <div className="col-span-12 lg:col-span-4 bg-gray p-2">
                            <div className="col-span-4 flex gap-4 xl:gap-10 pt-4 md:pt-0">
                                <Image
                                    src={email}
                                    alt="email"
                                    className="rounded-full"
                                    style={{ width: '100px', height: '100px' }}
                                    data-aos="fade-up" data-aos-delay="100"
                                />
                                <div className="items-center justify-center pt-4">
                                    <h4 className="text-xl">Email</h4>
                                    <p className="text-sm lg:text-sm xl:text-lg">info@transcodesolution.com</p>
                                </div>
                            </div>
                            <div className="col-span-4 flex gap-4 xl:gap-10 pt-4">
                                <Image
                                    src={letTalk}
                                    alt="letTalk"
                                    className="rounded-full"
                                    style={{ width: '100px', height: '100px' }}
                                    data-aos="fade-up" data-aos-delay="100"
                                />
                                <div className="items-center justify-center pt-4">
                                    <h4 className="text-xl">Let’s Talk</h4>
                                    <p className="text-sm xl:text-lg">+1-123-456-7890</p>
                                </div>
                            </div>
                            <div className="col-span-4 flex gap-4 xl:gap-10 pt-4">
                                <Image
                                    src={homeLocation}
                                    alt="homeLocation"
                                    className="rounded-full"
                                    style={{ width: '100px', height: '100px' }}
                                    data-aos="fade-up" data-aos-delay="100"
                                />
                                <div className="items-center justify-center pt-4">
                                    <h4 className="text-xl">Address</h4>
                                    <p className="text-sm xl:text-lg">301, Ambika Pinnacle,beside Lajamni Chowk,Mota Varachha, Surat,Gujarat 394101</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 bg-gray p-12 text-left">
                            <h2 className="font-extrabold text-3xl pb-4">
                                Contact <span className="text-blue">Transcode Solution</span>
                            </h2>
                            <h3 className="text-gray text-2xl font-semibold">
                                Let&apos;s make a connection! Whether you choose to send a message or have a live conversation with us, we are available to assist you at all times.
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div>
                                    <label className="block text-gray text-lg font-semibold mb-1">First Name</label>
                                    <input type="text" className="p-2 rounded-md w-full" />
                                </div>

                                <div>
                                    <label className="block text-gray text-lg font-semibold mb-1">Last Name</label>
                                    <input type="text" className="p-2 rounded-md w-full" />
                                </div>

                                <div >
                                    <label className="block text-gray text-lg font-semibold mb-1">Email</label>
                                    <input type="text" className="p-2 rounded-md w-full" />
                                </div>

                                <div>
                                    <label className="block text-gray text-lg font-semibold mb-1">Phone Number</label>
                                    <input type="text" className="p-2 rounded-md w-full" />
                                </div>

                                <div>
                                    <label className="block text-gray text-lg font-semibold mb-1">Message</label>
                                    <input type="text" className="p-2 rounded-md w-full" />
                                </div>

                                <div className="md:col-span-2 flex justify-center">
                                    <button className="bg-blue px-4 py-2 rounded-md text-white hover:bg-white hover:text-blue hover:border-blue border hover:border-solid">Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-10 w-full h-full" data-aos="zoom-in" data-aos-delay="100">
                        <iframe
                            className="w-full border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8386097921216!2d72.88554337600243!3d21.23824748054903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b85f9dd4c092aa7%3A0x848f6ed51a191ad8!2sTranscode%20Solution!5e0!3m2!1sen!2sin!4v1710241320652!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            width="600" height="450"
                            loading="lazy"
                        />
                    </div>
                    <div className="bg-radiant pl-2 mt-10">
                        <div className="grid grid-cols-12 lg:gap-10" data-aos="zoom-out" data-aos-delay="100">
                            <div className="col-span-12 md:col-span-4">
                                <Image
                                    src={serviceImmediately}
                                    alt="serviceImmediately"
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-8 text-left my-auto">
                                <h2 className="font-extrabold text-3xl pb-8">Experience our service immediately!</h2>
                                <h3 className="text-xl font-normal pb-8 text-gray">Our comprehensive transcode solutions seamlessly connect and efficiently address all your multimedia requirements.</h3>
                                <div>
                                    <button className="bg-blue px-4 py-2 rounded-md text-white hover:bg-white hover:text-blue hover:border-blue border hover:border-solid">Get Started Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default ContactUs;





