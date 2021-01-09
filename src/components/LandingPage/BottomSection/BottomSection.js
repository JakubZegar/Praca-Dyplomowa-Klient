import React from 'react'
import {BottomCard, BottomContainer, BottomH1, BottomH2, BottomIcon, BottomP, BottomWrapper} from './BottomElements'
import Icon1 from '../../../images/collab.svg'
import Icon2 from '../../../images/goals.svg'
import Icon3 from '../../../images/personal.svg'
import {useTranslation} from 'react-i18next' 

export default function BottomSection() {

    const [t, i18n] = useTranslation();

    return (
        <BottomContainer id="services">
            <BottomH1>{t('services')}</BottomH1>
            <BottomWrapper>
                <BottomCard>
                    <BottomIcon src={Icon1}/>
                    <BottomH2>{t('optimalise')}</BottomH2>
                    <BottomP>{t('optimaliseDesc')}</BottomP>
                </BottomCard>

                <BottomCard>
                    <BottomIcon src={Icon2}/>
                    <BottomH2>{t('improve')}</BottomH2>
                    <BottomP>{t('improveDesc')}</BottomP>
                </BottomCard>

                <BottomCard>
                    <BottomIcon src={Icon3}/>
                    <BottomH2>{t('earn')}</BottomH2>
                    <BottomP>{t('earnDesc')}</BottomP>
                </BottomCard>
            </BottomWrapper>
        </BottomContainer>
    )
}
