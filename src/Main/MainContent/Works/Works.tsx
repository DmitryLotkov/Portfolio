import React from 'react';
import style from "./Works.module.css"
import commonStyle from "../../../Common/Styles/h.module.css";
import {WorksItem} from "./WorksItem";
import SN from "../../../Images/SN.svg"
import TODoLIST from "../../../Images/To-DO List React background.png"

const content = {
    data: [
        {
            title: "To-Do List ReactJS App",
            description: "Simple tool to organise everything",
            src: TODoLIST,
            href: "https://dmitrylotkov.github.io/My_Todolist/",
        },
        {
            title: "Social Network ReactJS App",
            description: "Online platform to connect people",
            src: SN,
            href: "https://DmitryLotkov.github.io/My-Social-Network",
        }
    ]
}

export function Works() {
    return (
        <div className={style.worksContainer}>
            <h2 className={commonStyle.h2}>My Works</h2>

            <div className={style.worksContent}>
                {content.data.map((item, index) =>
                    <WorksItem key={index}
                               description={item.description}
                               title={item.title}
                               href={item.href}
                               src={item.src}/>)}

            </div>
        </div>

    );
}