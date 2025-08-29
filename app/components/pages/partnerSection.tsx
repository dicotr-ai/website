const PartnerSection = () => {
    return (
        <section className="py-12 bg-[#f6fbf9]">
            <div className="container mx-auto px-4">
                <div className="flex justify-around items-center flex-wrap gap-10">
                    <img src="slack.png" alt="Partner 1" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="amazon.png" alt="Partner 2" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="logi.svg" alt="Partner 3" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="google.svg" alt="Partner 4" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
                    <img src="facebook.svg" alt="Partner 5" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
