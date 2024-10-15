import React from 'react'
import styled from 'styled-components'
import { Photo } from '../../../../assets/components/photo/Photo'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'

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
                <Photo src={props.src} width='600px' height='450px'/>
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
`

const ImageWrapper = styled.div`
    position: relative;


    ${FlexWrapper} {
        opacity: 0;
        position: absolute;
        top: 90%;
        transform: translateY(-100%);
    }

    &:hover{
            ${FlexWrapper} {
                opacity: 1;
                z-index: 1;
            }
        }
`

const CompName = styled.h3`
    color: white;
`

const Position = styled.h4`
    color: white;
`

const Term = styled.span`
    color: white;
`