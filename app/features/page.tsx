import type { NextPage } from 'next';
import { FiClock, FiUsers, FiCheckSquare } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLightbulb, FaPencilRuler, FaBullhorn, FaChartLine } from 'react-icons/fa';

// A generic button component for reusability
const Button = ({ children, primary = false, className = '' }: { children: React.ReactNode, primary?: boolean, className?: string }) => {
  const baseClasses = 'px-6 py-3 rounded-md font-semibold';
  const primaryClasses = 'bg-green-500 text-white hover:bg-green-600';
  const secondaryClasses = 'bg-white text-green-500 border border-green-500 hover:bg-gray-100';
  
  return (
    <button className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}>
      {children}
    </button>
  );
};

// Header Component
const Header = () => (
  <header className="container mx-auto flex justify-between items-center py-4 px-6 bg-white">
    <div className="text-2xl font-bold text-gray-800">WeThink</div>
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-600 hover:text-green-500">Home</a>
      <a href="#" className="text-gray-600 hover:text-green-500">About</a>
      <a href="#" className="text-gray-600 hover:text-green-500">Services</a>
      
    </nav>
    <Button>Contact Us</Button>
  </header>
);

// Hero Section Component
const Hero = () => (
  <section className="container mx-auto flex flex-col md:flex-row items-center py-12 md:py-24 px-6">
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
        Features that Drive Digital Success
      </h1>
      <p className="text-gray-600 mb-8">
        Strategic, creative, and built for growth—we blend keen insights with technical expertise to drive digital success.
      </p>
      <Button primary>Get Started Now</Button>
    </div>
    <div className="md:w-1/2 flex justify-center">
      {/* Placeholder for the hero image */}
      <img
    src="/Image.svg"
    alt="Woman with digital assets"
    className="w-full max-w-md"
  />

    </div>
  </section>
);

// Individual Feature Item Component
const FeatureItem = ({ icon, title, text, reverse = false }: { icon: React.ReactNode, title: string, text: string, reverse?: boolean }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between my-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
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
    {/* Placeholder for the decorative lines/connections. In a real app, this would be an SVG. */}
  </div>
);

// Content/Features Section Component
const ContentSection = () => {
    const features = [
        {
            icon: <FaLightbulb size={28} />,
            title: "Content Strategy",
            text: "We create a custom strategy for your brand across every platform using data-driven industry insights. Every visual touchpoint can be an opportunity for engagement and growth."
        },
        {
            icon: <FaPencilRuler size={28} />,
            title: "Content Development",
            text: "We create concepts driving the story forward. Creativity meets strategy as we develop concepts you'll be proud to share. Every detail is crafted with purpose and aligned with your goals."
        },
        {
            icon: <FaBullhorn size={28} />,
            title: "Content Creation",
            text: "We create a custom strategy for your brand across every platform using a data-driven industry insights. Every visual touchpoint can be an opportunity for engagement and growth."
        },
        {
            icon: <FaChartLine size={28} />,
            title: "Content Strategy",
            text: "We craft a compelling story for your brand to drive results. Our content is tailored to your target audience to maximize engagement and build brand loyalty."
        }
    ];

    return (
        <section className="container mx-auto py-16 px-6">
            {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
            ))}
        </section>
    );
};

// Social Media Amplification Section
const SocialSection = () => (
    <section className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Social Media Amplification</h2>
            <p className="text-gray-600">
                Leverage our network to skyrocket your impact. Our strategic partnerships and promotional expertise ensure your message reaches the right audience at the right time. We create shareable content, targeted campaigns, and data-driven strategies to expand your reach.
            </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
            {/* Placeholder for the social media illustration */}
            <img src="../OBJECTS.svg" alt="Team working on social media campaign" className="w-full max-w-lg" />
        </div>
    </section>
);

// "Need Help" Section
const NeedHelpSection = () => (
  <section className="bg-gray-50 py-20 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Help with Your Website?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Our team of experts will help you create a website that is functional, beautiful, and drives results for your business.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
        <div className="flex items-center space-x-4">
          <FiClock className="text-green-500" size={24} />
          <p>Guaranteed On-time Delivery</p>
        </div>
        <div className="flex items-center space-x-4">
          <FiUsers className="text-green-500" size={24} />
          <p>A Team of experts and specialists</p>
        </div>
        <div className="flex items-center space-x-4">
          <FiCheckSquare className="text-green-500" size={24} />
          <p>Approved Sketches and Mockups</p>
        </div>
      </div>
      <Button primary>Request a Free Quote</Button>
    </div>
  </section>
);

// "Let's Build" Contact Section
const ContactSection = () => (
    <section className="bg-gray-800 text-white py-20 px-6">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="max-w-xl mx-auto mb-8">
                Whether you're starting a new project or looking to improve an existing one, we're here to help.
            </p>
            <div className="space-x-4">
                <Button primary>Contact Us</Button>
                <Button>Create Account</Button>
            </div>
        </div>
    </section>
);

// Footer Component
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


// Main Page Component
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