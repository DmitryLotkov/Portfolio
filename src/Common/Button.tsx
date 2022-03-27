import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from "./../Main/MainContent/MainContent.module.css"


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const Button: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    return (
        <div className={style.buttonWrapper}>
            <button
                className={style.sentButton}
                {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            />
        </div>
    )
}

export default Button
