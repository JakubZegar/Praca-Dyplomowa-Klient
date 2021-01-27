import React, {useState, useEffect} from 'react'
import {LoginContainer, LoginCard, LoginLabel, CloseButtonContainer, LoginInput, ButtonContainer, RegisterContainer, RegisterLabel, RegisterButton} from './LoginElements'
import {useTranslation} from 'react-i18next'
import { Button } from '../ButtonElements';
import {serverAddress} from '../const';
import Spinner from '../Spinner/Spinner'
import {Redirect} from 'react-router-dom';
// var localstorage = require('local-storage');

function Login() {
    const [credentials, setCredentials] = useState({
        usernameOrEmail:'',
        password:''
    })
    const [t, i18n] = useTranslation();
    const [loggedIn, setLoggedIn] = useState(false);


    const changeLogin = (event) => {
        setCredentials( prevCredentials => {
            return {...prevCredentials, usernameOrEmail: event.target.value}
        })
    }

    const changePassword = (event) => {
        setCredentials( prevCredentials => {
            return {...prevCredentials, password: event.target.value}
        })
    }

    const userLogin = async () => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        };
        const response = await fetch('http://127.0.0.1:8080/api/auth/signin', requestOptions);
        const data = await response.json();
        localStorage.setItem('login', JSON.stringify({
            isLogged: true,
            login: credentials.usernameOrEmail,
            token: data.accessToken
        }))
        setLoggedIn(true);

    }

    return (
        <LoginContainer login="true">
            {
                loggedIn ? <Redirect to="/" /> : <></>
            }
            <LoginCard>
                <CloseButtonContainer to="/">
                    <RegisterLabel>X</RegisterLabel>
                </CloseButtonContainer>
                <LoginLabel>{t('username')}</LoginLabel>
                <LoginInput onChange={changeLogin} />

                <LoginLabel>{t('password')}</LoginLabel>
                <LoginInput type={"password"} onChange={changePassword} />

                <ButtonContainer>
                    <Button primary="true" onClick={() => userLogin() }>{t('login')}</Button>
                </ButtonContainer>

                <RegisterContainer>
                    <RegisterLabel>{t('dontHaveAccount')}</RegisterLabel>
                    <RegisterButton to="/register">{ t('registerLogin')}</RegisterButton>
                </RegisterContainer>
            </LoginCard>
        </LoginContainer>
    )
}

export default Login;