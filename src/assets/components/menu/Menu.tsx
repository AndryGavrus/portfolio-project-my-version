import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
    return (
        <StyledMenu>
            <MenuItem>
                <a href="#">Home</a>
            </MenuItem>
            <MenuItem>
                <a href="#">Portfolio</a>
            </MenuItem>
            <MenuItem>
                <a href="#">Contact</a>
            </MenuItem>
        </StyledMenu>
    )
}

const StyledMenu = styled.ul`
    display: flex;
    gap: 30px;
`

const MenuItem = styled.li`
    
`
