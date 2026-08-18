import todoListImg from '@/shared/assets/images/todo-list-bg.png';
import snLogo from '@/shared/assets/icons/sn.svg';
import cardsImg from '@/shared/assets/images/card-project-bg.png';
import { WorksContentType } from './types';

export const worksData: WorksContentType = {
    data: [
        {
            title: "To-Do List ReactJS App",
            description: "Simple tool to organise everything",
            src: todoListImg,
            href: "https://dmitrylotkov.github.io/My_Todolist/",
        },
        {
            title: "Social Network ReactJS App",
            description: "Online platform to connect people",
            src: snLogo,
            href: "https://DmitryLotkov.github.io/My-Social-Network",
        },
        {
            title: "Education slips ReactJS App",
            description: "An application that will help you learn and memorize new information more easily",
            src: cardsImg,
            href: "https://Trivium-bit.github.io/cards-triv",
        },
    ],
};
