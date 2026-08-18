export type WorkItemType = {
    title: string;
    description: string;
    src: string;
    href: string;
};

export type WorksContentType = {
    data: Array<WorkItemType>;
};

export type WorkCardProps = {
    description: string;
    title: string;
    src: string;
    href: string;
};
