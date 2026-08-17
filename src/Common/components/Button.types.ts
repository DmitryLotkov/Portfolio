import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

export type ButtonOwnProps<T extends ElementType = ElementType> = {
    as?: T;
    red?: boolean;
    className?: string;
    children?: ReactNode;
};

export type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;
