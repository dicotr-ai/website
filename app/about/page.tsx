"use client";

import React from 'react';
import { BsMegaphone, BsPencilSquare, BsSearch, BsCalendarWeek, BsPeople, BsClipboardData, BsLightbulb, BsFileEarmarkBarGraph, BsShare } from 'react-icons/bs';
import Hero from '@/app/components/pages/hero'
import Acknowlegde from '../components/pages/acknowlegde';
import Mission_vision from '@/app/components/pages/mission_vision';
import Footer from '@/app/components/pages/footer';
import ConnectClient from '@/app/components/pages/connectClient';
import Header from '@/app/components/pages/header'
import OurWork from '@/app/components/pages/ourWork'

const ServiceItem = ({ image, title, description }: { image: string, title: string, description?: string }) => (
    <div className="flex flex-col items-center text-center p-4">
        <img src={image} alt={title} className="w-8 h-8 mb-4 object-contain" />
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </div>
);

const page = () => {
    return (
        <div className="bg-white font-sans">
            {/* Header */}
            <Header/>

            {/* Hero section */}
            <Hero/>

            {/* Who We Are Section */}
            <Acknowlegde/>

            {/* What We Do Section */}
            <OurWork/>
            
            {/* Why Choose Us Section */}
            <section className="bg-lime-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
                    <p className="text-gray-600 mt-2">Seeing our customers succeed is the benchmark that helps promote our commitment.</p>
                     <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        {/* <ServiceItem icon={<BsLightbulb />} title="Custom Strategies For Every Client" /> */}
                        {/* <ServiceItem icon={<BsFileEarmarkBarGraph />} title="Transparent Reporting & Monthly Updates" /> */}
                        {/* <ServiceItem icon={<BsShare />} title="SEO-first, user-focused Content" /> */}
                    </div>
                </div>
            </section>

            {/* Our Mission & Vision Section */}
            <Mission_vision/>

            {/* Let's Do Great Work Together (CTA) Section */}
            <ConnectClient/>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default page;