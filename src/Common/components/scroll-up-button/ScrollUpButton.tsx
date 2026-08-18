import React, { useEffect, useState } from 'react';
import arrow from '@/assets/icons/up-arrow.svg';
import styles from './ScrollUpButton.module.scss';
import { ScrollUpButtonProps } from './ScrollUpButton.types';

export const ScrollUpButton: React.FC<ScrollUpButtonProps> = ({ speed = 10 }) => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) setShow(true);
        else setShow(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            type="button"
            className={styles.scrollUpButton}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <img src={arrow} alt="Scroll up arrow" />
        </button>
    );
};

export default ScrollUpButton;
