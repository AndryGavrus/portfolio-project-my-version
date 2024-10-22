import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../assets/components/icon/Icon'
import { FlexWrapper } from '../../../../../assets/components/FlexWrapper'
import { theme } from '../../../../../styles/Theme'


type SkillPropsType = {
    iconId: string
    title: string
    mark: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <FlexWrapper direction='column' justify='center' align='center'>
            <Icon iconId={props.iconId} width='280' height='280' viewBox='0 0 280 280' />
            <Mark>{props.mark}</Mark>
            <SkillName>{props.title}</SkillName>
        </FlexWrapper>)
}

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