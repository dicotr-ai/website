const ServiceItem = ({ image, title, description }: { image: string, title: string, description?: string }) => (
    <div className="flex flex-col items-center text-center p-4">
        <img src={image} alt={title} className="w-8 h-8 mb-4 object-contain" />
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </div>
);

const whyToChooseUs = () =>{
    return(
        <>
            <section className="bg-lime-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
                    <p className="text-gray-600 mt-2">Seeing our customers succeed is the benchmark that helps promote our commitment.</p>
                     <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceItem image='./saturated-graph.svg' title="Custom Strategies For Every Client" />
                        <ServiceItem image='./pdf-file.svg' title="Transparent Reporting & Monthly Updates" />
                        <ServiceItem image='./triNodes.svg' title="SEO-first, user-focused Content" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default whyToChooseUs;