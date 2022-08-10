import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import React from 'react';

import styles from "./Loader.module.scss"

export const Loader = () => {
    return (
        <div className={styles.loaderBlock}>
            <div className={styles.progress}>
                <CircularProgress size={50}/>
            </div>
        </div>
    );
};

