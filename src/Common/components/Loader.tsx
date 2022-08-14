import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import React from 'react';
import ReactDOM from 'react-dom';

import styles from "./Loader.module.scss"

export const Loader = () => {
    return (
        ReactDOM.createPortal(
            <>
                <div className={styles.loaderBlock}/>
                <div className={styles.progress}>
                    <CircularProgress size={50}/>
                </div>
            </>, document.body)

    );
};

