import React from 'react';
import style from "./Main.module.css"
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