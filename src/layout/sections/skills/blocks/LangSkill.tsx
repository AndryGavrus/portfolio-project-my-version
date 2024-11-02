import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { theme } from '../../../../styles/Theme'
import { font } from '../../../../styles/Common'

type LangSkillPropsType = {
    title: string
    mark: string
    progress?: number | null
}

type ProgBarPropsType = {
    progress?: number | null
}

export const LangSkill = (props: LangSkillPropsType) => {
    return (
        <FlexWrapper direction='column'>
            <LangTitle>{props.title}</LangTitle>
            <Wrapper>
                <ProgBar progress={props.progress}>
                    <Mark>{props.mark}</Mark>
                </ProgBar>
            </Wrapper>
        </FlexWrapper>
    )
}


const LangTitle = styled.h3`
    ${font({ weight: 600, Fmax: 29, Fmin: 18 })}
    letter-spacing: 0.05em;
    text-transform: capitalize;
`

const Wrapper = styled.div`
    padding-top: 15px;
    display: inline-block;
    text-align: end;
    border: 1px solid silver;

    @media ${theme.media.mobile} {
        padding-top: 9px;
        }
`

const ProgBar = styled.div<ProgBarPropsType>`
    height: 24px;
    width: ${props=> props.progress}%;
    border-radius: 50px;
    background-image:linear-gradient(90deg, #3c1dff 10.42%, #14c9c9 75%);

    position: relative;

    @media ${theme.media.mobile} {
        height: 14px;
        }
`



const Mark = styled.span`
    position: absolute;
    top: -20px;
    right: 0;

    ${font({ weight: 600, Fmax: 14, Fmin: 8 })}
    letter-spacing: 0.05em;
    text-transform: capitalize;

    @media ${theme.media.mobile} {
        top: -10px;
        }
`