import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../assets/components/SectionTitle'
import { LangBlock } from './blocks/LangBlock'
import { StudiesBlock } from './blocks/StudiesBlock'
import { SkillsBar } from './skillsBar/SkillsBar'

export const Skills = () => {
    return (
        <SkillsSection>
            <SectionTitle>My Skills</SectionTitle>
            <SkillsBar/>
            <LangBlock/>
            <StudiesBlock/>
        </SkillsSection>
    )
}

const SkillsSection = styled.section`
    background-color: aqua;
    min-height: 100vh;
`