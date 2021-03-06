import styled from 'styled-components'
import topBackgorund from '../../../images/personal.svg'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 70px;
    margin-top: 80px;
    height: 650px;
    width: 100%;
    position: relative;
    z-index: 1;
    background: #BABBCF;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 714px;
        padding-bottom: 64px;
    }
`

export const TopBg = styled.div`
    background-image: url(${topBackgorund});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex: 1;
`

export const TopContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`

export const TopH1 = styled.h1`
    color: #ffffff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 1024px) {
        font-size: 40px;
    }

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const TopP = styled.p`
    margin-top: 24px;
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    max-width: 600px; 
    
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const TopBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    font-weight: bold;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px
`