import React, { useEffect, useState } from 'react';
import arrow from '@/shared/assets/icons/up-arrow.svg';
import styles from './scroll-up-button.module.scss';
import { ScrollUpButtonProps } from '@/features';

export const ScrollUpButton: React.FC<ScrollUpButtonProps> = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            type="button"
            className={`${styles.scrollUpButton} ${show ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <img src={arrow} alt="" aria-hidden="true" />
        </button>
    );
};

export default ScrollUpButton;
