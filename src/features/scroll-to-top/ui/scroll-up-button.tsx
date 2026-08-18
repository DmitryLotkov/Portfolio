import React, { useEffect, useState } from 'react';
import arrow from '@/shared/assets/icons/up-arrow.svg';
import styles from './scroll-up-button.module.scss';
import { ScrollUpButtonProps } from '@/features';

export const ScrollUpButton: React.FC<ScrollUpButtonProps> = () => {
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
