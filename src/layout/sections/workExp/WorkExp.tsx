import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../assets/components/SectionTitle'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import { Work } from './work/Work'
import work1 from '../../../assets/images/server.webp'
import work2 from '../../../assets/images/nout.webp'
import work3 from '../../../assets/images/micro.webp'
import work4 from '../../../assets/images/phone.webp'
import { Container } from '../../../assets/components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'

const WorksData = [
    {
        compName: 'Company Name 1',
        position: 'Sr.Manager',
        term: '2016-2022',
        src: work1
    },

    {
        compName: 'Company Name 2',
        position: 'Manager',
        term: '2018-2020',
        src: work2
    },

    {
        compName: 'Company Name 3',
        position: 'Developer',
        term: '2019-2021',
        src: work3
    },

    {
        compName: 'Company Name 4',
        position: 'Ingineer',
        term: '2020-2022',
        src: work4
    },
]

export const WorkExp = () => {
    return (
        <StyledWorkExp>
            <Container>
                <SectionTitle>My Work Experiance</SectionTitle>
                <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>
                    {WorksData.map((s, index) => {
                        return (
                            <Work key={index} src={s.src} compName={s.compName} position={s.position} term={s.term} />
                        )
                    })}
                </FlexWrapper>
            </Container>

        </StyledWorkExp>
    )
}

const StyledWorkExp = styled.section`
    padding: 60px 0;
    min-height: 100vh;

    ${SectionTitle} {
        ${font({ weight: 600, Fmax: 56, Fmin: 23 })}
        margin-bottom: 86px;
        position: relative;

        @media ${theme.media.mobile} {
            text-align: center;
            margin-bottom: 31px;
        }

        &::before {
            content: '';
            display: inline-block;
            width: 100px;
            height: 1px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: -120px;

            @media ${theme.media.mobile} {
            display: none;
        }
        }

        &::after {
            content: '';
            display: inline-block;
            width: 600px;
            height: 1px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            right: -250px;

            @media ${theme.media.mobile} {
            display: none;
        }
        }
    }
`