import { useEffect, useMemo, useState } from 'react';
import { UseTypewriterOptions, UseTypewriterReturn } from '@/shared';

export * from './use-typewriter.types';

export const useTypewriter = ({
    words,
    speed = 70,
    eraseSpeed = 35,
    delayBeforeErase = 1500,
    delayBeforeType = 400,
    startDelay = 0,
    loop = true,
}: UseTypewriterOptions): UseTypewriterReturn => {
    const textArray = useMemo(() => (Array.isArray(words) ? words : [words]), [words]);

    const [textIndex, setTextIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isStarted, setIsStarted] = useState(startDelay === 0);

    useEffect(() => {
        if (startDelay > 0) {
            const timer = setTimeout(() => setIsStarted(true), startDelay);
            return () => clearTimeout(timer);
        }
        setIsStarted(true);
    }, [startDelay]);

    useEffect(() => {
        if (!isStarted || textArray.length === 0) return;

        const currentWord = textArray[textIndex] || '';

        if (!loop && textIndex === textArray.length - 1 && subIndex === currentWord.length) {
            return;
        }

        if (!isDeleting && subIndex === currentWord.length) {
            if (textArray.length === 1 && !loop) return;

            const timer = setTimeout(() => setIsDeleting(true), delayBeforeErase);
            return () => clearTimeout(timer);
        }

        if (isDeleting && subIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % textArray.length);
            return;
        }

        const delay = isDeleting
            ? eraseSpeed
            : subIndex === 0
                ? delayBeforeType
                : speed;

        const timer = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, delay);

        return () => clearTimeout(timer);
    }, [
        subIndex,
        isDeleting,
        textIndex,
        textArray,
        speed,
        eraseSpeed,
        delayBeforeErase,
        delayBeforeType,
        isStarted,
        loop,
    ]);

    const currentWord = textArray[textIndex] || '';
    const currentText = currentWord.substring(0, subIndex);

    return { currentText, isDeleting };
};
