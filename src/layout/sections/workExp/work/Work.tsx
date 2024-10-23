import React from 'react'
import styled from 'styled-components'
import { Photo } from '../../../../assets/components/photo/Photo'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { theme } from '../../../../styles/Theme'

type WorkPropsType = {
    src: string
    compName: string
    position: string
    term: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Photo src={props.src} width='100%' height='100%'/>
                <FlexWrapper direction='column'>
                    <CompName>{props.compName}</CompName>
                    <Position>{props.position}</Position>
                    <Term>{props.term}</Term>
                </FlexWrapper>
            </ImageWrapper>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    overflow: hidden;
    border: 1px solid;
    width: 590px;
    height: 450px;
`

const ImageWrapper = styled.div`
    position: relative;


    ${FlexWrapper} {
        height: fit-content;
        opacity: 0;
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        left: 70px;
        z-index: 1;
        transition: opacity .5s, transform 1.5s
    }

    &:hover{
            ${FlexWrapper} {
                opacity: 1;
                transform: translateY(-72px);
                transition: opacity 2s, transform 1s 
            }
        }
`

const CompName = styled.h3`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 25px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${theme.colors.font};
`

const Position = styled.h4`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${theme.colors.font};
`

const Term = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${theme.colors.font};
`