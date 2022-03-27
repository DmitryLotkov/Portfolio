import React from 'react';
import style from "./Skills.module.css"
import commonStyle from "./../../../Common/Styles/h.module.css";
import {SkillsItem} from "./SkillsItem";
import {skillsData} from "./SkillData"


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <span>
                <h2 className={commonStyle.h2}>Skills</h2>
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

        </div>
    );
}