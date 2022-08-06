import commonStyle from "../../../Common/Styles/h.module.scss";
import React from "react";
import styles from "./Contacts.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import Button from "../../../Common/components/Button";
import {titles} from "../../../Common/components/CommonData";
import {Fade} from "react-awesome-reveal";

export function Contacts() {
    return (
        <form id={"contacts"}>
        <Fade cascade={true}>
            <h2 className={commonStyle.h2}>{titles.title4}</h2>
            <section className={styles.allForms}>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} type="text" placeholder="Login"/>
                    <input className={styles.input} type="text" placeholder="Email"/>
                </div>
                <textarea className={styles.textArea} placeholder="Your Message"/>
                <div>
                    <Button>
                        <FontAwesomeIcon
                            icon={faPaperPlane}/>
                        <span style={{marginLeft: "10px"}}>Submit</span>
                    </Button>
                </div>
            </section>
            </Fade>
        </form>
    );
}