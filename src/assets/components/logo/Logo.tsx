import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'

export const Logo = () => {
    return (
        <LogoLink href="#">Andry Gavrus</LogoLink>
    )
}

const LogoLink = styled.a`
    ${font({family:'Alex Brush', weight: 400, Fmax: 32, Fmin: 14 })}


    &:hover{
        font-weight: 600;
    }
`