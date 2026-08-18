import style from './NameAndProf.module.scss';
import { Typewriter } from '@/common/components';

export function NameAndProf() {
    return (
        <div className={style.nameAndProf}>
            <h3 className={style.userName}>
                <span className={style.textWeight}>Dmitry</span> Lotkov
            </h3>
            <div className={style.professionName}>
                <Typewriter text={'Frontend Developer'} />
            </div>
        </div>
    );
}

export default NameAndProf;
