import React from 'react';
import style from "./SideBar.module.css";
import {NameAndProf} from "./NameAndProf";
import Avatar from "./MyPhoto.jpg"
import {ContactBlock} from "./ContactBlock";
import Button from "../../Common/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-regular-svg-icons";


export function SideBar() {

    return (
        <aside className={style.aside}>
            <div className={style.slideBlock}>
                <div className={style.nameAvatar}>
                    <img className={style.avatar} src={Avatar} alt={"avatar"}/>
                    <NameAndProf/>
                </div>
                <ContactBlock/>
                <Button>
                    <span style={{marginRight: "10px"}}>
                        <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                    </span>
                    Download CV
                </Button>
            </div>
        </aside>
    );
}