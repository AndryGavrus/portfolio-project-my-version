import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { Icon } from '../../../../assets/components/icon/Icon'

type StudiesBlockPropsType = {
    name: string
    info: string
}

export const StudiesBlock = (props: StudiesBlockPropsType) => {
    return (
        <StyledStudiesBlock>
            <University>
            <Icon iconId='book' width='34' height='43' viewBox='0 0 34 34' />
                <FlexWrapper direction='column' align='flex-start'>
                    <UnName>{props.name}</UnName>
                    <Info>{props.info}</Info>
                </FlexWrapper>
            </University>
        </StyledStudiesBlock>
    )
}

const StyledStudiesBlock = styled.div`
`

const University = styled.div`
    display: flex;
    align-items: center;    
`

const UnName = styled.h3`
    
`

const Info = styled.p`
`