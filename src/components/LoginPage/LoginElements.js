import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const LoginContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #BABBCF;

    @media screen and (max-width: 1280px) {

        height: ${({login}) => (login ? '100vh' : 'fit-content')};
        position: sticky;
    }
`

export const LoginCard = styled.div`
    display: flex;
    background-color: #101522;
    width: 400px;
    border-radius: 4px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 0 48px 0;
    margin: 64px auto;
    
`

export const LoginLabel = styled.label`
    padding: 10px 0;
    display: inline-block;
    font-size: 1.2rem;
    margin-bottom: 6px;
    font-weight: 600;
    color: #fff;
`

export const LoginInput = styled.input`
    margin-bottom: 0.5rem;
    width: 60%;
    padding: 7px;
    font-size: 1.2rem;
`

export const ButtonContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`


export const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
`

export const RegisterLabel = styled.h4`
    color: #f0f0f0;
`

export const RegisterButton = styled(LinkR)`
    color: #BABBCF;
    cursor: pointer;
    margin-left: 6px;
    display: block;
    font-size: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    text-decoration: none;
    margin-left: 6px;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #BF567D;
    }
`

export const CloseButtonContainer = styled(LinkR)`
    display: flex;
    align-self: flex-end;
    background-color: #BF567D;
    width: 35px;
    height: 35px;
    border-radius: 25px;
    justify-self: flex-end;
    margin-top: 12px;
    margin-right: 12px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        scale: 1.1;
        background: ${({primary}) => (primary ? '#f2f2f2' : '#BF567D')};
        color: ${({primary}) => (primary ? '#010606' : '#f2f2f2')};
    }
`
