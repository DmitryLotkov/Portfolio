import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SkillDataType = {
    picture: IconDefinition | string;
    skill: string;
    skillDescription: string;
};

export type SkillsDataType = {
    data: Array<SkillDataType>;
};

export type SkillCardProps = {
    skills: string;
    skillsDescription: string;
    pictures: IconDefinition | string;
};
