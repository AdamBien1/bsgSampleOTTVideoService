import styled from "styled-components"

export const InfoPill = styled.span`
    border-radius: ${props => props.borderRadius ? props.borderRadius : "0px"};
    border-width: ${props => props.borderWidth ? props.borderWidth : "0px"};
    border-color: ${props => props.borderColor ? props.borderColor : "#000"};
    border-style: ${props => props.borderStyle ? props.borderStyle : "solid"};

    background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};
    color: ${props => props.color ? props.color : "#000"};

    padding: 7px 12px;
    margin: auto;
`