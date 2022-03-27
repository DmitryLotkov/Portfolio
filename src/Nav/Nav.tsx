import React from 'react';
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={style.nav}>
            <NavLink to={"/main"}>Главная</NavLink>
            <NavLink to={"/skills"}>Скиллы</NavLink>
            <NavLink to={"/projects"}>Проекты</NavLink>
            <NavLink to={"/contacts"}>Контакты</NavLink>

        </div>
    );
}


