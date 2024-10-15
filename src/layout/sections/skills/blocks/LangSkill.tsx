import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { Icon } from '../../../../assets/components/icon/Icon'
import engBar from '../../../../assets/images/skillsProgressSvg/engBar.png'
import frenchBar from '../../../../assets/images/skillsProgressSvg/frenchBar.png'
import { Photo } from '../../../../assets/components/photo/Photo'

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


const LangBar = styled.div`
`

const LangTitle = styled.h3`

`

const Mark = styled.span`
    align-self: flex-end;
`