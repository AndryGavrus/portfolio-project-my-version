import React from 'react'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import ava from '../../../assets/images/photo.jpg'
import styled from 'styled-components'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align='center' justify='space-around'>
                <div>
                    <span>Welcome </span>
                    <Name>I’m Andrey Gavrus</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                    <button type="button">Download CV</button>
                </div>
                <Photo src={ava} alt="" />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    background-color: aquamarine;
    min-height: 100vh;
`

const Name = styled.h2`
    
`

const MainTitle =styled.h1`
    
`

const Photo = styled.img`
    width: 566px;
    height: 778px;
    object-fit: cover;
`