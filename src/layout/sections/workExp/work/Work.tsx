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
                <Photo src={props.src} width='auto' height='450px'/>
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
    margin-top: 85px;
`

const ImageWrapper = styled.div`
    position: relative;


    ${FlexWrapper} {
        opacity: 0;
        position: absolute;
        top: 100%;
        left:10%;
        transform: translateY(-30%);
    }

    &:hover{
            ${FlexWrapper} {
                opacity: 1;
                z-index: 1;
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