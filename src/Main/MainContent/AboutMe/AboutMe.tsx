import React from 'react';
import style from "./AboutMe.module.scss"
import commonStyle from "../../../Common/Styles/Box.module.scss";

import {titles} from "../../../Common/components/TitleData"
export function AboutMe() {
    return (
        <div className={`${style.aboutMe} + ${commonStyle.inner} `}>
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
                    easy to use. I use modern technologies like as: React JS, Redux Thunk/Saga, unit testing, Storybook.
                    Strong knowledge of native JavaScript and TypeScript.
                </p>
                <p>
                    Consider options for remote work.
                </p>
            </div>
        </div>
    );
}