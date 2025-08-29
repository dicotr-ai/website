const Acknowlegde = () => {
    return(
        <>
            <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">
                 <div>
                    <img src="./Acknowledge-section.svg" alt="Team working at a desk" className="w-full h-auto" />
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
                        WeThink is a strategic digital marketing agency focused on helping brands tell their story. From our content strategy to our paid social media to web expertise, we craft end-to-end digital experiences that drive results.
                        With a team of experienced marketers, copywriters, and designers, we are dedicated to our clients&apos; success.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Acknowlegde;