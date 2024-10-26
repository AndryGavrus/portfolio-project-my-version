import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../assets/components/icon/Icon'
import { FlexWrapper } from '../../../../../assets/components/FlexWrapper'
import { theme } from '../../../../../styles/Theme'


type SkillPropsType = {
    iconId?: string
    title?: string
    mark?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <FlexWrapper direction='column' justify='center' align='center'>
            <RoundPB>
            <Mark>{props.mark}</Mark>
            </RoundPB>
            {/* <Icon iconId={props.iconId} width='280' height='280' viewBox='0 0 280 280' />
            <Mark>{props.mark}</Mark> */}
            <SkillName>{props.title}</SkillName>
        </FlexWrapper>)
}

const RoundPB = styled.div<SkillPropsType>`
    width: 280px;
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:conic-gradient(#3c1dff 0%, #15b9b9 80%, transparent 0);
        /* background:conic-gradient(#3c1dff 0%, #15b9b9 calc(${props=> props.mark} * 20 * 1%), transparent 0); */
        transform: rotate(90deg);
        mask: radial-gradient(white 55%, transparent 0);
        mask-mode: alpha;
        -webkit-mask: radial-gradient(#0000 55%, #000 0);
        -webkit-mask-mode: alpha;
    }
`

const StyledSkill = styled.div`
    position: relative;
`

const Mark = styled.span`
    display: flex;
    position: absolute;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 56px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${theme.colors.font};
`


const SkillName = styled.h3`
    text-align: center;
    margin-top: 45px;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${theme.colors.font};
`