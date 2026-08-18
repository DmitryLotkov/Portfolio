import todoListImg from '@/assets/images/todo-list-bg.png';
import snLogo from '@/assets/icons/sn.svg';
import cardsImg from '@/assets/images/card-project-bg.png';

export type WorkItemType = {
    title: string;
    description: string;
    src: string;
    href: string;
};

export type WorksContentType = {
    data: Array<WorkItemType>;
};

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
