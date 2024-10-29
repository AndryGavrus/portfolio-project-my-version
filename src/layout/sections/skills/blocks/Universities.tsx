import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../assets/components/FlexWrapper'
import { Icon } from '../../../../assets/components/icon/Icon'
import { theme } from '../../../../styles/Theme'
import { font } from '../../../../styles/Common'

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
            <FlexWrapper direction='column' align='flex-start' justify='ceneter' >
                <UnName>{props.name}</UnName>
                <Info>{props.info}</Info>
            </FlexWrapper>
        </StyledUniversity>
    )
}



const StyledUniversity = styled.div`
    display: flex;
    align-items: center;

    &+&{
        margin-top: 25px;

        @media ${theme.media.mobile} {
            margin-top: 14px;
        }
    }
`

const IconWrapper = styled.div`
    height: 96px;
    width: 96px;
    border-radius: 100%;
    background: ${theme.colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 22px;



    @media ${theme.media.mobile} {
            width: 52px;
            height: 52px;
            margin-right: 12px;
        }


`

const UnName = styled.h3`
    ${font({ weight: 600, Fmax: 29, Fmin: 16 })}
    letter-spacing: 0.05em;
    text-transform: capitalize;
`

const Info = styled.p`
    ${font({ weight: 300, Fmax: 18, Fmin: 10 })}
    letter-spacing: 0.05em;
    text-transform: capitalize;
    margin-bottom: 25px;
`