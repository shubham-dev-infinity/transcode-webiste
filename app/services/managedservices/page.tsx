import HeroSection from "@/components/HeroSection";
import style from "../styles.module.scss"
import managedServices from "@public/Assets/managedServices.png"
import Image from "next/image";
import Converted from "@public/Assets/icon/Converted1.png";
import network from "@public/Assets/icon/network.png";
import infrastructure from "@public/Assets/icon/infrastructure.png";
import accessControl from "@public/Assets/icon/accessControl.png";
import support from "@public/Assets/icon/support.png";

const managedservices = () => {

    return (
        <main>
            <div className={style.heroBgImage}>
                <HeroSection image={managedServices} text={"MANAGED IT SERVICES"} />
            </div>
            <div className="container mx-auto px-4 mt-16">
                <div className="text-2xl text-gray font-semibold mb-8">
                    <p>
                        Feeling Overwhelmed with IT InfrastructureManagement? Thankfully, Managed IT Services offer relief! Let our professionalsmanage it so you can focus on what really matters: your work.
                    </p>
                    <p className="py-6">
                        Imagine this: Our team of IT specialists monitor, maintain, and proactively manage your entire IT environment 24/7/365 -leaving no chance for IT headaches! In addition, predictable monthly fees eliminate surprises related to tech expenses or hidden costs that might pop up later.
                    </p>
                    <p>
                        Increased security: Proactive threat detection and remediation protect your data and systems, increasing productivity by freeing employees to focus on core tasks rather than IT concerns, scaling easily with business growth. And flexibility means your IT infrastructure remains an enabler to success!
                    </p>
                </div>
                <h2 className="text-3xl font-extrabold text-center"><span className="text-blue font-extrabold text-3xl">Our Managed IT Services</span> consist of the following elements</h2>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-6 p-4">
                        <Image
                            src={Converted}
                            alt="email"
                            width={656} height={656}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 p-12 text-left">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={network}
                                        alt="network"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Network Management</h4>
                                <p className="text-lg text-gray">We monitor and ensure optimal network performance and security.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={infrastructure}
                                        alt="infrastructure"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Infrastructure Management</h4>
                                <p className="text-lg text-gray">We maintain servers, desktops, and other devices</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={accessControl}
                                        alt="accessControl"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Security Management</h4>
                                <p className="text-lg text-gray">We defend against cyber threats to secure datasystems and from threats posed by any devices on their network.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-4">
                            <div className="col-span-3">
                                <div className="rounded-full bg-gray flex justify-center align-middle p-12">
                                    <Image
                                        src={support}
                                        alt="support"
                                        className="object-scale-down"
                                    />
                                </div>
                            </div>
                            <div className="col-span-9">
                                <h4 className="text-3xl font-extrabold text-blue">Help Desk Support</h4>
                                <p className="text-lg text-gray">When IT issues arise, our highly experienced ITsupport is there when needed. Patch management keeps software updated andsecure; backup and disaster recovery ensure your data remains safe; andstrategic IT consulting advises businesses on technology investments andstrategy.</p>
                            </div>
                        </div>
                    </div>             
                </div>
                <div className="mb-12">
                    <h2 className="text-3xl text-bule font-extrabold pb-4 text-blue">We offer customized engagement models designed to fit the specific needs, budget, and industry of each of our clients.</h2>
                    <div className="my-4">
                        <h3 className="font-extrabold text-blue text-2xl pb-3">Full-Service Managed IT :</h3>
                        <p className="text-gray text-xl">We take care of it all for you</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-extrabold text-blue text-2xl pb-3">Co-managed IT :</h3>
                        <p className="text-gray text-xl">We work closely with your internal IT team.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-extrabold text-blue text-2xl pb-3">Project-Based Services :</h3>
                        <p className="text-gray text-xl">Our project-based services address specific ITrequirements or challenges.</p>
                    </div>
                    <div className="mb-4 ">
                        <h3 className="font-extrabold text-blue text-2xl">Are you looking forward to experiencing the advantages of managed IT services?</h3>
                        <p className="text-gray text-xl py-3">Reach out now for a complimentary consultation and see how we can assist:</p>
                        <p className="text-gray text-xl">Reduce costs and prevent IT surprises. Stay productive and achieve business objectives more easily. Improve security so your data stays safe from threats. Gain peace of mind knowing your IT is handled by experts; don&apos;t let IT be the focus of your attention; we are here to take control so you can concentrate on what really matters.</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-extrabold text-blue text-2xl">Bonus Tips :</h3>
                        <p className="text-gray text-xl py-3">Cleanly present client testimonials as evidence of satisfaction with your services andcase studies that illustrate their impact. Offer free resources like whitepapers or webinars as additional ways of showing that people want them.</p>
                        <p className="text-gray text-xl">Highlight your team&apos;s skills and certifications to attract potential clients while fulfilling marketing goals. By providing useful information about yourself and highlighting unique value proposition, it will allow your marketing objectives to be accomplished successfully.</p>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default managedservices;

