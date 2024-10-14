import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../assets/components/SectionTitle'
import { LangBlock } from './blocks/LangBlock'
import { StudiesBlock } from './blocks/StudiesBlock'
import { Skill } from './skillsBar/skill/Skill'


const SkillData = [
    {
        iconId: 'photoshopPB',
        title: 'Adobe PhotoShop',
        mark: '4.0'
    },

    {
        iconId: 'excelPB',
        title: 'Microsoft Excel',
        mark: '4.8'
    },

    {
        iconId: 'photoshopPB',
        title: 'Adobe PhotoShop',
        mark: '4.0'
    },

    {
        iconId: 'excelPB',
        title: 'Microsoft Excel',
        mark: '4.8'
    },
]

const LangSkillData = [
    {
        photo: 'engBar',
        photoWidth: '490',
        photoVB: '0 0 490 25',
        title: 'English',
        mark: 'Fluent'
    },
    {
        photo: 'frenchBar',
        photoWidth: '328',
        photoVB: '0 0 328 25',
        title: 'French',
        mark: 'Good'
    },
]

const UniversitiesData = [
    {
        name: 'Christ University',
        info: 'BBA 2019'
    },

    {
        name: 'Christ University',
        info: 'PUC 2016'
    },
]

export const Skills = () => {
    return (
        <SkillsSection>
            <SectionTitle>My Skills</SectionTitle>
            <SkillsBar>
                {SkillData.map((s, index) => {
                    return (<Skill key={index} iconId={s.iconId} title={s.title} mark={s.mark} />
                    )
                })}
            </SkillsBar>
            <SectionTitle as={'h3'}>language</SectionTitle>
            {LangSkillData.map((s, index) => {
                return (
                    <LangBlock key={index} photo={s.photo} title={s.title} mark={s.mark} photoWidth={s.photoWidth} photoVB={s.photoVB} />
                )
            })}
            <SectionTitle as={'h3'}>Studies</SectionTitle>
            {UniversitiesData.map((s, index)=>{
                return(
                    <StudiesBlock name={s.name} info={s.info}/>
                )
            })}
        </SkillsSection>
    )
}

const SkillsSection = styled.section`
    background-color: aqua;
    min-height: 100vh;
`

const SkillsBar = styled.div`
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
`