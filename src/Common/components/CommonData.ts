export const titles = {

    title1: "About Me",
    title2: "Skills",
    title3: "My Works",
    title4: "My Contacts",

}
export type itemsType = {
    path: string,
    value: string
    id: number
}
export const burgerMenuItems: Array<itemsType> = [
    {
        path: "#aboutMe",
        value: "AboutMe",
        id: 1,
    },
    {
        path: "#skills",
        value: "Skills",
        id: 2,
    },
    {
        path: "#works",
        value: "My works",
        id: 3,
    },
    {
        path: "#contacts",
        value: "Contacts",
        id: 4,
    },

]

