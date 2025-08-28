export const homePageMock: HomePageDataType = {
    title: 'Powering Your Growth In',
    courses: ['Development', 'Generative AI', 'DevOps', 'Digital Marketing'],
    description: 'A brilliant idea without execution is just a spark, execution without innovation is just repetition.',
    heroImageLink: '/home/hero1.svg',
    exploreMoreLink: '/features',

}

const startegies: ICard[] = [
    {
        title: 'Strategy & Consultaion',
        description: 'We provide expert strategy and consultation, guiding businesses with tailored solutions for growth, efficiency, and sustainable success.',
        image: 'bluebox.svg'
    },
    {
        title: 'Digital Engineering',
        description: 'We help businesses embrace digital integration, streamlining processes and technologies to drive innovation, efficiency, and sustainable growth.',
        image: 'pyramid.svg'
    },
    {
        title: 'Generative Ai',
        description: 'We empower businesses with generative AI solutions, enhancing creativity, automation, and decision-making for sustainable growth.',
        image: 'bluecircle.svg'
    },
    {
        title: 'Digital Marketing',
        description: 'We craft impactful digital marketing strategies to boost brand visibility, engage audiences, and drive measurable business growth.',
        image: 'cup.svg'
    },
]

export const strategicSection: StrategicSectionType = {
    title: 'Innvoation with Execution',
    description: 'At DiCoTr, we become the cotter - the small but essential force that locks innovation with creating real movement and measurable growth',
    link: '/about',
    strategies: startegies

}


