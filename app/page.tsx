"use client";

import type { NextPage } from 'next';
import { useState } from 'react';

// Define the types for the props of the components
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

// Navigation Link Component
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <li>
    <a href={href} className="text-base text-white opacity-90 hover:opacity-100 hover:underline transition-opacity">
      {children}
    </a>
  </li>
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

        <header className="absolute top-0 left-0 w-full py-10 z-10">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a href="#" className="flex items-center gap-2">
              <img src="logo.svg" alt="Logo" className="w-8 h-8" /> 
              {/* logo here */}
              <span className="text-2xl font-semibold">DiCoTr</span>
            </a>
            <nav className="hidden lg:block">
              <ul className="flex gap-12">
                <NavLink href="#services">Features</NavLink>
                <NavLink href="#">Pricing</NavLink>
                <NavLink href="#">About</NavLink>
              </ul>
            </nav>
            <a href="#" className="hidden lg:inline-block text-base font-medium px-7 py-4 bg-white/10 border border-white/40 rounded-full hover:bg-white/20 transition-colors">
              Contact Us
            </a>
            <button className="lg:hidden bg-none border-none text-white text-3xl cursor-pointer">
              ☰
            </button>
          </div>
        </header>

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

    </div>
  );
};

export default Home;
