import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { Icon } from '../../../../assets/components/icon/Icon'
import { theme } from '../../../../styles/Theme'

type UniversityPropsType = {
    name: string
    info: string
}

export const University = (props: UniversityPropsType) => {
    return (
        <StyledUniversity>
            <IconWrapper>
                <Icon iconId='book' width='30' height='33' viewBox='0 0 30 33' />
            </IconWrapper>
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

const IconWrapper = styled.div`
    height: 96px;
    width: 96px;
    border-radius: 100%;
    background: ${theme.colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
`

const UnName = styled.h3`
    font-family:"Poppins", sans-serif;
    font-weight: 600;
    font-size: 29px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color:${theme.colors.font};
`

const Info = styled.p`
    font-family:"Poppins", sans-serif;
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color:${theme.colors.font};
    margin-bottom: 25px;
`