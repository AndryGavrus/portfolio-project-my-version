import React from 'react'
import { FlexWrapper } from '../../assets/components/FlexWrapper'
import { SectionTitle } from '../../assets/components/SectionTitle'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Button } from '../../assets/components/Button'

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column' align='center' justify='center'>
                <SectionTitle>Intrested in my Work</SectionTitle>
                <Hint>Download my cV to know more about me</Hint>
                <Button>Download CV</Button>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg}
`

const Hint = styled.span`
    
`
