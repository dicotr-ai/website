const Acknowlegde = () => {
    return(
        <>
            <section className="container mx-auto px-0 py-4 grid md:grid-cols-2 gap-20 items-center">
                 <div className="">
                    <img src="./Acknowledge-section.svg" alt="Team working at a desk" className="w-full h-[300px]" />
                </div>
                <div>
                    <h2   style={{
                            color: '#253D32',
                            fontSize: '42px',
                            fontFamily: 'Rubik',
                            fontWeight: 600,
                            wordWrap: 'break-word',
                        }}>Who We Are</h2>
                    <p  style={{
                            width: '100%',
                            color: '#78847D',
                            fontSize: '22px',
                            fontFamily: 'Rubik',
                            fontWeight: 400,
                            lineHeight: '40px',
                            wordWrap: 'break-word',
                        }}>
                        WeThink is a strategic digital marketing agency focused on helping brands grow with purpose. From content strategy to SEO, and <br />social media to web experience, we craft end-to-end digital <br /> journeys that drive real results.<br />
                        With a team of experienced marketers, copywriters, and designers, <br />we don&apos;t just deliver services—we build relationships that last.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Acknowlegde;