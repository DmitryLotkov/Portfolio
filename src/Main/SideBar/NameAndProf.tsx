import React from 'react';
import style from "./NameAndProf.module.scss"
import ReactTypingEffect from 'react-typing-effect'

export function NameAndProf() {
    return (
        <div className={style.nameAndProf}>
            <h3 className={style.userName}>
                <span className={style.textWeight}>Dmitry</span> Lotkov
            </h3>
            <div className={style.professionName}>
                <ReactTypingEffect text={"Frontend Developer"}/>
            </div>
        </div>
    );
}