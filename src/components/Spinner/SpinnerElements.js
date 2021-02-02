import styled from 'styled-components';

export const SpinnerBG = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: rgba(186, 187, 207, 0.8);
    align-items: center;
    justify-content: center;
    position: absolute;
    visibility: ${({visibility}) => (visibility ? 'visible' : 'hidden' )};
`
export const StyledSpinner = styled.svg`
    animation: rotate 2s linear infinite;
    width: 50px;
    height: 50px;
    opacity: 100%;
    
    & .path {
        stroke: #101522;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
    
    @keyframes rotate {
        100% {
        transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
        }
        50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
        }
        100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
        }
    }
`