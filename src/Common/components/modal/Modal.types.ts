import { CSSProperties, ReactNode } from 'react';

export interface ModalProps {
    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: () => void;
    modalStyle?: CSSProperties;
    modalOnClick?: () => void;
    show: boolean;
    children?: ReactNode;
    className?: string;
}
