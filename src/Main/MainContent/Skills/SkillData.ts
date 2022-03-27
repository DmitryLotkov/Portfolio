import {faJsSquare} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faCss3} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";
import tsLogo from "./../../../Images/TSLogo.jpg"
import ReduxLogo from "./../../../Images/Redux.jpg"

type DataType = {
    picture: any,
    skill: string,
    skillDescription: string,
}

export type skillsDataType = {
    data: Array<DataType>
}

export const skillsData:skillsDataType = {

    data: [
        {
            picture: faReact,
            skill: "React JS",
            skillDescription: "Something about React JS.",
        },
        {
            picture: ReduxLogo,
            skill: "Redux",
            skillDescription: "Something about Redux.",
        },
        {
            picture: faJsSquare,
            skill: "JS",
            skillDescription: "Something about JS.",
        },
        {
            picture: tsLogo,
            skill: "TS",
            skillDescription: "Something about TS.",
        },
        {
            picture: faHtml5,
            skill: "HTML",
            skillDescription: "Something about HTML.",
        },
        {
            picture: faCss3,
            skill: "CSS",
            skillDescription: "Something about CSS.",
        },
        {
            picture: faCode,
            skill: "TDD",
            skillDescription: "Something about TDD.",
        },
        {
            picture: faBookOpen,
            skill: "StoryBook",
            skillDescription: "Something about Storybook.",
        },
    ]
}