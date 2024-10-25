import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../assets/components/SectionTitle'
import { Skill } from './skillsBar/skill/Skill'
import { LangSkill } from './blocks/LangSkill'
import { University } from './blocks/Universities'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import { Container } from '../../../assets/components/Container'


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
            <Container>
            <SectionTitle>My Skills</SectionTitle>
            <SkillsBar>
                {SkillData.map((s, index) => {
                    return (<Skill key={index} iconId={s.iconId} title={s.title} mark={s.mark} />
                    )
                })}
            </SkillsBar>
            <FlexWrapper justify='space-around'>
                <LangBlock>
                    <SectionTitle as={'h3'}>language</SectionTitle>
                    {LangSkillData.map((s, index) => {
                        return (
                            <LangSkill key={index} photo={s.photo} title={s.title} mark={s.mark} photoWidth={s.photoWidth} photoVB={s.photoVB} />
                        )
                    })}
                </LangBlock>
                <StudiesBlock>
                    <SectionTitle as={'h3'}>Studies</SectionTitle>
                    {UniversitiesData.map((s, index) => {
                        return (
                            <University name={s.name} info={s.info} />
                        )
                    })}
                </StudiesBlock>
            </FlexWrapper>
            </Container>
        </SkillsSection>
    )
}

const SkillsSection = styled.section`
        padding: 60px 0;

    ${SectionTitle} {
        position: relative;
        &::before {
            content: '';
            display: inline-block;
            width: 178px;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
`

const SkillsBar = styled.div`
    margin: 40px 0 120px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    gap: 80px;
    overflow: auto;

    ${FlexWrapper} {
        position: relative;
    }
`

const LangBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;

    ${SectionTitle} {
        margin-bottom: 42px;
    }
`
const StudiesBlock = styled.div`
    ${SectionTitle} {
        margin-bottom: 35px;
    }
`