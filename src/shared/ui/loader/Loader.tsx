import CircularProgress from '@mui/material/CircularProgress';
import ReactDOM from 'react-dom';
import styles from './loader.module.scss';

export const Loader = () => {
    return (
        ReactDOM.createPortal(
            <>
                <div className={styles.loaderBlock} />
                <div className={styles.progress}>
                    <CircularProgress size={50} />
                </div>
            </>,
            document.body
        )
    );
};

export default Loader;
