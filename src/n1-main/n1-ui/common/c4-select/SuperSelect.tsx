import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, JSXElementConstructor, ReactChild} from 'react'
//import s from "./select.module.css"
import s from "./SuperInputSelect.module.scss"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options.map((o, i) =>
        <option key={i} value={o}>{o}</option>) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        {
            if (onChangeOption)
                onChangeOption(e.currentTarget.value)
        }

        onChange && onChange(e)


        // onChange, onChangeOption
    }

    return (
        <div className={s.wrap} >

            <div className={s.select}>
                <select className={s.selectText} required>
                    <option value="" disabled selected></option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.selectLabel}>Select</label>
            </div>
        </div>
    )
}

export default SuperSelect
