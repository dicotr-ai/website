import type { NextPage } from 'next';
import { FiClock, FiUsers, FiCheckSquare } from 'react-icons/fi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLightbulb, 
  FaPencilRuler, 
  FaBullhorn, 
  FaChartLine 
} from 'react-icons/fa';


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
const Header = () => (
  <header className="container mx-auto flex justify-between items-center py-4 px-6 bg-white">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img src="/Category.svg" alt="WeThink Logo" className="h-8 w-auto" />
      <div className="text-2xl font-bold text-gray-800">WeThink</div>
    </div>

    {/* Navigation */}
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-600 hover:text-green-500">Home</a>
      <a href="#" className="text-gray-600 hover:text-green-500">About</a>
      <a href="#" className="text-gray-600 hover:text-green-500">Services</a>
    </nav>

    {/* CTA Button */}
    <Button className="rounded-full border-black !text-black px-6 py-2">
      Contact Us
    </Button>
  </header>
);


/* ===============================
   Hero Section Component
================================ */
const Hero = () => (
  <section className="container mx-auto flex flex-col md:flex-row items-center py-12 md:py-24 px-6">
    {/* Left Content */}
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

    {/* Right Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="Image.svg"
        alt="Woman with digital assets"
        className="w-full max-w-md"
      />
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
  </div>
);


/* ===============================
   Content Section Component
================================ */
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


/* ===============================
   Social Media Section
================================ */
const SocialSection = () => (
  <section className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6">
    {/* Left Content */}
    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Social Media Amplification
      </h2>
      <p className="text-gray-600">
        Leverage our network to skyrocket your impact. Our strategic partnerships 
        and promotional expertise ensure your message reaches the right audience 
        at the right time. We create shareable content, targeted campaigns, and 
        data-driven strategies to expand your reach.
      </p>
    </div>

    {/* Right Image */}
    <div className="md:w-1/2 flex justify-center">
      <img 
        src="../OBJECTS.svg" 
        alt="Team working on social media campaign" 
        className="w-full max-w-lg" 
      />
    </div>
  </section>
);


/* ===============================
   Need Help Section
================================ */
// "Need Help" Section
const NeedHelpSection = () => (
  <section className="bg-gray-50 py-20 px-6">
    <div className="container mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Need Help with Your Website?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Leverage our industry influencer network to increase 
        content visibility and drive audience engagement.
      </p>

      {/* Features Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <FiClock className="text-green-500 mb-4" size={32} />
          <h4 className="font-semibold text-gray-800 mb-2">
            Update your website content
          </h4>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <span className="text-green-500 mb-4 text-3xl">⚠️</span>
          <h4 className="font-semibold text-gray-800 mb-2">
            Improve your user experience
          </h4>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <span className="text-green-500 mb-4 text-3xl">🏆</span>
          <h4 className="font-semibold text-gray-800 mb-2">
            Optimize for better SEO rankings
          </h4>
        </div>
      </div>

      {/* CTA Button */}
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
        <Button>Create Account</Button>
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
      
      {/* About */}
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

      {/* Menu */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Menu</h4>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Home</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">About</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Services</a></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Content Strategy</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Content Development</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Content Creation</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Contact Us</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Careers</a></li>
          <li className="mb-2"><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
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
