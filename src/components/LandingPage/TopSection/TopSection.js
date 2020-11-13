import React, {useState} from 'react'
import {TopContainer, TopBg, TopContent, TopH1, TopP, TopBtnWrapper, ArrowForward, ArrowRight} from './TopSectionElements'
import {Button} from '../../ButtonElements'
const TopSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(value => !value);
    }

    return (
        <TopContainer id="home">
            <TopBg/>
            <TopContent>
                <TopH1>
                    Doglądaj swojej strony w sposób prosty jak nigdy dotąd!
                </TopH1>
                <TopP>
                    Zarejestruj się i przjedź na wyższy poziom marketingu internetowego
                </TopP>
                <TopBtnWrapper>
                    <Button to='singup' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Rozpocznij {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </TopBtnWrapper>
            </TopContent>
        </TopContainer>
    )
}

export default TopSection
