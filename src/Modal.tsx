import React, {CSSProperties} from 'react';
import style from "./modalStyle.module.scss"

interface IModal {
    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: () => void;
    modalStyle?: CSSProperties;
    modalOnClick?: () => void;
    show: boolean
}

export const Modal: React.FC<IModal> = (
    {
        enableBackground,
        backgroundStyle,
        backgroundOnClick = () => {},
        modalStyle,
        modalOnClick = () => {},
        show,
        children,
    }
) => {

    if (!show) return null;

    return (
        <>
            {enableBackground && <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vw',
                    height: '100vh',
                    zIndex: 20,

                    ...backgroundStyle,
                }}
                onClick={backgroundOnClick}
            />}
            <div className={style.modal}
                style={{
                    ...modalStyle,
                }}
                onClick={modalOnClick}
            >
                {children}
            </div>
        </>
    );
};

