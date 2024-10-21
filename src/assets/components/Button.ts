import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Button = styled.button`
    color: ${theme.colors.font};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 25px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    border-radius: 10px;
    width: 277px;
    height: 71px;
    background: ${theme.colors.accent};

    &:hover{
        /* font-weight: 600; */
        background: linear-gradient(180deg, #3c1dff 0%, #15b9b9 100%)
    }
`