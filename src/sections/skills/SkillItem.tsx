import style from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillItemProps } from './SkillItem.types';

export function SkillItem({ skills, skillsDescription, pictures }: SkillItemProps) {
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
                <div style={{ fontSize: '1rem' }}>
                    <span>{skillsDescription}</span>
                </div>
            </div>
        </div>
    );
}

export default SkillItem;
