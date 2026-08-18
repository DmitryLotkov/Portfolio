import { faJsSquare, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import ReduxLogo from '@/shared/assets/icons/redux.svg';
import StorybookLogo from '@/shared/assets/icons/storybook.svg';
import SassLogo from '@/shared/assets/icons/sass.svg';
import MuiLogo from '@/shared/assets/icons/mui.svg';
import RestAPI from '@/shared/assets/icons/rest.svg';
import ReactLogo from '@/shared/assets/icons/react.svg';
import JestLogo from '@/shared/assets/icons/jest.svg';
import TSLogo from '@/shared/assets/icons/typescript.svg';
import { SkillsDataType } from './types';

export const skillsData: SkillsDataType = {
    data: [
        {
            picture: ReactLogo,
            skill: "React JS",
            skillDescription: "A year of experience using React JS hooks to create SPA applications. Familiarity to React class components",
        },
        {
            picture: ReduxLogo,
            skill: "Redux",
            skillDescription: "Confident understanding of the React-redux architecture concept using Redux-thunks, Redux-ducks rules",
        },
        {
            picture: faJsSquare,
            skill: "JS",
            skillDescription: "Confident knowledge of native JavaScript (ES6+/ events/ Promises/ functional programming/ prototypes). Familiarity to classes",
        },
        {
            picture: TSLogo,
            skill: "TS",
            skillDescription: "A year of practical experience using TypeScript for developing React SPA apps (types, interface, enum). Familiarity to classes",
        },
        {
            picture: faHtml5,
            skill: "HTML5",
            skillDescription: "Creating an adaptive layout based on figma layouts. Layout of whole projects, landing pages, individual pages, blocks in existing sites",
        },
        {
            picture: RestAPI,
            skill: "REST API",
            skillDescription: "Using the REST API as the main technology for network requests. Practical experience of using Postman for server testing",
        },
        {
            picture: JestLogo,
            skill: "Unit testing",
            skillDescription: "Test Driven Development (TDD) approach, unit testing using Jest and React testing library",
        },
        {
            picture: StorybookLogo,
            skill: "StoryBook",
            skillDescription: "Familiarity to storyBook component testing, integration snapShot testing",
        },
        {
            picture: SassLogo,
            skill: "Preprocessors",
            skillDescription: "Experience of using SASS/SCSS preprocessors @mixin/ @extend/ variables/ nesting. Adaptive layout/ flex/ grid",
        },
        {
            picture: MuiLogo,
            skill: "MUI",
            skillDescription: "Using MUI framework in everyday job as main framework for styling forms/ tables/ buttons/ icons/ customize mui styles etc",
        },
    ],
};
