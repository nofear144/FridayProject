import React, {ButtonHTMLAttributes, MouseEvent, DetailedHTMLProps} from "react"
import s from './SuperButton.module.scss'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    variant?: "primary" | "secondary",
    onClick?: () => void

}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        onClick,
        variant,
        name,
         className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const onClickCallback = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        onClick
        && onClick(e)

    }

    let buttonStyle = `${s.btn} ${s.btnPrimary}`
    if (variant === "secondary") {
        buttonStyle = `${s.btn} ${s.btnSecondary}`
    }



    return (
        <div className={s.btnBox}>
            <button onClick={onClickCallback} className={`${buttonStyle} ${className}`} {...restProps} type="submit">{name}</button>
        </div>

    )
}

export default SuperButton