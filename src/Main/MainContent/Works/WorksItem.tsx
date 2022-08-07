import React from 'react';
import style from "./Works.module.scss"


type WorksItemPropsType = {
    description: string
    title: string
    src: string
    href: string
}

export function WorksItem(props: WorksItemPropsType) {
    return (
        <div className={style.worksItem}>
            <img className={style.img} src={props.src} alt={"work Img"}/>
            <div className={style.titleContent}>
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
            </div>
            <a href={props.href} className={style.showLink}>Show</a>
        </div>
    );
}