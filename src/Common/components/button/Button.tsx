import { ElementType } from 'react';
import style from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button = <T extends ElementType = 'button'>({
    as,
    red,
    className,
    children,
    ...restProps
}: ButtonProps<T>) => {
    const Component = as || 'button';
    const combinedClassName = `${style.sentButton} ${red ? style.red : ''} ${className || ''}`.trim();

    return (
        <div className={style.buttonWrapper}>
            <Component className={combinedClassName} {...restProps}>
                {children}
            </Component>
        </div>
    );
};

export default Button;
