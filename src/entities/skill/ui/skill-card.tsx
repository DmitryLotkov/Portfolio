import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './skill-card.module.scss';
import { SkillCardProps } from '@/entities';

export function SkillCard({ skills, skillsDescription, pictures, tags }: SkillCardProps) {
    return (
        <div className={style.skillsItem}>
            <div className={style.header}>
                <div className={style.iconWrapper}>
                    {typeof pictures === 'string' ? (
                        <img className={style.image} src={pictures} alt={skills} />
                    ) : (
                        <FontAwesomeIcon className={style.icon} icon={pictures} />
                    )}
                </div>
                <h3 className={style.skillTitle}>{skills}</h3>
            </div>
            <p className={style.skillDescription}>{skillsDescription}</p>
            {tags && tags.length > 0 && (
                <div className={style.tagsContainer}>
                    {tags.map((tag) => (
                        <span key={tag} className={style.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
