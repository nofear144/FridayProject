import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from 'react'


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        onChange && onChange(e)
        // onChange, onChangeOption
    }


    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (// map options with key
        <label key={name + '-' + i}>

          {/*  <Checkbox
                checked={o===value}
                onChange={onChangeCallback}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                value={o}
            />*/}
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
