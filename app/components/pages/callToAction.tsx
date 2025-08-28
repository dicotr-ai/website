import Button from "@/app/components/pages/button"

const CallToAction = () =>{
    return(
        <>
            <section className="bg-[#284236] text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[#F3F3F3] text-[42px] font-rubik font-semibold break-words">Let&apos;s Do Great Work Together</h2>
                        <p className="text-center text-[#E5E7EA] text-[22px] font-rubik font-normal leading-[40px] tracking-[0.44px] break-words">Whether you&apos;re just starting out or scaling big, we&apos;re ready to help your brand<br /> succeed online.</p>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Button label="Contact Us"/>
                        <div className="relative mt-12 w-[293px] h-[78px]">
                            <button className="bg-white text-gray-800 font-bold px-8 py-3 relative w-full h-full rounded-full  hover:bg-gray-200 transition-colors">
                                Request a FREE Website Scan
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction;