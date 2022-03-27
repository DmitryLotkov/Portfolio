import commonStyle from "../../../Common/Styles/h.module.css";
import React from "react";
import styles from "./../Contacts/Contacts.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";

import {buttonData} from "../../../Common/ButtonData"
import Button from "../../../Common/Button";

export function Contacts() {
    return (
        <form>
            <h2 className={commonStyle.h2}>My Contacts</h2>
            <div className={styles.allForms}>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} type="text" placeholder="Login"/>
                    <input className={styles.input} type="text" placeholder="Email"/>
                </div>
                <textarea className={styles.textArea} placeholder="Your Message"/>
                <div>
                    <Button>
                        <FontAwesomeIcon
                            icon={faPaperPlane}/>
                        <span style={{marginLeft: "10px"}}>{buttonData.contactsBlockMessage}</span>
                    </Button>
                </div>
            </div>
        </form>
    );
}