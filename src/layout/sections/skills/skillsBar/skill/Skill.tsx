import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../assets/components/icon/Icon'
import { FlexWrapper } from '../../../../../assets/components/FlexWrapper'
import { theme } from '../../../../../styles/Theme'
import { font } from '../../../../../styles/Common'


type SkillPropsType = {
    title?: string
    mark?: number
}

export const Skill = (props: SkillPropsType) => {
    return (
        <FlexWrapper direction='column' justify='center' align='center'>
            <RoundPB mark={props.mark}>
                <Mark>{props.mark}</Mark>
            </RoundPB>
            <SkillName>{props.title}</SkillName>
        </FlexWrapper>)
}

type RoundPBPropsType = {
    mark?: number | null
}

const RoundPB = styled.div<RoundPBPropsType>`
    width: 280px;
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;

    @media ${theme.media.mobile} {
        width: 83px;
        }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:conic-gradient(#3c1dff 0%, #15b9b9 calc(${props=> props.mark} * 20 * 1%), transparent 0);
        transform: rotate(90deg);
        mask: radial-gradient(white 55%, transparent 0);
        mask-mode: alpha;
        -webkit-mask: radial-gradient(#0000 55%, #000 0);
        -webkit-mask-mode: alpha;
    }
`

const Mark = styled.span`
    display: flex;
    position: absolute;

    ${font({ weight: 600, Fmax: 56, Fmin: 19 })}
    letter-spacing: 0.05em;
    text-transform: capitalize;
`


const SkillName = styled.h3`
    text-align: center;
    margin-top: 45px;

    ${font({ weight: 600, Fmax: 20, Fmin: 7 })}
    letter-spacing: 0.05em;
    text-transform: capitalize;

    @media ${theme.media.mobile} {
        margin-top: 15px;
        }
`