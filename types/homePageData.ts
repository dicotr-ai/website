type HomePageDataType = {
    title: string,
    courses: string[],
    description: string,
    heroImageLink: string,
    exploreMoreLink: string,

}

interface StrategicSectionType extends ICard {
    title: string,
    description: string,
    link: string,
    strategies: ICard[]
}

interface ICard{
    title: string,
    image?: string,
    description: string,
    link?: string,
}