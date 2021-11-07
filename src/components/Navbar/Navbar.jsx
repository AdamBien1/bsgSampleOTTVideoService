import React from 'react'
import { NavbarContainer, NavbarTitle } from './Navbar.style'
import { palette } from "../../helpers/colorPalette.style";
import { FlexboxRowLayout } from '../../templates/FlexboxRowLayout.style';

const Navbar = () => {
    return (
        <NavbarContainer color={palette.primary} backgroundColor={palette.dark}>
            <FlexboxRowLayout evenly>
                <NavbarTitle>Sample App for BSG</NavbarTitle>
            </FlexboxRowLayout>
        </NavbarContainer>
    )
}

export default Navbar
