import React, {useState} from 'react'
import {LoginContainer, LoginCard, LoginLabel, LoginInput, ButtonContainer} from './LoginElements'
import {useTranslation} from 'react-i18next'
import { Button } from '../ButtonElements';

function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const [t, i18n] = useTranslation();

    return (
        <LoginContainer>
            <LoginCard>
                <LoginLabel>{t('username')}</LoginLabel>
                <LoginInput />

                <LoginLabel>{t('password')}</LoginLabel>
                <LoginInput />

                <ButtonContainer>
                    <Button >{t('login')}</Button>
                </ButtonContainer>
            </LoginCard>
        </LoginContainer>
    )
}

export default Login;