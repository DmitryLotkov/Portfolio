import React, {useEffect, useState} from 'react';
import style from "./SideBar.module.scss";
import {NameAndProf} from "./NameAndProf";
import Avatar from "./MyPhoto.jpg"
import {ContactBlock} from "./ContactBlock";
import Button from "../../Common/components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleDown} from "@fortawesome/free-regular-svg-icons";
import Tilt from 'react-parallax-tilt';


export function SideBar() {
    const [scroll, setScroll] = useState<number>(0);

    useEffect(() => {
        const scrollHandler = () => {
            setScroll(document.documentElement.scrollTop);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <aside className={style.aside}>
            <div className={style.slideBlock}>
                <div className={style.nameAvatar}>
                    <Tilt>
                    <img className={scroll <= 80 ? style.avatar : style.avatarActive}
                         src={Avatar} alt={"avatar"}/>
                    </Tilt>
                    <NameAndProf/>
                </div>
                <ContactBlock/>
                <Button
                    as="a"
                    href="https://mega.nz/file/gtIVEKbK#CSzKbsPPHF7LI2C7UvO9AH0gaAPK2FQbVx8wnWq7Gq4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span style={{marginRight: "10px"}}>
                        <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                    </span>
                    Download CV
                </Button>
            </div>
        </aside>
    );
}