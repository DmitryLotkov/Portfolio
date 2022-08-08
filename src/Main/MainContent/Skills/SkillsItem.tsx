import React from 'react';
import style from "./Skills.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type SkillSPropsType = {
    skills: string
    skillsDescription: string
    pictures: any
}

export function SkillsItem(props: SkillSPropsType) {
    return (
        <div className={style.skillsItem}>
            {  typeof props.pictures === "string" ? <img className={style.image} src={props.pictures} alt="skill"/>
            :
                <FontAwesomeIcon className={style.image} icon={props.pictures}/>}
            <div className={style.skillText}>

                <h3 className={style.skillTitle}>
                    <span> {props.skills} </span>
                </h3>

                <div style={{fontSize: "1rem"}}>
                    <span>
                        {props.skillsDescription}
                    </span>
                </div>

            </div>
        </div>

    );
}