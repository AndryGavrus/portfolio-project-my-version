import React from 'react'
import { SectionTitle } from '../../../assets/components/SectionTitle'
import styled from 'styled-components'
import { Photo } from '../../../assets/components/photo/Photo'
import ava from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import { Container } from '../../../assets/components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align='center' justify='space-around' wrap='wrap'>
                    <Photo src={ava} alt="" height={'518px'} width={'470px'} />
                    <AboutInfo>
                        <SectionTitle>About</SectionTitle>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ut augue netus fusce fringilla. Aliquam blandit enim odio cursus id. Pulvinar commodo pellentesque non massa, nunc massa nisi est id. Diam est molestie massa commodo pulvinar aliquam arcu gravida. Dictum pretium senectus dolor vulputate tempor ac vel. Placerat proin sed risus at fusce aliquam. Convallis varius auctor quam fusce diam. Vulputate enim est nibh diam pellentesque. Adipiscing dolor turpis egestas velit sit feugiat ultricies.
                            Id ac placerat dolor sem neque elit. Ut nisl turpis nisi etiam ac nibh.</p>
                    </AboutInfo>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    padding: 60px 0;
    
    @media ${theme.media.mobile} {
        padding: 50px 0;
        }

    ${Photo} {
        @media ${theme.media.mobile} {
            height: 280px;
            width: 254px;
            margin-bottom: 45px;
        }
    }
`

const AboutInfo = styled.div`
    max-width: 525px;
    width: 100%;

    ${SectionTitle}{
        ${font({ weight: 600, Fmax: 93, Fmin: 45 })}
        position: relative;

        &::before{
            content: '';
        }
    }

    p{
        ${font({ weight: 400, Fmax: 14, Fmin: 8 })}
    }
`