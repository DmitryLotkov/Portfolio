import styles from './footer.module.scss';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.LastContactContainer}>
            <span>© {year} All Rights Reserved.</span>
        </footer>
    );
};
