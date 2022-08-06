import React from 'react';
import style from "./Works.module.scss"
import commonStyle from "../../../Common/Styles/h.module.scss";
import {WorksItem} from "./WorksItem";
import {content} from "./WorksData";
import {titles} from "../../../Common/components/CommonData";
import {Fade} from "react-awesome-reveal";



export function Works() {
    return (
        <section id={"works"} className={style.worksContainer}>
            <Fade cascade={true}>
            <h2 className={commonStyle.h2}>{titles.title3}</h2>

            <div className={style.worksContent}>
                {content.data.map((item, index) =>
                    <WorksItem key={index}
                               description={item.description}
                               title={item.title}
                               href={item.href}
                               src={item.src}/>)}

            </div>
            </Fade>
        </section>

    );
}