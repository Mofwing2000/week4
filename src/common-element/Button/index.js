import React from 'react';
import styled, { css } from 'styled-components';
const ButtonContainer = styled.button`
    display: block;
    width: 100%;
    border-radius: 9999px;
    height: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s 0s ease;
    ${(props) =>
        props.primary === true &&
        css`
            background-color: #4a7dff;
            &:hover {
                background-color: #4aa7ff;
            }
        `}
    ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `};
`;

const Button = (props) => {
    console.log(props.primary);
    return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default Button;
