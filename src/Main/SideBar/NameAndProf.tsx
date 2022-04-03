import React from 'react';
import style from "./NameAndProf.module.scss"


export function NameAndProf() {
    return (
        <div className={style.nameAndProf}>
            <h3 className={style.userName}>
                <span className={style.textWeight}>Dmitry</span> Lotkov
            </h3>
            <div className={style.professionName}>Frontend Developer</div>
        </div>
    );
}