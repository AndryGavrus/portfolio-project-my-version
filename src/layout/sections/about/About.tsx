import React from 'react'
import { SectionTitle } from '../../../assets/components/SectionTitle'
import styled from 'styled-components'
import { Photo } from '../../../assets/components/photo/Photo'
import ava from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../assets/components/FlexWrapper'


export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper align='center' justify='space-around'>
                <Photo src={ava} alt="" height={'520px'} width={'470px'}/>
                <AboutInfo>
                <SectionTitle>About</SectionTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ut augue netus fusce fringilla. Aliquam blandit enim odio cursus id. Pulvinar commodo pellentesque non massa, nunc massa nisi est id. Diam est molestie massa commodo pulvinar aliquam arcu gravida. Dictum pretium senectus dolor vulputate tempor ac vel. Placerat proin sed risus at fusce aliquam. Convallis varius auctor quam fusce diam. Vulputate enim est nibh diam pellentesque. Adipiscing dolor turpis egestas velit sit feugiat ultricies.
                Id ac placerat dolor sem neque elit. Ut nisl turpis nisi etiam ac nibh.</p>
                </AboutInfo>
            </FlexWrapper>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    background-color: bisque;
`

const AboutInfo = styled.div`
    height: 212px;
    width: 525px;
`