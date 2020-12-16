import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #BABBCF;
`

export const LoginCard = styled.div`
    display: flex;
    background-color: #101522;
    width: 400px;
    height: 400px;
    border-radius: 4px;
    box-shadow: 0px 5px 5px black;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

export const LoginLabel = styled.h3`
    color: white;
    padding: 10px 0;
`

export const LoginInput = styled.input`
    border-radius: 2px;
    margin-bottom: 24px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`