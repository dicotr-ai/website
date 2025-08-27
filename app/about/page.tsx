"use client";

import React from 'react';
import Hero from '@/app/components/pages/hero'
import Acknowlegde from '../components/pages/acknowlegde';
import MissionAndVision from '@/app/components/pages/missionAndVision';
import Footer from '@/app/components/pages/footer';
import CallToAction from '@/app/components/pages/callToAction';
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
            <MissionAndVision/>

            {/* Let's Do Great Work Together (CTA) Section */}
            <CallToAction/>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default page;