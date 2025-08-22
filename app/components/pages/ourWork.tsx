const ourWork = () =>{
    const ServiceItem = ({ image, title, description }: { image: string, title: string, description?: string }) => (
    <div className="flex flex-col items-center text-center p-4">
        <img src={image} alt={title} className="w-12 h-12 mb-4 object-contain" />
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </div>
);

    return(
        <>
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
                    <p className="text-gray-600 mt-2">From foundational to issue-based, we cover all your needs, 24/7.</p>
                    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <ServiceItem image='./star-circle-and-arrow.svg' title="Content, Strategy & Marketing" />
                        <ServiceItem image='./white-board.svg' title="Copywriting & Creative Direction" />
                        <ServiceItem image='./increasing-bargraph.svg' title="SEO & Content, Down to a Tee" />
                        <ServiceItem image='./content-calenders-and-compaigns.svg' title="Content Calendars & Scheduling" />
                        <ServiceItem image='./person-with-magnifient.svg' title="Social Media Optimisation" />
                        <ServiceItem image='./audit-diary.svg' title="Website Audits & Embedded Content" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ourWork;