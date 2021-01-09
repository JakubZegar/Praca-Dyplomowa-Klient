import React, {useState, useEffect} from 'react'
import {LoginContainer, LoginCard, LoginLabel, CloseButtonContainer, LoginInput, ButtonContainer, RegisterContainer, RegisterLabel, RegisterButton} from '../LoginPage/LoginElements'
import {useTranslation} from 'react-i18next'
import { Button } from '../ButtonElements';
import {localstorage} from 'local-storage';

function Register() {

    const [t, i18n] = useTranslation();
    const [credentials, setCredentials] = useState({
        username: '',
        name: '',
        password: '',
        email: ''
    })

    useEffect(() => {
        console.log(JSON.stringify(credentials))

    }, [credentials])

    const [confirmPassword, setConfirmPassword] = useState('');

    const changeUsername = (event) => {
        setCredentials( prevCredentials => {
            return {...prevCredentials, username: event.target.value}
        })
    }

    const changePassword = (event) => {
        setCredentials( prevCredentials => {
            return {...prevCredentials, password: event.target.value}
        })
    }

    const changeConfirmPassword = (event) => {
        setConfirmPassword( setConfirmPassword(event.target.value) )
    }

    const changeName = (event) => {
        setCredentials( prevCredentials => {
            return {...prevCredentials, name: event.target.value}
        })
    }
    
    const changeEmail = (event) => {
        setCredentials( prevCredentials => {
            return {...prevCredentials, email: event.target.value}
        })
    }

    const userRegister = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        };
        const response = await fetch('http://127.0.0.1:8080/api/auth/signup', requestOptions);
        const data = await response.json();
        console.log(data);

    }


    return (
        <LoginContainer>
            <LoginCard>
                <CloseButtonContainer to="/">
                    <RegisterLabel>X</RegisterLabel>
                </CloseButtonContainer>
                <LoginLabel>{t('username')}</LoginLabel>
                <LoginInput onChange={changeUsername}/>

                <LoginLabel>{t('email')}</LoginLabel>
                <LoginInput onChange={changeEmail}/>

                <LoginLabel>{t('name')}</LoginLabel>
                <LoginInput onChange={changeName}/>

                <LoginLabel>{t('password')}</LoginLabel>
                <LoginInput type={"password"} onChange={changePassword}/>

                <LoginLabel>{t('confirmPassword')}</LoginLabel>
                <LoginInput type={"password"} onChange={changeConfirmPassword}/>

                <ButtonContainer>
                    <Button primary="true" onClick={() =>{userRegister()} }>{t('createAccount')}</Button>
                </ButtonContainer>

                <RegisterContainer>
                    <RegisterLabel>{t('alreadyHaveAnAccount')}</RegisterLabel>
                    <RegisterButton to="/signin">{ t('registerRegister')}</RegisterButton>
                </RegisterContainer>
            </LoginCard>
        </LoginContainer>
    )
}

export default Register;
