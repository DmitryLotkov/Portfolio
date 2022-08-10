import React from 'react';
import style from "./ContactBlock.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import {faCalendarMinus, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import Tooltip from "@mui/material/Tooltip";




export function ContactBlock() {
    return (
        <div className={style.contactsBlock}>
                <Tooltip title={"Birthday"} placement="top" arrow={true}>
                    <div className={style.contactsBlockItem}>
                        <FontAwesomeIcon className={style.icon} icon={faCalendarMinus}/>
                        December 7, 1991
                    </div>
                </Tooltip>

                <Tooltip title={"Address"} placement="top" arrow={true}>
                    <div className={style.contactsBlockItem}>
                        <FontAwesomeIcon className={style.icon} icon={faMapMarkerAlt}/>
                        Minsk, Belarus
                    </div>
                </Tooltip>

                <Tooltip title={"Email"} placement="top" arrow={true}>
                    <div className={style.contactsBlockItem}>
                        <FontAwesomeIcon className={style.icon} icon={faEnvelope}/>
                        <a href="mailto:dmitry.lotkov9@gmail.com">
                            Dmitry.lotkov9@gmail.com
                        </a>
                    </div>
                </Tooltip>
                <Tooltip title={"Phone"} placement="top" arrow={true}>
                    <div className={style.contactsBlockItem}>
                        <FontAwesomeIcon className={style.icon} icon={faPhone}/>
                        <a href="tel:+375298779472">
                            +375 (29) 877-94-72

                        </a>
                    </div>
                </Tooltip>

                <Tooltip title={"GitHub"} placement="top" arrow={true}>
                    <div className={style.contactsBlockItem}>
                        <FontAwesomeIcon className={style.icon} icon={faGithub}/>
                        <a href="https://github.com/DmitryLotkov">
                            My GitHub
                        </a>
                    </div>
                </Tooltip>

                <Tooltip title={"CodeWars"} placement="top" arrow={true}>
                    <div className={style.lastContactBlockItem}>
                        <FontAwesomeIcon className={style.icon} icon={faCode}/>
                        <a  href="https://www.codewars.com/dashboard">
                            My CodeWars
                        </a>
                    </div>
                </Tooltip>


        </div>
    );
}