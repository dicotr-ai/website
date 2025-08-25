import { Rubik } from 'next/font/google';
import Image from "next/image";

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['700'], 
});

const Hero = () => {
    return (
        <>
            <main className="container mx-auto grid min-h-[80vh] items-center gap-8 px-0 py-26 md:grid-cols-2">
                {/* Text Content */}
                <div className="text-left">
                    <h1 className={`${rubik.className} text-5xl font-black text-gray-800 md:text-6xl`}>
                        We Think Different. We <br /> Think Digital.
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        At WeThink, we combine strategy, creativity, and analytics <br /> to help
                        businesses thrive in the digital world.
                    </p>
                    <div className="relative mt-12 w-[293px] h-[78px]">
                        <div className="absolute w-[201.36px] h-16 opacity-20 bg-lime-300 blur-md" />
                        <button className="relative w-full h-full rounded-full bg-gradient-to-tr from-[#98AA28] to-[#D6FF7E] shadow-lg border border-white">
                            <span className="text-white text-lg font-rubik font-semibold tracking-wider">
                                Work With Us
                            </span>
                        </button>
                    </div>
                </div>
                {/* Image Section */}
                <div className="relative h-[500px] w-full">
                    <div
                        className="absolute right-0 top-0 h-full w-2/3 bg-orange-300"
                        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
                    ></div>
                    <div className="relative w-full h-full">
                        <Image src="hero-image.svg" alt="Hero" fill className="object-cover" draggable={false} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Hero;