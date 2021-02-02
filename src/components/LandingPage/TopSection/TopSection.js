import React, {useState} from 'react'
import {TopContainer, TopBg, TopContent, TopH1, TopP, TopBtnWrapper, ArrowForward, ArrowRight} from './TopSectionElements'
import {Button} from '../../ButtonElements'
import {useTranslation} from 'react-i18next';

const TopSection = () => {

    const [hover, setHover] = useState(false);
    const [t, i18n] = useTranslation();

    const onHover = () => {
        setHover(value => !value);
    }

    return (
        <TopContainer id="about">
            <TopBg/>
            <TopContent>
                <TopH1>
                    {t('landingTop1')}
                </TopH1>
                <TopP>
                    {t('landingTop2')}
                </TopP>
                <TopBtnWrapper>
                    <Button to='/singup' onMouseEnter={onHover} onMouseLeave={onHover}>
                        {t('landingTopButton')} {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </TopBtnWrapper>
            </TopContent>
        </TopContainer>
    )
}

export default TopSection
