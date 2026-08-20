import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SkillCategory = 'frontend' | 'backend';

export type SkillDataType = {
    picture: IconDefinition | string;
    skill: string;
    skillDescription: string;
    tags?: string[];
};

export type SkillsDataType = {
    frontend: Array<SkillDataType>;
    backend: Array<SkillDataType>;
};

export type SkillCardProps = {
    skills: string;
    skillsDescription: string;
    pictures: IconDefinition | string;
    tags?: string[];
};
