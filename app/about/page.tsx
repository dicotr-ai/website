"use client";

import React from "react";
import Hero from "@/app/components/pages/hero";
import Acknowlegde from "@/app/components/pages/acknowlegde";
import MissionAndVision from "@/app/components/pages/missionAndVision";
import Footer from "@/app/components/pages/footer";
import CallToAction from "@/app/components/pages/callToAction";
import Header from "@/app/components/pages/header";
import OurWork from "@/app/components/pages/ourWork";
import WhyToChooseUs from "@/app/components/pages/whyToChooseUs";

const AboutPage = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header */}
      <Header />

      <main className="flex flex-col gap-24">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Who We Are Section */}
        <section id="about">
          <Acknowlegde />
        </section>

        {/* What We Do Section */}
        <section id="work">
          <OurWork />
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us">
          <WhyToChooseUs />
        </section>

        {/* Our Mission & Vision Section */}
        <section id="mission-vision">
          <MissionAndVision />
        </section>

        {/* Let's Do Great Work Together (CTA) Section */}
        <section id="cta">
          <CallToAction />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
