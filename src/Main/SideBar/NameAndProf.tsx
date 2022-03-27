import React from 'react';
import style from "./NameAndProf.module.css"
import commonStyle from "./../../Common/Styles/Box.module.css";

export function NameAndProf() {
    return (
        <div className={commonStyle.nameAndProf}>
            <div>
                <h3 className={style.userName}>
                    <span className={style.textWeight}>Dmitry</span> Lotkov
                </h3>
                <div className={style.professionName}>Frontend Developer</div>
            </div>

        </div>
    );
}