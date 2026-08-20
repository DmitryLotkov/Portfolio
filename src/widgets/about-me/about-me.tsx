import { Fade } from 'react-awesome-reveal';
import style from './about-me.module.scss';
import commonStyle from '@/shared/styles/box.module.scss';
import { titles } from '@/shared/config';
import { Nav } from '@/widgets/navbar';

export function AboutMe() {
    return (
        <section id="aboutMe" className={`${style.aboutMe} ${commonStyle.inner}`}>
            <Fade>
                <Nav />
                <span>
                    <h2>{titles.title1}</h2>
                </span>
                <div>
                    <p>
                        Hello! I am a <strong>Frontend Developer</strong> with <strong>4+ years of commercial experience</strong> specializing in building complex, high-performance web applications and enterprise platforms.
                    </p>
                    <p>
                        My core focus is scalable frontend architecture using <strong>Angular (versions 7 through 22)</strong> and <strong>React (17+)</strong> with <strong>TypeScript</strong>. I have deep practical experience with reactive programming (RxJS, Signals), state management (NgRx, Redux Toolkit, Zustand), modular styling systems, and unit/integration testing.
                    </p>
                    <p>
                        I focus on delivering clean code, robust architectural design patterns (SOLID, Clean Architecture), seamless API integration, and optimal UX performance. Open to challenging projects and remote collaboration.
                    </p>
                </div>
            </Fade>
        </section>
    );
}
