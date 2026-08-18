import { useTypewriter } from '@/shared/hooks';
import styles from './typewriter.module.scss';
import { TypewriterProps } from '@/shared';

export const Typewriter = ({
    text,
    speed = 70,
    eraseSpeed = 35,
    delayBeforeErase = 1500,
    delayBeforeType = 400,
    startDelay = 0,
    loop = true,
    className,
    cursor = '|',
    cursorClassName,
}: TypewriterProps) => {
    const { currentText } = useTypewriter({
        words: text,
        speed,
        eraseSpeed,
        delayBeforeErase,
        delayBeforeType,
        startDelay,
        loop,
    });

    return (
        <span className={className}>
            <span>{currentText}</span>
            <span className={`${styles.cursor} ${cursorClassName || ''}`.trim()}>
                {cursor}
            </span>
        </span>
    );
};

export default Typewriter;
