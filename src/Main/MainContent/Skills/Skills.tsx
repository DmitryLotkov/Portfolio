import React from 'react';
import style from "./Skills.module.scss"
import commonStyle from "../../../Common/Styles/h.module.scss";
import {SkillsItem} from "./SkillsItem";
import {skillsData} from "./SkillData"
import {titles} from "../../../Common/components/CommonData";


export function Skills() {
    return (
        <section id={"skills"} className={style.skillsBlock}>
            <span>
                <h2 className={commonStyle.h2}>{titles.title2}</h2>
            </span>

            <div className={style.skillsContainer}>
                {
                    skillsData && skillsData.data.map((item, index) => <SkillsItem
                        key={index}
                        skills={item.skill}
                        skillsDescription={item.skillDescription}
                        pictures={item.picture}/>
                    )}
            </div>

        </section>
    );
}