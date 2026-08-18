import style from './modal.module.scss';
import { ModalProps } from '@/shared';

export const Modal = ({
    enableBackground,
    backgroundStyle,
    backgroundOnClick = () => {},
    modalStyle,
    modalOnClick = () => {},
    show,
    children,
    className,
}: ModalProps) => {
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
