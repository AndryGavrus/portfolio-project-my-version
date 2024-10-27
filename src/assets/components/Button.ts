import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const Button = styled.button`
    ${font({weight: 400, Fmax: 25, Fmin: 17})}
    letter-spacing: 0.05em;
    text-transform: capitalize;

    border-radius: 10px;
    width: 277px;
    height: 71px;
    background: ${theme.colors.accent};

    @media ${theme.media.mobile} {
        width: 191px;
        height: 49px;
    }

    &:hover{
        /* font-weight: 600; */
        background: linear-gradient(180deg, #3c1dff 0%, #15b9b9 100%)
    }
`