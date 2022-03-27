import React from 'react';
import style from "./MainContent.module.css"
import {AboutMe} from "./AboutMe/AboutMe";
import {Skills} from "./Skills/Skills";
import CommonStyles from "./../../Common/Styles/Box.module.css"
import styles from "./Contacts/Contacts.module.css";
import {Contacts} from "./Contacts/Contacts";
import {Works} from "./Works/Works";

export function MainContent() {

    const year = new Date().getFullYear();
    return (
        <div className={`${style.mainContent} ${CommonStyles.shadow}`}>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contacts/>
            <footer className={styles.LastContactContainer}>
                <span>© {year} All Rights Reserved. </span>
            </footer>
        </div>
    );
}