import React, { SelectHTMLAttributes, Ref } from 'react';
import { StyledSelect } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>
{
    selectId: string;
    title: string;
    className?: 'select-block';
    options: Array<{
        value: string;
        label: string;
    }>;
    ref?: Ref<HTMLSelectElement>;
}

const SelectComponent: React.FC<SelectProps> =
    React.forwardRef(({ selectId, title, options, ...props }, ref: Ref<HTMLSelectElement>) => {
        return (
            <StyledSelect className={props.className}>
                <label htmlFor={selectId}>{title}</label>
                <select ref={ref} id={selectId} name={selectId} defaultValue="">
                    <option value="" disabled hidden>Pick a {title}</option>
                    {options.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                </select>
            </StyledSelect>
        );
});


export default SelectComponent;
