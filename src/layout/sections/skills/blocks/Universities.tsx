import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { Icon } from '../../../../assets/components/icon/Icon'

type UniversitiesPropsType = {
    name: string
    info: string
}

export const Universities = (props: UniversitiesPropsType) => {
    return (
            <StyledUniversity>
            <Icon iconId='book' width='34' height='43' viewBox='0 0 34 34' />
                <FlexWrapper direction='column' align='flex-start'>
                    <UnName>{props.name}</UnName>
                    <Info>{props.info}</Info>
                </FlexWrapper>
            </StyledUniversity>
    )
}



const StyledUniversity = styled.div`
    display: flex;
    align-items: center;    
`

const UnName = styled.h3`
    
`

const Info = styled.p`
`