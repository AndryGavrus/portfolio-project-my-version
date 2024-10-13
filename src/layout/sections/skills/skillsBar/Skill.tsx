import React from 'react'
import styled from 'styled-components'
import pb1 from '../../../../assets/images/skillsProgressSvg/PS_PB.svg'


export const Skill = () => {
    return (
        <StyledSkill>
            <ProgressBar>
                <span>4.0</span>
            </ProgressBar>
            <SkillName>Adobe PhotoShop</SkillName>
        </StyledSkill>)
}

const StyledSkill = styled.div`

`

const ProgressBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${pb1});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 280px;
    width: 280px;
`

const SkillName = styled.h3`
    text-align: center;
`