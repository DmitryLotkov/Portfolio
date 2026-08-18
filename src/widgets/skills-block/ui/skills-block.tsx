import { Fade } from 'react-awesome-reveal';
import style from './skills-block.module.scss';
import commonStyle from '@/shared/styles/typography.module.scss';
import { SkillCard, skillsData } from '@/entities/skill';
import { titles } from '@/shared/config';

export function SkillsBlock() {
    return (
        <section id="skills" className={style.skillsBlock}>
            <Fade cascade triggerOnce>
                <span>
                    <h2 className={commonStyle.h2}>{titles.title2}</h2>
                </span>

                <div className={style.skillsContainer}>
                    {skillsData &&
                        skillsData.data.map((item) => (
                            <SkillCard
                                key={item.skill}
                                skills={item.skill}
                                skillsDescription={item.skillDescription}
                                pictures={item.picture}
                            />
                        ))}
                </div>
            </Fade>
        </section>
    );
}
