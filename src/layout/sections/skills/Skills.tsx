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
            </Container>
            <SkillsBar>
                {SkillData.map((s, index) => {
                    return (<Skill key={index} iconId={s.iconId} title={s.title} mark={s.mark} />
                    )
                })}
            </SkillsBar>
            <Container>
                <FlexWrapper justify='space-between' wrap='wrap'>
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
        margin-bottom: 40px;
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
    max-width: 1440px;
    width: 100%;
    min-height: 100%;
    padding-left: 120px;
    margin: 0 auto;
    padding-bottom: 120px;
    border: 1px solid red;

    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    gap: 80px;
    overflow: auto;

    &::-webkit-scrollbar {
    display: none; 
}
    
    ${FlexWrapper} {
        position: relative;
    }
`

const LangBlock = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid orange;

    ${SectionTitle} {
        margin-bottom: 42px;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top: 100%;
            left: 0;
        }
    }


`
const StudiesBlock = styled.div`
    max-width: 500px;
    width: 100%;
    border: 1px solid orange;

    ${SectionTitle} {
        margin-bottom: 35px;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top: 100%;
            left: 0;
        }
    }
`