import React from 'react';
import style from "./Works.module.css"

type WorksItemPropsType = {
    description: string
    title: string
    src: string
    href: string
}

export function WorksItem(props: WorksItemPropsType) {
    return (
        <a className={style.worksItem} href={props.href}>
            <div>
                <img className={style.img} src={props.src} alt={"work Img"}/>


                <div className={style.titleContent}>
                    <h3>{props.title}</h3>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </a>
    );
}