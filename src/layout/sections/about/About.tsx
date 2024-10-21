import React from 'react'
import { SectionTitle } from '../../../assets/components/SectionTitle'
import styled from 'styled-components'
import { Photo } from '../../../assets/components/photo/Photo'
import ava from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'
import { Container } from '../../../assets/components/Container'


export const About = () => {
    return (
        <StyledAbout>
            <Container>
            <FlexWrapper align='center' justify='space-around'>
                <Photo src={ava} alt="" height={'auto'} width={'40%'}/>
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
    min-height: 644px;
    display: flex;
`

const AboutInfo = styled.div`
    /* height: 212px; */
    width: 525px;

    ${SectionTitle}{
        font-size: 93px;
    }
`