import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './skill-card.module.scss';
import { SkillCardProps } from '../model/types';

export function SkillCard({ skills, skillsDescription, pictures }: SkillCardProps) {
    return (
        <div className={style.skillsItem}>
            {typeof pictures === 'string' ? (
                <img className={style.image} src={pictures} alt={skills} />
            ) : (
                <FontAwesomeIcon className={style.image} icon={pictures} />
            )}
            <div className={style.skillText}>
                <h3 className={style.skillTitle}>
                    <span>{skills}</span>
                </h3>
                <div style={{ fontSize: '0.8rem' }}>
                    <span>{skillsDescription}</span>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;
