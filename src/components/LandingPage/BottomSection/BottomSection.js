import React from 'react'
import {BottomCard, BottomContainer, BottomH1, BottomH2, BottomIcon, BottomP, BottomWrapper} from './BottomElements'
import Icon1 from '../../../images/collab.svg'
import Icon2 from '../../../images/goals.svg'
import Icon3 from '../../../images/personal.svg'

export default function BottomSection() {
    return (
        <BottomContainer id="services">
            <BottomH1>Usługi</BottomH1>
            <BottomWrapper>
                <BottomCard>
                    <BottomIcon src={Icon1}/>
                    <BottomH2>Optymalizuj</BottomH2>
                    <BottomP>Pomagamy w optymalizacji</BottomP>
                </BottomCard>

                <BottomCard>
                    <BottomIcon src={Icon2}/>
                    <BottomH2>Wspomagaj</BottomH2>
                    <BottomP>Pomagamy w wspomaganiu</BottomP>
                </BottomCard>

                <BottomCard>
                    <BottomIcon src={Icon3}/>
                    <BottomH2>Zarabiaj</BottomH2>
                    <BottomP>Pomagamy w zarabianiu</BottomP>
                </BottomCard>
            </BottomWrapper>
        </BottomContainer>
    )
}
