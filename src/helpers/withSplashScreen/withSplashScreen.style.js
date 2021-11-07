import styled, { keyframes } from "styled-components"

const moveDot = keyframes`
    0% {
    left: -90px;
    color: #eee;
    }

    50% {
        color: #666;
    }

    100% {
        left: 90px;
        color: #eee;
    }
`

export const SplashScreen = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LoadingDot = styled.div`
    font-size: 100px;
    margin-top: -80px;
    position: relative;
    animation: ease-in-out infinite alternate;
    animation-name: ${moveDot};
    animation-duration: 1.2s;
`