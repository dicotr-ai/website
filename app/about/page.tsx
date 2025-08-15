import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsMegaphone, BsPencilSquare, BsSearch, BsCalendarWeek, BsPeople, BsClipboardData, BsLightbulb, BsFileEarmarkBarGraph, BsShare } from 'react-icons/bs';
import AboutUs from '@/app/components/pages/aboutUs';

const ServiceItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description?: string }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="text-4xl text-lime-500 mb-4">{icon}</div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </div>
);

const page = () => {
    return (
        <div className="bg-white font-sans">
            {/* Header */}
            <header className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    <span className="text-lime-500">We</span>Think
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 hover:text-lime-500">Solutions</a>
                    <a href="#" className="text-gray-600 hover:text-lime-500">Pricing</a>
                    <a href="#" className="text-gray-600 hover:text-lime-500">About</a>
                </nav>
                <a href="#" className="hidden md:block border border-lime-500 text-lime-500 px-6 py-2 rounded-full hover:bg-lime-500 hover:text-white transition-colors">
                    Contact Us
                </a>
            </header>

            {/* Hero section */}
            <AboutUs/>
            {/* Who We Are Section */}
            <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
                 <div>
                    <img src="../Acknowledge-section.svg" alt="Team working at a desk" className="w-full h-auto" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        WeThink is a strategic digital marketing agency focused on helping brands tell their story. From our content strategy to our paid social media to web expertise, we craft end-to-end digital experiences that drive results.
                        With a team of experienced marketers, copywriters, and designers, we are dedicated to our clients' success.
                    </p>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
                    <p className="text-gray-600 mt-2">From foundational to issue-based, we cover all your needs, 24/7.</p>
                    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <ServiceItem icon={<BsMegaphone />} title="Content, Strategy & Marketing" />
                        <ServiceItem icon={<BsPencilSquare />} title="Copywriting & Creative Direction" />
                        <ServiceItem icon={<BsSearch />} title="SEO & Content, Down to a Tee" />
                        <ServiceItem icon={<BsCalendarWeek />} title="Content Calendars & Scheduling" />
                        <ServiceItem icon={<BsPeople />} title="Social Media Optimisation" />
                        <ServiceItem icon={<BsClipboardData />} title="Website Audits & Embedded Content" />
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="bg-lime-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
                    <p className="text-gray-600 mt-2">Seeing our customers succeed is the benchmark that helps promote our commitment.</p>
                     <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceItem icon={<BsLightbulb />} title="Custom Strategies For Every Client" />
                        <ServiceItem icon={<BsFileEarmarkBarGraph />} title="Transparent Reporting & Monthly Updates" />
                        <ServiceItem icon={<BsShare />} title="SEO-first, user-focused Content" />
                    </div>
                </div>
            </section>

            {/* Our Mission & Vision Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                 <h2 className="text-3xl font-bold text-gray-800">Our Mission & Vision</h2>
                 <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    With our network of industry influencers, we help promote your brand.
                 </p>
            </section>

            {/* Let's Do Great Work Together (CTA) Section */}
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Let's Do Great Work Together</h2>
                    <p className="mt-4">Whatever your vision, we're ready to bring it to life. Let's create something impactful.</p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <button className="bg-lime-400 text-white font-bold px-8 py-3 rounded-full hover:bg-lime-500 transition-colors">
                            Contact Us
                        </button>
                        <button className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
                            Request a FREE Website Scan
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-gray-600">
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">maxythinks</h3>
                        <p className="text-sm mb-4">Marketing that delivers. That's our promise. We offer a full suite of services to accelerate digital marketing.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-lime-500"><FaFacebookF /></a>
                            <a href="#" className="text-gray-500 hover:text-lime-500"><FaTwitter /></a>
                            <a href="#" className="text-gray-500 hover:text-lime-500"><FaInstagram /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Menu</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-lime-500">Home</a></li>
                            <li><a href="#" className="hover:text-lime-500">About</a></li>
                            <li><a href="#" className="hover:text-lime-500">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
                         <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-lime-500">Content Strategy</a></li>
                            <li><a href="#" className="hover:text-lime-500">Creative Direction</a></li>
                            <li><a href="#" className="hover:text-lime-500">Social Media</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
                         <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-lime-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-lime-500">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-lime-500">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} maxythinks. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default page;