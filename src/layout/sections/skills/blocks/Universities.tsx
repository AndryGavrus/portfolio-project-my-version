import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { Icon } from '../../../../assets/components/icon/Icon'
import { theme } from '../../../../styles/Theme'

type UniversitiesPropsType = {
    name: string
    info: string
}

export const Universities = (props: UniversitiesPropsType) => {
    return (
        <StyledUniversity>
            <IconWrapper>
                <Icon iconId='book' width='34' height='43' viewBox='0 0 34 34' />
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

    /* position: relative;
    z-index: 0;

        &::before {
        content: '';
        height: 96px;
        width: 96px;
        border-radius: 100%;
        background: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% -50%);
        z-index: -1;
    } */
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