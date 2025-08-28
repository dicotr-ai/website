import Header from "../components/pages/header";
import Footer from "../components/pages/footer";
import PartnerSection from "../components/pages/partnerSection";

const FlexiblePricingComponent = () => {
  return (
    <div className="relative bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Background Decorative Images */}
        {/* Replaced Next.js <Image> with standard <img> tags to resolve the dependency error. */}
        <div className="absolute top-0 right-0 -mr-32 -mt-20 opacity-80 z-0 hidden lg:block">
          <img
            src="/increasingGraphNodeUpper.svg"
            alt="Decorative graph line"
            width="500"
            height="200"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-32 opacity-80 z-0 hidden lg:block">
          <img
            src="/increasingGraphNodesLower.svg"
            alt="Decorative graph line"
            width="500"
            height="200"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 right-0 -mr-4 -mb-12 z-0 hidden sm:block">
            <img
                src="/dottedCircle.svg"
                alt="Dotted circle decoration"
                width="200"
                height="200"
                className="w-full h-auto"
            />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 max-w-3xl">
            Flexible Pricing Plans for Every Stage of Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
            Choose a package that fits your business goals—from startups to scaling enterprises, we’ve got you covered.
          </p>
          <button
            className="px-8 py-4 bg-gradient-to-r from-lime-400 to-green-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-lime-300"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

const page = () => {
    return(
        <>
        <Header/>
            <main>
                <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
                    <FlexiblePricingComponent />
                </div>
                <PartnerSection/>
            </main>
        <Footer/>
        </>
    );
};

export default page;