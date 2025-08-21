import type { NextPage } from 'next';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram
} from 'react-icons/fa';
import Header from '@/app/components/pages/header';

/* ===============================
   Reusable Button Component
================================ */
const Button = ({
  children,
  primary = false,
  className = ''
}: { 
  children: React.ReactNode, 
  primary?: boolean, 
  className?: string 
}) => {
  const baseClasses = 'px-6 py-3 rounded-full font-semibold';
  const primaryClasses = 'bg-green-500 text-white hover:bg-green-600';
  const secondaryClasses = 'bg-white text-green-500 border border-green-500 hover:bg-gray-100';

  return (
    <button className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}>
      {children}
    </button>
  );
};


/* ===============================
   Header Component
================================ */
// const Header = () => (
//   <header className="container mx-auto flex justify-between items-center py-4 px-6 bg-white">
//     <div className="flex items-center space-x-2">
//       <img src="/Category.svg" alt="WeThink Logo" className="h-8 w-auto" />
//       <div className="text-2xl font-bold text-gray-800">WeThink</div>
//     </div>

//     <nav className="hidden md:flex items-center space-x-8">
//       <a href="#" className="text-gray-600 hover:text-green-500">Home</a>
//       <a href="#" className="text-gray-600 hover:text-green-500">About</a>
//       <a href="#" className="text-gray-600 hover:text-green-500">Services</a>
//     </nav>

//     <Button className="rounded-full border-black !text-black px-6 py-2">
//       Contact Us
//     </Button>
//   </header>
// );


/* ===============================
   Hero Section Component
================================ */
const Hero = () => (
  <section className="container mx-auto flex flex-col md:flex-row items-center py-12 md:py-24 px-6">
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
        Features that<br />
        Drive Digital<br />
        Success
      </h1>
      <p className="text-gray-600 mb-8">
        Strategic, scalable, and built for growth—explore how<br />
        our services empower your brand in the digital world.
      </p>
      <Button className="!bg-[#D6FF7E] !text-black rounded-full px-6 py-2 hover:!bg-[#8AA28F]">
        Get Started Today
      </Button>
    </div>

    <div className="md:w-1/2 flex justify-center">
      <img src="Image.svg" alt="Woman with digital assets" className="w-full max-w-md" />
    </div>
  </section>
);


/* ===============================
   Feature Item Component
================================ */
const FeatureItem = ({
  icon,
  title,
  text,
  reverse = false
}: { 
  icon: React.ReactNode, 
  title: string, 
  text: string, 
  reverse?: boolean 
}) => (
  <div className={`flex flex-col md:flex-row items-center justify-between my-16 gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    
    {/* Icon + Text */}
    <div className="md:w-2/5 text-center md:text-left">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-purple-500 bg-purple-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{text}</p>
      <a href="#" className="font-semibold text-green-500 hover:underline">
        See More &rarr;
      </a>
    </div>

    {/* Illustration placeholder (can be replaced with actual images later) */}
    <div className="md:w-2/5 flex justify-center">
      <img src="https://via.placeholder.com/300x200" alt={title} className="rounded-xl shadow-md" />
    </div>
  </div>
);


/* ===============================
   Content Section (Alternating)
================================ */
const ContentSection = () => {
  const features = [
    {
      icon: <img src="Group 542.svg" alt="Content Strategy" className="w-8 h-8" />,
      title: "Content Strategy",
      text: "We create a custom strategy for your brand across every platform using data-driven industry insights. Every visual touchpoint can be an opportunity for engagement and growth."
    },
    {
      icon: <img src="Group 555.svg" alt="Content Development" className="w-8 h-8" />,
      title: "Content Development",
      text: "We create concepts driving the story forward. Creativity meets strategy as we develop concepts you'll be proud to share. Every detail is crafted with purpose and aligned with your goals."
    },
    {
      icon: <img src="Group 556.svg" alt="Content Creation" className="w-8 h-8" />,
      title: "Content Creation",
      text: "We create a custom strategy for your brand across every platform using a data-driven industry insights. Every visual touchpoint can be an opportunity for engagement and growth."
    },
    {
      icon: <img src="Group 554.svg" alt="Content Storytelling" className="w-8 h-8" />,
      title: "Content Storytelling",
      text: "We craft a compelling story for your brand to drive results. Our content is tailored to your target audience to maximize engagement and build brand loyalty."
    }
  ];

  return (
    <section className="container mx-auto py-16 px-6">
      {features.map((feature, index) => (
        <FeatureItem 
          key={index} 
          {...feature} 
          reverse={index % 2 !== 0}   // 👈 Alternates layout
        />
      ))}
    </section>
  );
};


/* ===============================
   Social Media Section
================================ */
const SocialSection = () => (
  <section className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6">
    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 ml-6">
        Social Media <br /> Amplification
      </h2>
      <p className="text-gray-600 ml-6">
        Leverage our industry influencer network to increase content visibility and drive audience engagement. We help you grow where it matters—organically and strategically.
      </p>
    </div>

    <div className="md:w-1/2 flex justify-center">
      <img src="../OBJECTS.svg" alt="Team working on social media campaign" className="w-full max-w-lg" />
    </div>
  </section>
);


/* ===============================
   Need Help Section
================================ */
const NeedHelpSection = () => (
  <section className="bg-gray-50 py-20 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left ml-6">
        Need Help With Your <br /> Website ?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-left ml-6">
        Leverage our industry influencer network to increase <br />
        content visibility and drive audience engagement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center">
          <img src="Delivery Time.svg" alt="Update Content" className="w-12 h-12 mb-4" />
          <h4 className="font-semibold text-gray-800 mb-2">Update your website content</h4>
        </div>
        <div className="flex flex-col items-center">
          <img src="Navigation.svg" alt="Improve User Experience" className="w-12 h-12 mb-4" />
          <h4 className="font-semibold text-gray-800 mb-2">Improve your user experience</h4>
        </div>
        <div className="flex flex-col items-center">
          <img src="Silver Medal.svg" alt="SEO Optimization" className="w-12 h-12 mb-4" />
          <h4 className="font-semibold text-gray-800 mb-2">Optimize for better SEO rankings</h4>
        </div>
      </div>

      <Button className="!bg-gradient-to-r from-green-400 to-green-600 !text-white rounded-full px-8 py-3">
        Request Free Website Review
      </Button>
    </div>
  </section>
);


/* ===============================
   Contact Section
================================ */
const ContactSection = () => (
  <section className="bg-gray-800 text-white py-20 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
      <p className="max-w-xl mx-auto mb-8">
        Whether you're launching or scaling, we're ready to support 
        your journey with a full-stack digital marketing framework.
      </p>
      <div className="space-x-4">
        <Button primary>Contact Us</Button>
        <Button>Subscribe for Insights</Button>
      </div>
    </div>
  </section>
);


/* ===============================
   Footer Component
================================ */
const Footer = () => (
  <footer className="bg-white text-gray-600 py-16 px-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="md:col-span-2">
        <h3 className="text-xl font-bold text-gray-800 mb-4">SkyTrust</h3>
        <p className="mb-4">
          A team of strategists, designers, and developers that love building digital products.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-green-500"><FaTwitter /></a>
          <a href="#" className="hover:text-green-500"><FaInstagram /></a>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Menu</h4>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Home</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">About</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Services</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Content Strategy</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Content Development</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Content Creation</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Contact Us</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Careers</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-200">
      © 2025 SkyTrust. All Rights Reserved.
    </div>
  </footer>
);


/* ===============================
   Main Page Component
================================ */
const Page: NextPage = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <ContentSection />
        <SocialSection />
        <NeedHelpSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
