import React from 'react';
import style from "./AboutMe.module.scss"
import commonStyle from "../../../Common/Styles/Box.module.scss";
import {titles} from "../../../Common/components/CommonData"
import {Nav} from "../../../NavBar/Nav";
import { Fade } from 'react-awesome-reveal';

export function AboutMe() {
    return (
        <section id={"aboutMe"} className={`${style.aboutMe} + ${commonStyle.inner} `}>
            <Fade>
            <Nav/>
            <span>
                <h2>{titles.title1}</h2>
            </span>
            <div>
                <p>
                    I'm frontend developer from Minsk, Belarus, working in web development.
                </p>
                <p>
                    My job is to build web applications so that it is functional and user-friendly
                    but at the same time attractive. I use modern technologies like as: React JS, Redux,
                    Redux Thunk, unit testing, REST API. Confident knowledge of native JavaScript and TypeScript.
                    My projects with using this technologies are listened in section My Works.
                </p>
                <p>
                    Consider options for remote work.
                </p>
            </div>
            </Fade>
        </section>
    );
}