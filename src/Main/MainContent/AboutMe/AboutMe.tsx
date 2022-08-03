import React from 'react';
import style from "./AboutMe.module.scss"
import commonStyle from "../../../Common/Styles/Box.module.scss";
import {titles} from "../../../Common/components/CommonData"
import {Nav} from "../../../NavBar/Nav";

export function AboutMe() {
    return (
        <section id={"aboutMe"} className={`${style.aboutMe} + ${commonStyle.inner} `}>
            <Nav/>
            <span>
                <h2>{titles.title1}</h2>
            </span>
            <div>
                <p>
                    I'm frontend developer from Minsk, Belarus, working in web development.
                    I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </p>
                <p>
                    My job is to build web applications so that it is functional and user-friendly but at the same time
                    attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and
                    easy to use. I use modern technologies like as: React JS, Redux Thunk, unit testing, Storybook.
                    Confident knowledge of native JavaScript and TypeScript.
                </p>
                <p>
                    Consider options for remote work.
                </p>
            </div>
        </section>
    );
}