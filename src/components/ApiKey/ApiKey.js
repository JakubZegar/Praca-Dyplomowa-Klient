import React, {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import { ApiKeyContainer, ApiKeyHidden, ApiKeyText, ApiKeyValue, HideApiKey } from './ApiKeyElements';

function ApiKey(apiKey, properties, userDetails) {

    const [showApiKey, setShowApiKey] = useState(false);
    const [t, i18n] = useTranslation();

    return (
        <>
            {
                apiKey !== "" && 
                <ApiKeyContainer>
                    <ApiKeyText>
                        {t('yourApiKey')}    
                    </ApiKeyText>
                    {
                        showApiKey === true ? 
                            <>
                                <ApiKeyValue>
                                    {apiKey.apiKey}
                                </ApiKeyValue>
                                <HideApiKey onClick={() => setShowApiKey(false)}>
                                    <ApiKeyText>{t('hideApiKey')}</ApiKeyText>
                                </HideApiKey>
                            </> : 
                            <ApiKeyHidden onClick={() => setShowApiKey(true)}>
                                <ApiKeyText>{t('clickToShowApiKey')}</ApiKeyText>
                            </ApiKeyHidden>
                    }
                </ApiKeyContainer>
            }
        </>
    )
}

export default ApiKey
