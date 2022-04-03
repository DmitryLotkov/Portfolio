import React from 'react';
import style from "./Works.module.scss"
import commonStyle from "../../../Common/Styles/h.module.scss";
import {WorksItem} from "./WorksItem";
import {content} from "./WorksData";
import {titles} from "../../../Common/components/TitleData";



export function Works() {
    return (
        <div className={style.worksContainer}>
            <h2 className={commonStyle.h2}>{titles.title3}</h2>

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