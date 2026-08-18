import { Fade } from 'react-awesome-reveal';
import style from './works-block.module.scss';
import commonStyle from '@/shared/styles/typography.module.scss';
import { WorkCard, worksData } from '@/entities/work';
import { titles } from '@/shared/config';

export function WorksBlock() {
    return (
        <section id="works" className={style.worksContainer}>
            <Fade cascade triggerOnce>
                <h2 className={commonStyle.h2}>{titles.title3}</h2>

                <div className={style.worksContent}>
                    {worksData.data.map((item) => (
                        <WorkCard
                            key={item.title}
                            description={item.description}
                            title={item.title}
                            href={item.href}
                            src={item.src}
                        />
                    ))}
                </div>
            </Fade>
        </section>
    );
}

export default WorksBlock;
