const AboutUs = () => {
    return(
        <>
            <main className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                        We Think Different. <br />
                        We Think <span className="text-lime-500">Digital.</span>
                    </h1>
                    <p className="mt-4 text-gray-600">
                        At WeThink, we combine strategy, creativity, and data-driven insights to help businesses thrive in the digital world.
                    </p>
                    <button className="mt-8 bg-lime-400 text-white font-bold px-8 py-3 rounded-full hover:bg-lime-500 transition-colors">
                        Learn More
                    </button>
                </div>
                <div>
                    <img src="../hero-image.svg" alt="Man on beanbag with laptop" className="w-full h-auto" />
                </div>
            </main>
        </>
    );
}

export default AboutUs;