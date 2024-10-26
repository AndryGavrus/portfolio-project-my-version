import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { theme } from '../../../../styles/Theme'

type LangSkillPropsType = {
    photo: string
    photoWidth: string
    photoVB: string
    title: string
    mark: string
}

export const LangSkill = (props: LangSkillPropsType) => {
    return (
        <FlexWrapper direction='column'>
            <LangTitle>{props.title}</LangTitle>
            <Wrapper>
                <ProgBar>
                    <Mark>{props.mark}</Mark>
                </ProgBar>
            </Wrapper>
        </FlexWrapper>
    )
}




const LangTitle = styled.h3`
    font-family:"Poppins", sans-serif;
    font-weight: 600;
    font-size: 29px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color:${theme.colors.font};
`

const Wrapper = styled.div`
    padding-top: 15px;
    display: inline-block;
    text-align: end;
    border: 1px solid silver;
`

const ProgBar = styled.div`
/* fluent 100
advanced 85
good 50
beginner 25  */

    height: 25px;
    width: 80%;
    border-radius: 50px;
    background-image:linear-gradient(90deg, #3c1dff 10.42%, #14c9c9 75%);

    position: relative;
`



const Mark = styled.span`
    position: absolute;
    top: -20px;
    right: 0;

    font-family:"Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color:${theme.colors.font};

`