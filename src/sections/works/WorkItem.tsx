import style from './Works.module.scss';
import { WorkItemProps } from './WorkItem.types';

export function WorkItem({ description, title, src, href }: WorkItemProps) {
    return (
        <div className={style.worksItem}>
            <img className={style.img} src={src} alt={title} />
            <div className={style.titleContent}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <a href={href} className={style.showLink} target="_blank" rel="noopener noreferrer">
                Show
            </a>
        </div>
    );
}

export default WorkItem;
