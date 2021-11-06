import React,{ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import s from './SuperButton.module.scss'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {


    return (
        <div className={s.btnBox}>
            <button className={`${s.btn} ${s.btnSubmit}`} type="submit">submit</button>
        </div>

    )
}

export default SuperButton