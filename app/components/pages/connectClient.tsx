const connectClient = () =>{
    return(
        <>
            <section className="bg-gray-800 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Let's Do Great Work Together</h2>
                    <p className="mt-4">Whatever your vision, we're ready to bring it to life. Let's create something impactful.</p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <button className="bg-lime-400 text-white font-bold px-8 py-3 rounded-full hover:bg-lime-500 transition-colors">
                            Contact Us
                        </button>
                        <button className="bg-white text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
                            Request a FREE Website Scan
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default connectClient;