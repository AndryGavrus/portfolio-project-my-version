import React from 'react'
import { FlexWrapper } from '../../assets/components/FlexWrapper'
import { SectionTitle } from '../../assets/components/SectionTitle'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Button } from '../../assets/components/Button'
import { font } from '../../styles/Common'

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column' align='center' justify='center' wrap='wrap'>
                <SectionTitle>Intrested in my Work</SectionTitle>
                <Hint>Download my cV to know more about me</Hint>
                <Button>Download CV</Button>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 60px 0 120px;
    text-align: center;

    @media ${theme.media.mobile} {
        padding: 30px 0 70px;
        }

    ${SectionTitle} {
        ${font({ weight: 600, Fmax: 56, Fmin: 30 })}

        @media ${theme.media.mobile} {
            margin-bottom: 9px;
        }
    }
`

const Hint = styled.span`
    margin-bottom: 25px;
    
    ${font({ weight: 400, Fmax: 19, Fmin: 10 })}
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #9e9e9e;

    @media ${theme.media.mobile} {
            margin-bottom: 18px;
        }
`
