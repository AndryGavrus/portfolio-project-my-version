import React from 'react'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import styled from 'styled-components'
import ava from '../../../assets/images/photo.jpg'
import { Photo } from '../../../assets/components/photo/Photo'
import { Container } from '../../../assets/components/Container'
import { theme } from '../../../styles/Theme'
import { Button } from '../../../assets/components/Button'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align='flex-start' justify='space-between'>
                <WelcomeInfo>
                    <span>Welcome </span>
                    <Name>I’m Andrey <Name>Gavrus</Name></Name>
                    <MainTitle>A Web Developer.</MainTitle>
                    <Button type="button">Download CV</Button>
                </WelcomeInfo>
                <Photo src={ava} alt="" height={'auto'} width={'40%'}/>
            </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    min-height: 100vh;
`

const WelcomeInfo = styled.div`
    align-self: center;

    font-family: "Poppins", sans-serif;
    color: ${theme.colors.font};


    span {
        font-weight: 300;
        font-size: 25px;
        letter-spacing: 0.36em;
        text-transform: uppercase;
    }
`

const Name = styled.h2`
        font-weight: 600;
        font-size: 67px;
`

const MainTitle =styled.h1`
    font-weight: 300;
    font-size: 19px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    margin-bottom: 45px;
`

