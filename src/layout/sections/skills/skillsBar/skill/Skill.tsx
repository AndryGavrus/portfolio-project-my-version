import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../assets/components/icon/Icon'
import { FlexWrapper } from '../../../../../assets/components/FlexWrapper'


type SkillPropsType = {
    iconId: string
    title: string
    mark: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper justify='center' align='center'>
                <Icon iconId={props.iconId} width='280' height='280' viewBox='0 0 280 280'/>
                <Mark>{props.mark}</Mark>
            </FlexWrapper>
            <SkillName>{props.title}</SkillName>
        </StyledSkill>)
}

const StyledSkill = styled.div`
    
`

const Mark = styled.span`
    display: flex;
    position: absolute;
`


const SkillName = styled.h3`
    text-align: center;
`