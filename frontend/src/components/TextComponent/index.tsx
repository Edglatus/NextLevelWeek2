import React, { TextareaHTMLAttributes, Ref } from 'react';
import { StyledText } from './styles';

interface TextProps extends TextareaHTMLAttributes<HTMLTextAreaElement>
{
    textId: string;
    title: string;
    className?: 'text-block';
    ref?: Ref<HTMLTextAreaElement>;
}

const TextComponent: React.FC<TextProps> =
    React.forwardRef(({ textId, title, ...props }, ref: Ref<HTMLTextAreaElement>) => {
        return (
            <StyledText className={props.className}>
                <label htmlFor={textId}>{title}</label>
                <textarea id={textId} name={textId} ref={ref} />
            </StyledText>
        );
});


export default TextComponent;
