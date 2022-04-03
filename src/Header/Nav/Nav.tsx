import React from 'react';
import style from "./Nav.module.scss"
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={style.nav}>
            <NavLink to={"/main"}>Home</NavLink>
            <NavLink to={"/skills"}>Skills</NavLink>
            <NavLink to={"/projects"}>My works</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
        </div>
    );
}


