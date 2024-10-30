import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../assets/components/SectionTitle'
import { Skill } from './skillsBar/skill/Skill'
import { LangSkill } from './blocks/LangSkill'
import { University } from './blocks/Universities'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import { Container } from '../../../assets/components/Container'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'


const SkillData = [
    {
        iconId: 'photoshopPB',
        title: 'Adobe PhotoShop',
        mark: 4.0
    },

    {
        iconId: 'excelPB',
        title: 'Microsoft Excel',
        mark: 4.8
    },

    {
        iconId: 'photoshopPB',
        title: 'Adobe PhotoShop',
        mark: 4.0
    },

    {
        iconId: 'excelPB',
        title: 'Microsoft Excel',
        mark: 4.8
    },
    {
        iconId: 'excelPB',
        title: 'Microsoft Excel',
        mark: 4.8
    },

    {
        iconId: 'photoshopPB',
        title: 'Adobe PhotoShop',
        mark: 4.0
    },

    {
        iconId: 'excelPB',
        title: 'Microsoft Excel',
        mark: 4.8
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
                <SkillsBlock>
                    <SectionTitle>My Skills</SectionTitle>
                    <SkillsWrapper>
                        <SkillsBar>
                            {SkillData.map((s, index) => {
                                return (<Skill key={index} title={s.title} mark={s.mark} />
                                )
                            })}
                        </SkillsBar>
                    </SkillsWrapper>

                </SkillsBlock>
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
    position: relative;
    height: 1120px;

    @media ${theme.media.mobile} {
        padding: 40px 0;
    }

    ${SectionTitle} {
        ${font({ weight: 600, Fmax: 56, Fmin: 41 })}
        margin-bottom: 40px;
        position: relative;

        @media ${theme.media.mobile} {
            margin-bottom: 24px;
        }

        &::before {
            content: '';
            display: inline-block;
            width: 178px;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 0;

            @media ${theme.media.mobile} {
        width: 132px;
        }
        }
    }
    
`
const SkillsBlock = styled.div`
    margin-bottom: 120px;
    height: 540px;
`

const SkillsWrapper = styled.div `
    overflow-x: auto;
    padding: 0 15px 2px;
    position: absolute;
    right: 0;
    left: calc((100vw - 1230px) / 2);

    /* &::-webkit-scrollbar {
        display: none; 
    } */
`

const SkillsBar = styled.div`
    width: max-content;
    border: 1px solid red;
    display: flex;
    gap: 80px;

    ${FlexWrapper} {
        position: relative;
    }

    @media ${theme.media.mobile} {
        padding-bottom: 55px;
        max-width: 576px;
        width: 100%;
        padding-left: 60px;
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
        ${font({ weight: 600, Fmax: 56, Fmin: 22 })}

        @media ${theme.media.mobile} {
            margin-bottom: 21px;
        }

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top: 100%;
            left: 0;

            @media ${theme.media.mobile} {
        width: 191px;
        }
        }
    }


`
const StudiesBlock = styled.div`
    max-width: 500px;
    width: 100%;
    border: 1px solid orange;

    ${SectionTitle} {
        margin-bottom: 35px;
        ${font({ weight: 600, Fmax: 56, Fmin: 22 })}

        @media ${theme.media.mobile} {
            margin: 46px 0 21px;
        }

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            position: absolute;
            top: 100%;
            left: 0;

            @media ${theme.media.mobile} {
        width: 191px;
        }
        }
    }
`