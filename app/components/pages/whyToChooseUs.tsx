const ServiceItem = ({ image, title, description }: { image: string, title: React.ReactNode, description?: string }) => (
    <div className="flex flex-col items-center text-center p-4">
        <img src={image} alt={typeof title === 'string' ? title : ''} className="w-12 h-12 mb-4 object-contain" />
        <h3 className="w-full text-center flex flex-col justify-center text-black text-[25px] font-rubik font-normal break-words">{title}</h3>
    </div>
);

const whyToChooseUs = () =>{
    return(
        <>
            <section className="bg-lime-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-[#253D32] text-[42px] font-rubik font-semibold break-words">Why Choose Us</h2>
                    <p className="w-full text-center text-[#78847D] text-[22px] font-rubik font-normal leading-[40px] break-words">Using our network of industry influencers, we help promote<br /> your content</p>
                    <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceItem
                            image="./saturated-graph.svg"
                            title={
                                <>
                                    Custom Strategies <br /> For Every Client
                                </>
                            }
                        />
                        <ServiceItem
                            image="./pdf-file.svg"
                            title={
                                <>
                                    Transparent Reporting <br /> & Monthly Updates
                                </>
                            }
                        />
                        <ServiceItem
                            image="./triNodes.svg"
                            title={
                                <>
                                    SEO-first, user-focused <br /> Content
                                </>
                            }
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default whyToChooseUs;