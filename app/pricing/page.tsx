"use client";

// import type { NextPage } from 'next';
// import { useState } from 'react';
// import Footer from '@/app/components/pages/footer';
// import Header from '@/app/components/pages/header';

// interface PricingTier {
//   name: string;
//   price: {
//     monthly: string;
//     annually: string;
//   };
//   description: string;
//   features: string[];
//   isPopular?: boolean;
//   ctaText: string;
// }

// const Pricing: NextPage = () => {
//   const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

//   const pricingTiers: PricingTier[] = [
//     {
//       name: "Basic",
//       price: {
//         monthly: "$29",
//         annually: "$290"
//       },
//       description: "Perfect for small businesses getting started",
//       features: [
//         "Up to 5 social media accounts",
//         "Basic analytics dashboard",
//         "Email support",
//         "Content calendar",
//         "1 user included"
//       ],
//       ctaText: "Get Started"
//     },
//     {
//       name: "Pro",
//       price: {
//         monthly: "$79",
//         annually: "$790"
//       },
//       description: "Ideal for growing businesses",
//       features: [
//         "Up to 15 social media accounts",
//         "Advanced analytics & reporting",
//         "Priority email & chat support",
//         "Content scheduling",
//         "Competitor analysis",
//         "5 users included",
//         "Custom branding"
//       ],
//       isPopular: true,
//       ctaText: "Start Free Trial"
//     },
//     {
//       name: "Enterprise",
//       price: {
//         monthly: "$199",
//         annually: "$1990"
//       },
//       description: "For large organizations with complex needs",
//       features: [
//         "Unlimited social media accounts",
//         "Custom analytics dashboard",
//         "24/7 phone & chat support",
//         "Advanced AI content generation",
//         "Dedicated account manager",
//         "Unlimited users",
//         "API access",
//         "Custom integrations",
//         "White-label options"
//       ],
//       ctaText: "Contact Sales"
//     }
//   ];

//   const toggleBillingCycle = () => {
//     setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly');
//   };

//   return (
//     <div className="bg-white text-[#253d32] font-sans min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-[#f6fbf9] to-[#e8f5f0]">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl md:text-6xl font-semibold mb-6">
//             Simple, Transparent Pricing
//           </h1>
//           <p className="text-xl text-[#78847d] max-w-2xl mx-auto mb-8">
//             Choose the plan that works best for your business. All plans include our core features with no hidden fees.
//           </p>

//           {/* Billing Toggle */}
//           <div className="flex items-center justify-center gap-4 mb-12">
//             <span className={`text-lg ${billingCycle === 'monthly' ? 'text-[#253d32] font-medium' : 'text-[#78847d]'}`}>
//               Monthly
//             </span>
//             <button
//               onClick={toggleBillingCycle}
//               className="relative w-14 h-7 bg-[#a3b938] rounded-full transition-colors"
//             >
//               <div
//                 className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
//                   billingCycle === 'annually' ? 'translate-x-7' : ''
//                 }`}
//               />
//             </button>
//             <span className={`text-lg ${billingCycle === 'annually' ? 'text-[#253d32] font-medium' : 'text-[#78847d]'}`}>
//               Annually
//             </span>
//             <span className="px-3 py-1 bg-[#a3b938]/20 text-[#a3b938] text-sm font-medium rounded-full">
//               Save 20%
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Cards */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {pricingTiers.map((tier, index) => (
//               <div
//                 key={tier.name}
//                 className={`relative p-8 rounded-2xl border ${
//                   tier.isPopular
//                     ? 'border-[#a3b938] shadow-xl transform scale-105'
//                     : 'border-[#a2bdaa]'
//                 } bg-white transition-all hover:shadow-lg`}
//               >
//                 {tier.isPopular && (
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                     <span className="px-4 py-1 bg-[#a3b938] text-white text-sm font-medium rounded-full">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold">
//                       {billingCycle === 'monthly' ? tier.price.monthly : tier.price.annually}
//                     </span>
//                     <span className="text-[#78847d]">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
//                   </div>
//                   <p className="text-[#78847d]">{tier.description}</p>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {tier.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center">
//                       <svg
//                         className="w-5 h-5 text-[#a3b938] mr-3 flex-shrink-0"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       <span className="text-[#253d32]">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   className={`w-full py-4 rounded-full font-semibold text-lg transition-colors ${
//                     tier.isPopular
//                       ? 'bg-[#a3b938] text-white hover:bg-[#8aa22f]'
//                       : 'bg-transparent border border-[#a3b938] text-[#a3b938] hover:bg-[#a3b938] hover:text-white'
//                   }`}
//                 >
//                   {tier.ctaText}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-[#f6fbf9]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-semibold mb-6">Frequently Asked Questions</h2>
//             <p className="text-xl text-[#78847d] max-w-2xl mx-auto">
//               Everything you need to know about our pricing and plans
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Can I change plans anytime?</h3>
//               <p className="text-[#78847d]">
//                 Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Is there a free trial?</h3>
//               <p className="text-[#78847d]">
//                 Yes! Our Pro plan includes a 14-day free trial with full access to all features.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">What payment methods do you accept?</h3>
//               <p className="text-[#78847d]">
//                 We accept all major credit cards, PayPal, and bank transfers for annual plans.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Do you offer discounts for nonprofits?</h3>
//               <p className="text-[#78847d]">
//                 Yes, we offer special pricing for registered nonprofit organizations. Contact us for details.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-semibold mb-6">Ready to Get Started?</h2>
//           <p className="text-xl text-[#78847d] mb-8 max-w-2xl mx-auto">
//             Join thousands of businesses that trust us with their digital marketing needs
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-[#a3b938] text-white rounded-full font-semibold text-lg hover:bg-[#8aa22f] transition-colors">
//               Start Free Trial
//             </button>
//             <button className="px-8 py-4 bg-transparent border border-[#a3b938] text-[#a3b938] rounded-full font-semibold text-lg hover:bg-[#a3b938] hover:text-white transition-colors">
//               Schedule a Demo
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Pricing;

import Link from "next/link";
import Header from "@/app/components/pages/header";
import Footer from "@/app/components/pages/footer";
import Button from "../components/pages/button";
import { useState } from "react";
import FAQAccordion from "@/app/components/pages/Pricingcomponent/Faq";
type plan = {
  id: string,
  name: string,
  description: string,
  price: string,
  features: string[],
  popular: boolean;


}
const Pricing = () => {
  const plans: plan[] = [
    {
      id: '1',
      name: "Basic Plan",
      description: "For startups and small businesses",
      price: "₹9,999",
      features: ["Custom Content Strategy", "5 Content Pieces/Month", "Basic SEO Optimization", "Monthly Performance Report", "Email Support"],
      popular: false
    },
    {
      id: '2',
      name: "Basic Plan",
      description: "For growing brands & active digital presence",
      price: "₹19,999",
      popular: true,

      features: ["Everything in Basic, plus:", "12 Content Pieces/Month", "Dedicated Content Calendar", "Dedicated Content Calendar", "Social Media Amplification"]
    },
    {
      id: '3',
      name: "Pro Plan",
      popular: false,
      description: "For brands seeking complete marketing",
      price: "₹29,999",
      features: ["Everything in Growth, plus:", "20+ Content Pieces/Month", "Influencer Marketing Integration", "A/B Testing & Analytics", "Full Website Audi"]
    }

  ]
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Header />
      <div className=" w-full  relative items-center m-auto flex flex-col h-[656px] bg-[#FFFFFF]">
        <div className="w-[1365px] h-[439.25px] text-center  top-[144px] left-[119px]">
          <div className="w-[1016px]  absolute  h-[154px] top-[201px] left-[212px] font-rubik font-semibold text-[64px] leading-[120%]  ">

            Flexible Pricing Plans for Every Stage of Growth

          </div>
          <div className="w-[775px] h-[66px]  absolute    top-[385px] left-[333px] font-rubik  text-[22px] leading-[150%]  ">

            Choose a package that fits your business goals—from startups to scaling enterprises, we’ve got you covered.
          </div>
          <div className="w-[412.1px]  absolute h-[238.41px] top-[144px] left-[1062.9px] ">
            <img src="/Vector2.png" />                    </div>
          <div className="left-[1312.28px] top-[203.84px] absolute  w-[36.51px] h-[36.51px]">
            <img src="/Vector.png" />
          </div>
          <div className="left-[1111.99px] top-[300.36px] absolute  w-[36.51px] h-[36.51px]">
            <img src="/Vector.png" />
          </div>
          <div className="left-[1216.33px] top-[318.55px] absolute  w-[36.51px] h-[36.51px]">
            <img src="/Vector.png" />

          </div>
          <div className="left-[1397.97px] top-[204.92px] absolute  w-[36.51px] h-[36.51px]">
            <img src="/Vector.png" />
          </div>


          <div className="w-[414px]  absolute h-[135.25px] top-[448px] left-[119px] ">
            <img src="/Group 645.png" />

          </div>


        </div>
        <div className="absolute w-[293px] h-[78px] top-[524px] left-[574px] ">
          <button className=" border rounded-[192px] w-[293px] h-[78px] bg-gradient-to-r from-[#D6FF7E] to-[#98AA28] font-rubik text-[#FFFFFF] font-semibold text-[20px] leading-[100%] tracking-[2%]">
            Get Started Today
          </button>
        </div>
      </div>
      <div className="w-[1440px] justify-around m-auto items-center flex h-[140px] top-[656px] bg-[#F6FBF9]">
        <div className="w-[123px]  h-[31.12px]">
          <img src="/Group 519.png" />
        </div>
        <div className="w-[123px] h-[31.12px]">
          <img src="/Group 505.png" />
        </div>
        <div className="w-[123px] h-[31.12px]">
          <img src="/Group 521.png" />
        </div>

        <div className="w-[123px] h-[31.12px]">
          <img src="/Group 291.png" />
        </div>
        <div className="w-[123px] h-[31.12px]">
          <img src="/Group (3).png" />
        </div>

      </div>

      {/* pricing plans */}
      {/* pricing plans */}
      <div className="w-full max-w-[1440px] bg-[#FFFFF] mx-auto py-16 flex flex-col items-center">
        <h1 className="font-rubik font-semibold text-center text-2xl text-[#253D32] mb-12">
          Pricing Plans
        </h1>

        {/* Grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`w-full relative max-w-[350px] h-[550px] flex flex-col gap-4 p-8 rounded-[24px] border ${plan.popular
                ? "bg-[#A3B938B2] shadow-[0_0_10px_#A3B938]"
                : "border-[#E5E7EA]"
                } hover:shadow-xl transition-all`}
            >
              {plan.popular ? (<span className="absolute top-0 py-1 px-1  left-[24px]  bg-[#FFFFFF] text-[#3E4148] w-[115px] h-[22px] rounded-br-[5px] rounded-bl-[5px] ">
                <p className="w-[93px]  h-[16px] top-[3px] left-[11px] text-center font-rubik font-[700] text-[14px] leading-[100%] tracking-[0%]"> Most Popular</p>
              </span>) : null}
              <div className="w-[337px] h-[503px]">
                <h3 className="text-[32px] md:text-[42px] font-semibold leading-tight">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>

                <p className="text-3xl md:text-4xl font-bold mt-6">
                  {plan.price}
                  <span className="text-lg font-normal">/month</span>
                </p>
                <ul className="mt-6 space-y-3 text-gray-700 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {plan.popular ? (<img src="/checkdark.png" alt="tick" className="w-[25px] h-[25px]" />) : <img src="/Check Mark.png" alt="tick" className="w-[25px] h-[25px]" />}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="relative mt-12 w-[293px] h-[78px]">
                <button
                  className={`relative w-full h-full rounded-full  ${plan.popular ? 'text-black' : 'text-white'}
        ${plan.popular ? 'bg-[#fffffff1]' : 'bg-gradient-to-tr from-[#98AA28] to-[#D6FF7E] '}
                 
                   shadow-lg border border-white 
                   text-lg font-rubik font-semibold tracking-wider
                   cursor-pointer transition-all duration-300
                   hover:from-[#7a8b20] hover:to-[#b5e85f]`}
                >
                  Choose Plan

                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/*custom banner*/}
      <div className="w-full relative   mx-auto flex  h-[379px]  bg-[#EEFFD280]">
        <div className="w-full h-full flex flex-col">
          {/* //banner */}
          <div className="w-[442px] absolute h-[50px] top-[50px] left-[135px] ">
            <p className="font-rubik font-semibold text-[42px] leading-[100%] text-[#253D32]">
              Need a Custom Plan?
            </p>
          </div>
          <div className="w-[556px] absolute h-[80px] top-[120px] left-[135px] ">
            <p className="font-rubik  text-[22px] leading-[40px] ">
              Your business is unique—and so are your needs. Let’s build a package just for you.

            </p>
          </div>
          <div className=" relative top-[190px] left-[135px] ">
            <Button label="Request Custom Quote" />



          </div>
        </div>
        {/* //image */}
        <div className="w-[392px] h-[393px] absolute right-5 bottom-[-67px] ">
          <img src="/girlframe.png" alt="" />
        </div>

      </div>

      {/* faq */}
     <div className="w-full py-12  h-[558px] bg-[#FFFFFF] top-[1878px] ">
  <p className="font-rubik font-semibold text-[32px] md:text-[42px] leading-tight text-center mb-10">
    Frequently Asked Questions
  </p>

  <div className="w-[1180px]   h-[568px] mx-auto px-4 flex flex-col gap-[20px]">
    <FAQAccordion />
  </div>
</div>



      {/* //Digital presence */}
      <div className="w-[1440px] relative    mx-auto flex  h-[448px]  left-[-2px]  bg-[#FFFFFF]">
        {/* //image */}
        <div className="w-[427px] h-[358px] absolute left-[133px] top-[45px] ">
          <img src="/table.png" alt="" />
        </div>

        <div className="w-full h-full flex flex-col">
          {/* //banner */}
          <div className="w-[442px] absolute h-[50px] top-[50px] left-[771px] ">
            <p className="font-rubik font-semibold text-[42px] leading-[100%] text-[#253D32]">
              Ready to Grow Your Digital Presence?
            </p>
          </div>
          <div className="w-[556px] absolute h-[80px] top-[180px] left-[771px] ">
            <p className="font-rubik  text-[22px] leading-[40px] ">
              Join dozens of clients who trust us to create and optimize their content marketing.
            </p>
          </div>
          <div className=" relative top-[250px] flex gap-2 left-[771px] ">
            <Button label="Get Started" />
           <Button label=" Custom Sales" />


          </div>
        </div>


      </div>


<div className="relative w-[1170px] h-[542px] mx-auto">
  {/* Background image */}
  <img
    src="/bgpricing.png"
    className="w-full h-full object-cover"
    alt="Background"
  />

  {/* Overlay images */}
  <img
    src="/Group 581.png"
    className="absolute top-0 left-0 z-10"
    alt="Overlay 1"
  />
  <img
    src="/Group 294.png"
    className="absolute -bottom-7  left-[916.55px] z-20"
    alt="Overlay 2"
  />
  <div className="text absolute w-[659px]  p-2 text-start h-[110px] left-[165px] z-20 top-24">
    <p className="font-rubik font-semibold text-[32px] tracking-1p leading-[55px]  text-white ">
      Subscribe to get information, latest <br /> news and other interesting offers about
    </p>
    <img src="/Group 618.png" className="mt-5" alt="" />
    <div className="input">
  <input
    type="text"
    placeholder="Your email"
    className="w-[372px] h-[68px] bg-white rounded-[192px] text-start pl-4 border mt-20 
               placeholder:text-black placeholder:font-medium placeholder:tracking-[0.02em] 
               placeholder:text-[18px]"
  />
  <div className="  p-2  left-[406px] z-20 top-48 absolute">
    <Button label="Subscribe" />
  </div>
</div>

  </div>
</div>


<div className="footer max-w-[1170px] mx-auto">
  <Footer/>
  
</div>

      </div>
    </>

  )
}

export default Pricing;





