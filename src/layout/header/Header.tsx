import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../assets/components/logo/Logo'
import { Menu } from '../../assets/components/menu/Menu'
import { Container } from '../../assets/components/Container'
import { FlexWrapper } from '../../assets/components/FlexWrapper'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo />
                    <Menu />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #9cf060;
`