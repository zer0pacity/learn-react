import styled, { css } from "styled-components";
import { darken, lighten } from 'polished';

const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
            ${props =>
                props.outline &&
                css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
            `}
        `;
    }}
`;

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem',
        paddingTop: '0.875rem',
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem',
        paddingTop: '0.625rem',
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem',
        paddingTop: '0.4375rem',
    }
};

const sizeStyles = css`
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
        padding-top: ${sizes[size].paddingTop};
    `}
`;

const fullWidthStyle = css`
    ${props =>
        props.fullWidth &&
        css`
            width: 100%;
            justify-content: center;
            & + & {
                margin-left: 0;
                margin-top: 1rem;
            };
        `}
`;

const StyledButton = styled.button`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    
    ${sizeStyles}
    
    ${colorStyles}
    
    & + & {
        margin-left: 1rem;
    }

    ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth,  ...rest }) {
    return<StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default Button;