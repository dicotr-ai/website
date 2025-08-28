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
const Footer = () => {
    return (


        <>
            {/* Footer Section */}
            <footer className="bg-[#fff] text-[#78847D] pt-24 pb-12">
                <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <img src="darklogo.png" alt="Logo" className="w-8 h-8" />
                            <span className="text-2xl text-[#253D32] font-semibold">markethink</span>
                        </a>
                        <p className="text-lg leading-relaxed opacity-70 mb-8 max-w-sm">
                            Marketing is a company that focus on developing company’s strategy for increase digital marketing
                        </p>
                        <div className="flex gap-4">
                            <a href="#"><img src="facebook.svg" alt="Facebook" /></a>
                            <a href="#"><img src="twitter.svg" alt="Twitter" /></a>
                            <a href="#"><img src="insta.svg" alt="Instagram" /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl text-[#253D32] font-bold mb-6">Menu</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="opacity-70 hover:opacity-100">Home</a></li>
                            <li><a href="#services" className="opacity-70 hover:opacity-100">Features</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Pricing About</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl text-[#253D32] font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="opacity-70 hover:opacity-100">Content Strategy</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Content Development</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Content Creation</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Content Optimization</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl text-[#253D32] font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="opacity-70 hover:opacity-100">Site Map</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Terms of Use</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Privacy Notice</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Cookies</a></li>
                            <li><a href="#" className="opacity-70 hover:opacity-100">Modern Slavery</a></li>
                        </ul>
                    </div>
                </div>


                <div className="container mx-auto px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-[1px] text-gray-300"
                        viewBox="0 0 100 1"
                        preserveAspectRatio="none"
                    >
                        <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>



                <div className="container mx-auto px-4 text-center border-t border-white/20 pt-8">
                    <p className="opacity-70">
                        © Copyright 2023 All Rights Reserved.
                    </p>
                </div>
            </footer>
        </>
    )

}
const Header = () => (
    <header className=" top-0 left-0 w-full py-10 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="#" className="flex items-center gap-2">
                <img src="/darklogo.png" alt="Logo" className="w-8 h-8" />
                <span className="text-2xl font-semibold">WeThink</span>
            </Link>

            <nav className="hidden lg:block">
                <ul className="flex gap-12">
                    <Link href="#services">Features</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="#about">About</Link>
                </ul>
            </nav>

            <Link
                href="#contact"
                className="hidden lg:inline-block text-base font-medium px-7 py-4 border border-[#000000] w-[140px] h-[55px] top-[40px] left-[1165px] rounded-[116px] "
            >
                Contact Us
            </Link>

            <button className="lg:hidden bg-none border-none text-white text-3xl cursor-pointer">
                ☰
            </button>
        </div>
    </header>

);
type plan = {
    id:string,
    name: string,
    description: string,
    price: string,
    features: string[],
    popular:boolean


}
const Pricing = () => {
    const plans: plan[] = [
        {
            id:'1',
            name: "Basic Plan",
            description: "For startups and small businesses",
            price: "₹9,999",
            features: ["Custom Content Strategy", "5 Content Pieces/Month", "Basic SEO Optimization", "Monthly Performance Report", "Email Support"],
            popular:false
        },
        {
            id:'2',
            name: "Basic Plan",
            description: "For growing brands & active digital presence",
            price: "₹19,999",
            popular:true,
           
            features: ["Everything in Basic, plus:", "12 Content Pieces/Month", "Dedicated Content Calendar", "Dedicated Content Calendar", "Social Media Amplification"]
        },
        {
            id:'3',
            name: "Pro Plan",
            popular:false,
            description: "For brands seeking complete marketing",
            price: "₹29,999",
            features: ["Everything in Growth, plus:", "20+ Content Pieces/Month", "Influencer Marketing Integration", "A/B Testing & Analytics", "Full Website Audi"]
        }

    ]
    return (
        <>
            <div className=" w-[1440px]  relative items-center m-auto flex flex-col h-[656px] bg-[#FFFFFF]">
                <div className="w-[1170px] h-[55px] top-[40px] left-[135px]  ">
                    <Header />
                </div>
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
        className={`w-full max-w-[350px] h-[550px] flex flex-col gap-4 p-8 rounded-[24px] border ${
          plan.popular
            ? "bg-[#A3B938B2] shadow-[0_0_10px_#A3B938]"
            : "border-[#E5E7EA]"
        } hover:shadow-xl transition-all`}
      >
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
      <img src="/Check Mark.png" alt="tick" className="w-[25px] h-[25px]" />
      <span>{feature}</span>
    </li>
  ))}
</ul>
       </div>
 <div className="mt-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-16 bg-[#c2e463] blur-2xl opacity-20"></div>
      <a
        href="#"
        className="relative z-10 inline-block px-8 py-4 bg-[#a3b938] text-black rounded-full font-semibold text-lg hover:bg-[#b3c948] transition-colors"
      >
      Choose Plan
      </a>
    </div>

     
     

      </div>
    ))}
  </div>
</div>



                <Footer/>
         
        </>
    )
}

export default Pricing;





