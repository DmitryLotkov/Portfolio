import React from 'react';
import style from "./MainContent.module.scss"
import {AboutMe} from "./AboutMe/AboutMe";
import {Skills} from "./Skills/Skills";
import CommonStyles from "../../Common/Styles/Box.module.scss"
import {Contacts} from "./Contacts/Contacts";
import {Works} from "./Works/Works";
import {Footer} from "../../Footer/Footer";
import {ModalUp} from "../../upModal";


export function MainContent() {

    return (
        <div className={`${style.mainContent} ${CommonStyles.shadow}`}>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
            <ModalUp/>
        </div>
    );
}