import { Fade } from 'react-awesome-reveal';
import style from './skills-block.module.scss';
import { SkillCard, skillsData } from '@/entities/skill';
import { titles } from '@/shared/config';

export function SkillsBlock() {
    return (
        <section id="skills" className={style.skillsBlock}>
            <Fade triggerOnce>
                <h2 className={style.title}>{titles.title2}</h2>

                <div className={style.categorySection}>
                    <div className={style.categoryHeader}>
                        <h3 className={style.categoryTitle}>Frontend Engineering</h3>
                        <p className={style.categorySubtitle}>
                            Expertise in Angular & React ecosystems, reactive programming, state management, and modern UI architecture.
                        </p>
                    </div>
                    <div className={style.skillsGrid}>
                        {skillsData.frontend.map((item) => (
                            <SkillCard
                                key={item.skill}
                                skills={item.skill}
                                skillsDescription={item.skillDescription}
                                pictures={item.picture}
                                tags={item.tags}
                            />
                        ))}
                    </div>
                </div>

                <div className={style.categorySection}>
                    <div className={style.categoryHeader}>
                        <h3 className={style.categoryTitle}>Backend, Databases & DevOps</h3>
                        <p className={style.categorySubtitle}>
                            Server-side development with Node.js & NestJS, relational/NoSQL data modeling, API design.
                        </p>
                    </div>
                    <div className={style.skillsGrid}>
                        {skillsData.backend.map((item) => (
                            <SkillCard
                                key={item.skill}
                                skills={item.skill}
                                skillsDescription={item.skillDescription}
                                pictures={item.picture}
                                tags={item.tags}
                            />
                        ))}
                    </div>
                </div>
            </Fade>
        </section>
    );
}
