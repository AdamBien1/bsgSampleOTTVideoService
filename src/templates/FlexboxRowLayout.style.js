import styled, { css } from "styled-components";

export const FlexboxRowLayout = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: row;
    align-content: space-evenly;
    justify-items: flex-start;
    gap: 15px;
    
    ${props => props.evenly && css`
        align-content: space-evenly;
        justify-items: center;
    `}
`