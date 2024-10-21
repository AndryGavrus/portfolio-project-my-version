import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

export const Menu = () => {
    return (
        <StyledMenu>
            <MenuItem>
                <Link href="#">Home</Link>
            </MenuItem>
            <MenuItem>
                <Link href="#">Portfolio</Link>
            </MenuItem>
            <MenuItem>
                <Link href="#">Contact</Link>
            </MenuItem>
        </StyledMenu>
    )
}

const StyledMenu = styled.ul`
    display: flex;
    gap: 30px;
`

const MenuItem = styled.li`
    position: relative;

    &::before {
        content: '';
        height: 2px;
        background-color: ${theme.colors.font};

        position: absolute;
        top: 80%;
        left: -5px;
        right: -5px;
        z-index: 1;

        display: none;
    }

    &:hover{
        &::before{
            display: inline-block;
        }
    }
`

const Link = styled.a`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: ${theme.colors.font};
`