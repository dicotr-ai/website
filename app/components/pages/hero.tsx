import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['700'], 
});

const Hero = () => {
    return (
        <>
            <main className="container mx-auto grid min-h-[80vh] items-center gap-8 px-6 py-26 md:grid-cols-2">
                
                {/* Text Content */}
                <div className="text-left">
                    <h1 className={`${rubik.className} text-5xl font-black text-gray-800 md:text-6xl`}>
                        We Think Different. We <br /> Think Digital.
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        At WeThink, we combine strategy, creativity, and analytics to help
                        businesses thrive in the digital world.
                    </p>
                    <button className="mt-8 rounded-full bg-lime-300 px-10 py-4 font-bold text-gray-900 transition-colors duration-300 hover:bg-lime-400">
                        Work With Us
                    </button>
                </div>

                {/* Image Section */}
                <div className="relative h-full w-full">
                    <div 
                        className="absolute right-0 top-0 h-full w-2/3 bg-orange-300"
                        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
                    ></div>
                    
                    <div className="relative flex h-full items-center justify-center">
                        <img src="hero-image.svg" alt="Man on beanbag with laptop" className="w-full max-w-md md:max-w-lg lg:max-w-xl"/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Hero;