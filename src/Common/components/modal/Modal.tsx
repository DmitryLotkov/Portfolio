import React from 'react';
import style from './Modal.module.scss';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
    enableBackground,
    backgroundStyle,
    backgroundOnClick = () => {},
    modalStyle,
    modalOnClick = () => {},
    show,
    children,
    className,
}) => {
    if (!show) return null;

    return (
        <>
            {enableBackground && (
                <div
                    className={style.modalOverlay}
                    style={backgroundStyle}
                    onClick={backgroundOnClick}
                />
            )}
            <div
                className={`${style.modalContent} ${className || ''}`.trim()}
                style={modalStyle}
                onClick={modalOnClick}
            >
                {children}
            </div>
        </>
    );
};

export default Modal;
