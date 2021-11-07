import styled from "styled-components"

export const NavbarContainer = styled.div`
    width: 100vw;
    height: 60px;
    color: ${props => props.color ? props.color : "#000"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "#ccc"};
`

export const NavbarTitle = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    margin: auto;
`