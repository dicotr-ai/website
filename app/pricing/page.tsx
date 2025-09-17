"use client";

import Header from "@/app/components/pages/header";
import Footer from "@/app/components/pages/footer";
import Button from "../components/pages/button";
import FAQAccordion from "@/app/components/pages/Pricingcomponent/Faq";
import Image from "next/image";

type plan = {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
};

const Pricing = () => {
  const plans: plan[] = [
    {
      id: "1",
      name: "Basic Plan",
      description: "For startups and small businesses",
      price: "₹9,999",
      features: [
        "Custom Content Strategy",
        "5 Content Pieces/Month",
        "Basic SEO Optimization",
        "Monthly Performance Report",
        "Email Support",
      ],
      popular: false,
    },
    {
      id: "2",
      name: "Growth Plan",
      description: "For growing brands & active digital presence",
      price: "₹19,999",
      popular: true,
      features: [
        "Everything in Basic, plus:",
        "12 Content Pieces/Month",
        "Dedicated Content Calendar",
        "Social Media Amplification",
      ],
    },
    {
      id: "3",
      name: "Pro Plan",
      popular: false,
      description: "For brands seeking complete marketing",
      price: "₹29,999",
      features: [
        "Everything in Growth, plus:",
        "20+ Content Pieces/Month",
        "Influencer Marketing Integration",
        "A/B Testing & Analytics",
        "Full Website Audit",
      ],
    },
  ];

  return (
    <>
      <div className="w-full overflow-x-hidden bg-[#FFFFFF] text-black">
        <Header />

        {/* Hero Section */}
        <div className="w-full relative items-center m-auto flex flex-col h-[656px] bg-[#FFFFFF]">
          <div className="w-[1365px] h-[439.25px] text-center top-[144px] left-[119px]">
            <div className="w-[1016px] absolute h-[154px] top-[201px] left-[212px] font-rubik font-semibold text-[64px] leading-[120%]">
              Flexible Pricing Plans for Every Stage of Growth
            </div>
            <div className="w-[775px] h-[66px] absolute top-[385px] left-[333px] font-rubik text-[22px] leading-[150%] ">
              Choose a package that fits your business goals—from startups to
              scaling enterprises, we’ve got you covered.
            </div>
            <div className="w-[412.1px] absolute h-[238.41px] top-[124px] left-[1062.9px] ">
              <Image src="/Vector2.png" alt="" width={412} height={238} />
            </div>
            <div className="left-[1340.28px] top-[190.84px] absolute w-[36.51px] h-[36.51px]">
              <Image src="/Vector.png" alt="" width={37} height={37} />
            </div>
            <div className="left-[1121.99px] top-[295.36px] absolute w-[36.51px] h-[36.51px]">
              <Image src="/Vector.png" alt="" width={37} height={37} />
            </div>
            <div className="left-[1230.33px] top-[312.55px] absolute w-[36.51px] h-[36.51px]">
              <Image src="/Vector.png" alt="" width={37} height={37} />
            </div>
            <div className="left-[1430.97px] top-[190.92px] absolute w-[36.51px] h-[36.51px]">
              <Image src="/Vector.png" alt="" width={37} height={37} />
            </div>
            <div className="w-[414px] absolute h-[135.25px] top-[448px] left-[119px] ">
              <Image src="/group-645.png" alt="" width={414} height={135} />
            </div>
          </div>
          <div className="absolute w-[293px] h-[78px] top-[524px] left-[574px] ">
            <button className="border rounded-[192px] w-[293px] h-[78px] bg-gradient-to-r from-[#D6FF7E] to-[#98AA28] font-rubik text-[#FFFFFF] font-semibold text-[20px] leading-[100%] tracking-[2%]">
              Get Started Today
            </button>
          </div>
        </div>

        {/* Logos */}
        <div className="w-[1440px] justify-around m-auto items-center flex h-[140px] top-[656px] bg-[#F6FBF9]">
          <Image src="/group-519.png" alt="" width={123} height={31} />
          <Image src="/Group 505.png" alt="" width={123} height={31} />
          <Image src="/group-521.png" alt="" width={123} height={31} />
          <Image src="/group-291.png" alt="" width={123} height={31} />
          <Image src="/group-3.png" alt="" width={123} height={31} />
        </div>

        {/* Pricing Plans */}
        <div className="w-full max-w-[1440px] bg-[#FFFFFF] mx-auto py-16 flex flex-col items-center">
          <h1 className="font-rubik font-semibold text-center text-2xl text-[#253D32] mb-12">
            Pricing Plans
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`w-full relative max-w-[350px] h-[550px] flex flex-col gap-4 p-8 rounded-[24px] border ${
                  plan.popular
                    ? "bg-[#A3B938]/70 shadow-[0_0_10px_#A3B938]"
                    : "border-[#E5E7EA] bg-[#FFFFFF]"
                } hover:shadow-xl transition-all`}
              >
                {plan.popular ? (
                  <span className="absolute top-0 py-1 px-1 left-[24px] bg-[#FFFFFF] text-[#3E4148] w-[115px] h-[22px] rounded-br-[5px] rounded-bl-[5px] ">
                    <p className="text-center font-rubik font-[700] text-[14px] leading-[100%]">
                      Most Popular
                    </p>
                  </span>
                ) : null}

                <div className="w-[337px] h-[503px]">
                  <h3 className="text-[32px] md:text-[42px] font-semibold leading-tight text-black">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                  <p className="text-3xl md:text-4xl font-bold mt-6 text-black">
                    {plan.price}
                    <span className="text-lg font-normal">/month</span>
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700 text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {plan.popular ? (
                          <Image
                            src="/checkdark.png"
                            alt="tick"
                            width={25}
                            height={25}
                          />
                        ) : (
                          <Image
                            src="/check-mark.png"
                            alt="tick"
                            width={25}
                            height={25}
                          />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-12 w-[293px] h-[78px]">
                  <button
                    className={`relative w-full h-full rounded-full ${
                      plan.popular
                        ? "bg-[#FFFFFF] text-black"
                        : "bg-gradient-to-tr from-[#98AA28] to-[#D6FF7E] text-white"
                    }
                     shadow-lg border border-white 
                     text-lg font-rubik font-semibold tracking-wider
                     cursor-pointer transition-all duration-300`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Banner */}
        <div className="w-full relative mx-auto flex h-[379px] bg-[#EEFFD2]">
          <div className="w-full h-full flex flex-col">
            <div className="w-[442px] absolute h-[50px] top-[50px] left-[135px] ">
              <p className="font-rubik font-semibold text-[42px] text-[#253D32]">
                Need a Custom Plan?
              </p>
            </div>
            <div className="w-[556px] absolute h-[80px] top-[120px] left-[135px] ">
              <p className="font-rubik text-[22px] leading-[40px] text-black">
                Your business is unique—and so are your needs. Let’s build a
                package just for you.
              </p>
            </div>
            <div className="relative top-[190px] left-[135px] ">
              <Button label="Request Custom Quote" />
            </div>
          </div>
          <div className="w-[392px] h-[393px] absolute right-5 bottom-[-67px] ">
            <Image src="/girlframe.png" alt="" width={392} height={393} />
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full py-12 h-[558px] bg-[#FFFFFF]">
          <p className="font-rubik font-semibold text-[32px] md:text-[42px] text-center mb-10 text-black">
            Frequently Asked Questions
          </p>
          <div className="w-[1180px] h-[568px] mx-auto px-4 flex flex-col gap-[20px]">
            <FAQAccordion />
          </div>
        </div>

        {/* Digital Presence */}
        <div className="w-[1440px] relative mx-auto flex h-[448px] bg-[#FFFFFF]">
          <div className="w-[427px] h-[358px] absolute left-[133px] top-[45px] ">
            <Image src="/table.png" alt="" width={427} height={358} />
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="w-[442px] absolute h-[50px] top-[50px] left-[771px] ">
              <p className="font-rubik font-semibold text-[42px] text-[#253D32]">
                Ready to Grow Your Digital Presence?
              </p>
            </div>
            <div className="w-[556px] absolute h-[80px] top-[180px] left-[771px] ">
              <p className="font-rubik text-[22px] leading-[40px] text-black">
                Join dozens of clients who trust us to create and optimize their
                content marketing.
              </p>
            </div>
            <div className="relative top-[250px] flex gap-2 left-[771px] ">
              <Button label="Get Started" />
              <Button label=" Custom Sales" />
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="relative w-[1170px] h-[542px] mx-auto">
          <Image
            src="/bgpricing.png"
            className="w-full h-full object-cover"
            alt="Background"
            width={1170}
            height={542}
          />
          <Image
            src="/group-581.png"
            className="absolute top-0 left-0 z-10"
            alt="Overlay 1"
            width={200}
            height={200}
          />
          <Image
            src="/group-294.png"
            className="absolute -bottom-7 left-[916.55px] z-20"
            alt="Overlay 2"
            width={200}
            height={200}
          />

          <div className="absolute w-[659px] p-2 text-start h-[110px] left-[165px] z-20 top-24">
            <p className="font-rubik font-semibold text-[32px] leading-[55px] text-white">
              Subscribe to get information, latest <br /> news and other
              interesting offers about
            </p>
            <Image
              src="/group-618.png"
              className="mt-5"
              alt=""
              width={200}
              height={100}
            />
            <div className="input">
              <input
                type="text"
                placeholder="Your email"
                className="w-[372px] h-[68px] bg-[#FFFFFF] text-black rounded-[192px] px-4 border mt-20 placeholder:text-gray-600 placeholder:font-medium placeholder:text-[18px]"
              />
              <div className="p-2 left-[406px] z-20 top-48 absolute">
                <Button label="Subscribe" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer max-w-[1170px] mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Pricing;
