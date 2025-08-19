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
import WhyToChooseUs from '@/app/components/pages/whyToChooseUs'

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
            <WhyToChooseUs/>

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