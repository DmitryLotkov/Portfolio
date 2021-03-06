import React, {useEffect, useState} from 'react';
import style from "./SideBar.module.scss";
import {NameAndProf} from "./NameAndProf";
import Avatar from "./MyPhoto.jpg"
import {ContactBlock} from "./ContactBlock";
import Button from "../../Common/components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-regular-svg-icons";


export function SideBar() {
    const [scroll, setScroll] = useState<number>(0);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.addEventListener("scroll", scrollHandler);
        }
    }, [])
    const scrollHandler = (e: any) => {
        setScroll(e.target.documentElement.scrollTop);
    }


    return (
        <aside className={style.aside}>
            <div className={style.slideBlock}>
                <div className={style.nameAvatar}>
                    <img className={scroll <= 80 ? style.avatar : style.avatarActive}
                         src={Avatar} alt={"avatar"}/>
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