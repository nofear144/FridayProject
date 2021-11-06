import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, JSXElementConstructor, ReactChild} from 'react'
import s from "./select.module.css"

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

          <select className={s.selectStyle} value={options} onChange={onChangeCallback}  {...restProps}>
              {mappedOptions}
          </select>

    )
}

export default SuperSelect
