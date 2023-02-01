import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            $:active {
                background: ${darken(0.1, selected)};
            }
            ${props =>
                props.outline &&
                css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    transition: all 0.3s ease-in-out;
                    &:hover {
                        background: ${selected};
                        color: #fff;
                    }
                `}
        `;
    }}
`;

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem',
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem',
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem',
    },
};

const sizeStyles = css`
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`;

const StyledButton = styled.button`
    /* common */
    display: inline-block;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding: 0 1rem;

    /* size */
    ${sizeStyles}

    /* color */
    ${colorStyles}

    /* etc */
    & + & {
        margin-left: 1rem;
    }
`;

const Button = ({ children, color, size, outline, ...rest }) => {
    return (
        <StyledButton color={color} size={size} outline={outline} {...rest}>
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default Button;
