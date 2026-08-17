import React from 'react';
import { useTypewriter, UseTypewriterOptions } from '../hooks/useTypewriter';
import styles from './Typewriter.module.scss';

export interface TypewriterProps extends Omit<UseTypewriterOptions, 'words'> {
    text: string | string[];
    className?: string;
    cursor?: string;
    cursorClassName?: string;
}

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

