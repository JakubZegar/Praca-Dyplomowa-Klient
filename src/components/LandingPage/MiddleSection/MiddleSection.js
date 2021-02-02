import React from 'react'
import { Button } from '../../ButtonElements'
import {useTranslation} from 'react-i18next'
import {Photo, PhotoWrap, MidContainer, MidRow, MidWrapper, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './MiddleSectionElements'

const MiddleSection = ({lightBg, id, imgStart, darkText, img, lightText, primary, dark, dark2}) => {
    const [t, i18n] = useTranslation();

    return (
        <>
            <MidContainer lightBg={lightBg} id={id}>
                <MidWrapper>
                    <MidRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{t('topLine')}</TopLine>
                                <Heading lightText={lightText}>{t('heading')}</Heading>
                                <Subtitle darkText={darkText}>{t('subtitle')}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                        to="home" 
                                        fontBig={true}
                                        smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact="true" 
                                        offset={-80}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {t('midButtonLabel')}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <PhotoWrap>
                                <Photo src={img}/>
                            </PhotoWrap>
                        </Column2>
                    </MidRow>
                </MidWrapper>
            </MidContainer>
        </>
    )
}

export default MiddleSection
