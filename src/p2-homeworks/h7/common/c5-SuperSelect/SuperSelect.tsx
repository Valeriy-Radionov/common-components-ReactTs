import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, index) => {
        return <option key={index}>{el}</option>
    }) : [];
    // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let optionValue = e.currentTarget.options
        if (onChangeOption) {
            onChangeOption(optionValue)
        }

        // подумать про onChange
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
