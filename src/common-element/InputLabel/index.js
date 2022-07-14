import React from 'react';
import styled, { css } from 'styled-components';

const Label = styled.label`
    display: inline;
    ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `}

    ${(props) =>
        props.size &&
        css`
            font-size: ${props.size};
        `}

    ${(props) =>
        props.block &&
        css`
            display: block;
        `}
`;

const InputLabel = (props) => {
    return <Label {...props}>{props.children}</Label>;
};

export default InputLabel;
