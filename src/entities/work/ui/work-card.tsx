import style from './work-card.module.scss';
import { WorkCardProps } from '@/entities';

export function WorkCard({ description, title, src, href }: WorkCardProps) {
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
