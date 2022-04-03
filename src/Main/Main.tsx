import React from 'react';
import style from "./Main.module.scss"
import {SideBar} from "./SideBar/SideBar";
import {MainContent} from "./MainContent/MainContent";

export function Main() {
    return (
        <div className={style.main}>
            <SideBar/>
            <MainContent/>
        </div>
    );
}