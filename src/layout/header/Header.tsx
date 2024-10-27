import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../assets/components/logo/Logo'
import { Menu } from '../../assets/components/menu/Menu'
import { Container } from '../../assets/components/Container'
import { FlexWrapper } from '../../assets/components/FlexWrapper'
import { MobileMenu } from '../../assets/components/menu/MobileMenu'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo />
                    <Menu />
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`