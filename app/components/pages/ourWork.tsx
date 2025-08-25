const ourWork = () =>{
    const ServiceItem = ({ image, title, description }: { image: string, title: string, description?: string }) => (
    <div className="flex flex-col items-center text-center p-4">
        <img src={image} alt={title} className="w-12 h-12 mb-4 object-contain" />
        <h3 className="w-full flex flex-col justify-center items-center text-center text-black text-[25px] font-rubik font-normal break-words">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </div>
);

    return(
        <>
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-[#253D32] text-[42px] font-rubik font-semibold break-words">What We Do</h2>
                    <p className="w-full text-center text-[#78847D] text-[22px] font-rubik font-normal leading-[40px] break-words">Your business is unique—and so are your needs. Let’s <br />build a package just for you.</p>
                    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <ServiceItem image='./star-circle-and-arrow.svg' title="Content, Strategy & Planning" />
                        <ServiceItem image='./white-board.svg' title="Copywriting & Creative Content" />
                        <ServiceItem image='./increasing-bargraph.svg' title="SEO & Content Optimization" />
                        <ServiceItem image='./content-calenders-and-compaigns.svg' title="Content Calendars & Compaigns" />
                        <ServiceItem image='./person-with-magnifient.svg' title="Social Media Amplification" />
                        <ServiceItem image='./audit-diary.svg' title="Website Audits & Experience Reviews" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ourWork;