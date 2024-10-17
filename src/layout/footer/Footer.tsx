import React from 'react'
import { FlexWrapper } from '../../assets/components/FlexWrapper'
import { SectionTitle } from '../../assets/components/SectionTitle'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align='center' justify='center'>
                <SectionTitle>Intrested in my Work</SectionTitle>
                <Hint>Download my cV to know more about me</Hint>
                <Btn>Download CV</Btn>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #cdfff6;
`

const Hint = styled.span`
    
`

const Btn = styled.button`
    
`