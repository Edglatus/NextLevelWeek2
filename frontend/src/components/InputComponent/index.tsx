import React, { InputHTMLAttributes, Ref } from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{
    inputId: string;
    title: string;
    className?: 'input-block';
    ref?: Ref<HTMLInputElement>;
}

const InputComponent: React.FC<InputProps> =
    React.forwardRef(({ inputId, title, ...props }, ref: Ref<HTMLInputElement>) => {
        return (
            <StyledInput className={props.className}>
                <label htmlFor={inputId}>{title}</label>
                <input
                    type={props.type} name={inputId} id={inputId} ref={ref}
                />
            </StyledInput>
        );
});


export default InputComponent;
