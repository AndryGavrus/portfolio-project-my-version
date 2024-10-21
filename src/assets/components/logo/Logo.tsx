import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

export const Logo = () => {
    return (
        <LogoLink href="#">Andry Gavrus</LogoLink>
    )
}

const LogoLink = styled.a`
    font-family: "Alex Brush", sans-serif;
    font-weight: 400;
    font-size: 32px;
    color: ${theme.colors.font};

    &:hover{
        font-weight: 600;
    }
`