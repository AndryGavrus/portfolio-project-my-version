import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../styles/Theme'

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    <MenuItem>
                        <Link href="#">Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#">Portfolio</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#">Contact</Link>
                    </MenuItem>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div <{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: #5a6c6c80;
    display: none;

    ${props => props.isOpen && css<{isOpen:boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}

    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen:boolean}>`
            transform: rotate(-45deg)
        `}

        &::after{
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform: rotate(45deg) translateY(10px);
                width: 36px;
            `}
        }
    }
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