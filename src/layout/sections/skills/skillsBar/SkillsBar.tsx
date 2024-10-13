import React from 'react'
import styled from 'styled-components'
import { Skill } from './Skill'

export const SkillsBar = () => {
    return (
        <StyledSkillsBar>
            <Skill/>
        </StyledSkillsBar>
    )
}

const StyledSkillsBar = styled.div`
    display: flex;
    flex-grow: 1;
`

