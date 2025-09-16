import { Rubik } from 'next/font/google';
import Image from "next/image";
import Button from "@/app/components/pages/button"

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['700'], 
});

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      {/* <div className="container mx-auto grid min-h-[80vh] items-center gap-8 px-0 py-0 md:grid-cols-2 pt-54"> */}
      <div className='container mx-auto relative'>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-36">
          {/* Text Content */}
          <div className="relative z-20 md:pr-10 px-24">
            {/* <div className="text-left"> */}
              <h1 className={`${rubik.className} text-5xl font-black text-gray-800 md:text-6xl`}>
                We Think Different. We <br /> Think Digital.
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                At WeThink, we combine strategy, creativity, and analytics <br /> 
                to help businesses thrive in the digital world.
              </p>
              <div className="mt-6">
                <Button label='Work with Us'/>
              </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[500px] w-full px-0 -mt-10 md:mt-0 z-10">
            <div 
              className="absolute right-0 top-0 h-full w-2/3 bg-orange-300" 
              style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} 
            />
            <div className="relative w-full h-full">
              <Image 
                src="/hero-image.svg" 
                alt="Hero" 
                fill 
                className="object-cover" 
                draggable={false} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
