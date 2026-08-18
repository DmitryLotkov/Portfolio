import { Fade } from 'react-awesome-reveal';
import style from './Skills.module.scss';
import commonStyle from '@/common/styles/typography.module.scss';
import { SkillItem } from './SkillItem';
import { skillsData } from './skills.data';
import { titles } from '@/common/data/common-data';

export function Skills() {
    return (
        <section id="skills" className={style.skillsBlock}>
            <Fade cascade triggerOnce>
                <span>
                    <h2 className={commonStyle.h2}>{titles.title2}</h2>
                </span>

                <div className={style.skillsContainer}>
                    {skillsData &&
                        skillsData.data.map((item) => (
                            <SkillItem
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

export default Skills;
