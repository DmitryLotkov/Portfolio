import { Fade } from 'react-awesome-reveal';
import style from './Works.module.scss';
import commonStyle from '@/common/styles/typography.module.scss';
import { WorkItem } from './WorkItem';
import { worksData } from './works.data';
import { titles } from '@/common/data/common-data';

export function Works() {
    return (
        <section id="works" className={style.worksContainer}>
            <Fade cascade triggerOnce>
                <h2 className={commonStyle.h2}>{titles.title3}</h2>

                <div className={style.worksContent}>
                    {worksData.data.map((item) => (
                        <WorkItem
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

export default Works;
