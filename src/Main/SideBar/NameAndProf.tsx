import React from 'react';
import style from "./NameAndProf.module.scss";
import { Typewriter } from "../../Common/components/Typewriter";

export function NameAndProf() {
    return (
        <div className={style.nameAndProf}>
            <h3 className={style.userName}>
                <span className={style.textWeight}>Dmitry</span> Lotkov
            </h3>
            <div className={style.professionName}>
                <Typewriter text={"Frontend Developer"} />
            </div>
        </div>
    );
}