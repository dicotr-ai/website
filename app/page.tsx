"use client";

import type { NextPage } from 'next';
import { useState } from 'react';
import Footer from '@/app/components/pages/footer';
import Header from '@/app/components/pages/header';

// Define the types for the props of the components
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface ProcessStepProps {
  icon: string;
  title: string;
  isActive?: boolean;
  showLine?: boolean; // Add this prop to control line visibility
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="text-left md:text-center">
    <div className="mb-6">
      <img src={icon} alt={`${title} icon`} className="w-12 h-12 mx-auto md:mx-0" />
    </div>
    <h3 className="text-2xl font-medium mb-6 text-[#253d32]">{title}</h3>
    <p className="text-lg leading-relaxed text-[#78847d]">{description}</p>
  </div>
);

// Process Step Component
const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, isActive, showLine }) => (
    <div className="flex flex-col items-center w-60 group">
        {/* The circle container is now a positioning reference */}
        <div className={`w-24 h-24 rounded-full flex justify-center items-center mb-7 bg-white border border-[#a2bdaa] ${isActive ? 'shadow-lg' : ''} relative`}>
            <img src={icon} alt={title} className="w-12 h-12" />

            {/* Conditionally render the SVG line */}
            {showLine && (
                <div className="absolute top-1/2 -translate-y-1/2 left-full w-64" aria-hidden="true">
                    <svg width="100%" height="4.5" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H96 " stroke="#a2bdaa" strokeWidth="1" strokeDasharray="4 4"/>
                    </svg>
                </div>
            )}
        </div>
        <h4 className={`text-xl leading-relaxed text-[#253d32] ${isActive ? 'font-semibold' : 'font-normal'}`}>{title}</h4>
    </div>
);




const Home: NextPage = () => {
    const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="bg-white text-[#253d32] font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[1024px] text-white flex flex-col overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#395c4d] to-[#132d1f] -z-20"></div>
        <img src="/hero1.svg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" /> 
        {/* Background here */}

        <Header/>

       <div className="flex-grow flex items-center justify-center text-center relative">
  <div className="max-w-8xl">
    {/* Heading with SVGs before and after */}
    <div className="flex items-center justify-center gap-4 mb-[-10px]">
      {/* Left SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" className="w-16 h-4 text-[#fff]">
        <path d="M0 5 L100 5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <p className="text-4xl font-medium opacity-80">The Best</p>

      {/* Right SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" className="w-16 h-4 text-[#fff]">
        <path d="M0 5 L100 5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>

    {/* Main Heading */}
    <h1
      className="text-8xl font-semibold leading-tight relative inline-block"
      style={{ fontFamily: 'Rubik, sans-serif' }}
    >
      Digital{" "}
      <span className="relative">
        Marketing
        {/* Squiggly underline */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 30"
          className="absolute left-0 bottom-[-10px] w-full h-6 text-[#a3b938]"
        >
          <path
            d="M0 20 Q25 10 50 20 T100 20 T150 20 T200 20 T250 20 T300 20 T350 20 T400 20 "
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </span>
    </h1>

    {/* Description */}
    <p className="text-xl leading-loose opacity-60 max-w-2xl mx-auto mt-7">
     Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer
    </p>

    {/* Button */}
    <div className="mt-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-16 bg-[#c2e463] blur-2xl opacity-20"></div>
      <a
        href="#"
        className="relative z-10 inline-block px-8 py-4 bg-[#a3b938] text-black rounded-full font-semibold text-lg hover:bg-[#b3c948] transition-colors"
      >
        Explore More
      </a>
    </div>
  </div>
</div>

      </section>

      {/* Partners Section */}
      <section className="py-12 bg-[#f6fbf9]">
        <div className="container mx-auto px-4">
          <div className="flex justify-around items-center flex-wrap gap-10">
            <img src="slack.png" alt="Partner 1" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="amazon.png" alt="Partner 2" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="logi.svg" alt="Partner 3" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="google.svg" alt="Partner 4" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="facebook.svg" alt="Partner 5" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
          <div className="lg:max-w-md">
            <h2 className="text-5xl font-semibold mb-5">We’re Strategic Digital Marketing Agency</h2>
            <p className="text-xl leading-loose text-[#78847d] mb-10">
              We’ve created a full-stack structure for our working workflow processe, were from the funny the century initial all made, have spare to negatives. 
            </p>
            <a href="#" className="inline-flex underline items-center gap-2.5 text-2xl font-medium text-[#a3b938] tracking-wide group">
              See More
              <img src="arrow.svg" alt="arrow" className="w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16">
            <ServiceCard 
                icon="bluebox.svg"
                title="Strategy & Research"
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            />
            <ServiceCard 
                icon="pyramid.svg"
                title="Web Development"
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            />
            <ServiceCard 
                icon="bluecircle.svg"
                title="Web Solution"
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            />
            <ServiceCard 
                icon="cup.svg"
                title="Digital Marketing"
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            />
          </div>
        </div>
      </section>

       {/* Social Reach Section */}
      <section className="py-24">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative w-full max-w-lg aspect-[1.1] mx-auto">
                  {/* Placeholder for complex graphics */}
                  <div className= "rounded-lg flex items-center justify-center">
                    <img src="socialboard.svg" alt="" />
                  </div>
              </div>
              <div className="text-left lg:text-left">
                  <h2 className="text-5xl font-semibold mb-7">Increase Business on Social Media Reach</h2>
                  <p className="text-xl leading-loose text-[#78847d] max-w-md mb-12">
                     Using our network of industry influencers, we help promote your content
                  </p>
                  <a href="#" className="inline-block px-8 py-4 bg-transparent border border-[#a3b938] text-[#a3b938] rounded-full font-semibold text-lg hover:bg-[#a3b938] hover:text-white transition-colors">
                      Get Started
                  </a>
              </div>
          </div>
      </section>

            {/* Process Section */}
      <section className="py-28 bg-[#f6fbf9] text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-semibold mb-7">How Can We Help You?</h2>
            <p className="text-xl leading-loose text-[#78847d] max-w-md mx-auto mb-24">
              Let's do great work together
            </p>
            <div className="flex justify-center flex-wrap gap-24 mb-24">
                <ProcessStep icon="greenpyramid.png" title="Update content my Website" isActive showLine />
                <ProcessStep icon="whitecircle.png" title="Improve User Experience" showLine />
                <ProcessStep icon="whitecircle.png" title="Request Free Website Review" showLine />
                <ProcessStep icon="whitecircle.png" title="Improve your SEO Rankings" />
            </div>
            <a href="#" className="inline-flex underline items-center gap-2.5 text-2xl font-medium text-[#a3b938] tracking-wide group">
                  See More
                  <img src="arrow.svg" alt="arrow" className="w-6 group-hover:translate-x-1 transition-transform" />
              </a>
        </div>
    </section>

    <Footer/>

    </div>
  );
};

export default Home;
