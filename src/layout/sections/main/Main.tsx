import React from 'react'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import styled from 'styled-components'
import ava from '../../../assets/images/photo.jpg'
import { Photo } from '../../../assets/components/photo/Photo'
import { Container } from '../../../assets/components/Container'
import { theme } from '../../../styles/Theme'
import { Button } from '../../../assets/components/Button'
import { font } from '../../../styles/Common'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align='flex-start' justify='space-between' wrap='wrap-reverse'>
                <WelcomeInfo>
                    <span>Welcome </span>
                    <Name>I’m Andrey <Name>Gavrus</Name></Name>
                    <MainTitle>A Web Developer.</MainTitle>
                    <Button type="button">Download CV</Button>
                </WelcomeInfo>
                <Photo src={ava} alt="" height={'778px'} width={'560px'}/>
            </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    min-height: 100vh;

    ${FlexWrapper}{
        @media ${theme.media.mobile} {
        justify-content: center;
        text-align: center;
    }
    }


    ${Photo} {
        @media ${theme.media.mobile} {
            height: 440px;
            width: 300px;
            margin-bottom: 30px;
        }
    }
`

const WelcomeInfo = styled.div`
    align-self: center;

    font-family: "Poppins", sans-serif;
    color: ${theme.colors.font};


    span {
        ${font({weight: 300, Fmax: 25, Fmin: 17})}
        letter-spacing: 0.36em;
        text-transform: uppercase;
    }
`

const Name = styled.p`
    ${font({weight: 600, Fmax: 67, Fmin: 33})}
    /* white-space: nowrap; */
`

const MainTitle =styled.h1`
    ${font({weight: 300, Fmax: 19, Fmin: 13})}
    letter-spacing: 0.01em;
    text-transform: uppercase;
    margin-bottom: 45px;

    @media ${theme.media.mobile} {
        margin-bottom: 30px;
    }
`

