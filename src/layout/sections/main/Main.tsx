import React from 'react'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import styled from 'styled-components'
import ava from '../../../assets/images/photo.jpg'
import { Photo } from '../../../assets/components/photo/Photo'

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
                <Photo src={ava} alt="" height={'778px'} width={'566px'}/>
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

