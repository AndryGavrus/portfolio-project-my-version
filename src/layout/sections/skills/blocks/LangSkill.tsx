import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { Icon } from '../../../../assets/components/icon/Icon'
import engBar from '../../../../assets/images/skillsProgressSvg/engBar.png'
import frenchBar from '../../../../assets/images/skillsProgressSvg/frenchBar.png'
import { Photo } from '../../../../assets/components/photo/Photo'
import { theme } from '../../../../styles/Theme'

type LangSkillPropsType = {
    photo: string
    photoWidth: string
    photoVB: string
    title: string
    mark: string
}

export const LangSkill = (props: LangSkillPropsType) => {
    return (
        <FlexWrapper direction='column'>
            <LangTitle>{props.title}</LangTitle>
            <FlexWrapper direction='column' justify='flex-start' align='flex-start'  >
                <Mark>{props.mark}</Mark>
                {/* <Photo src={engBar} width='490px' height='24px'/> */}
                <Icon iconId={props.photo} width={props.photoWidth} height='24' viewBox={props.photoVB} />
            </FlexWrapper>
        </FlexWrapper>

    )
}




const LangTitle = styled.h3`
    font-family:"Poppins", sans-serif;
    font-weight: 600;
    font-size: 29px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color:${theme.colors.font};
`

const Mark = styled.span`
    font-family:"Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color:${theme.colors.font};

    align-self: flex-end;
`