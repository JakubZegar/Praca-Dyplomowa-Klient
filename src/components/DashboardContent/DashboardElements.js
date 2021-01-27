import styled from 'styled-components';

export const DbContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 70px;
    margin-top: 80px;
    padding-bottom: 48px;
    width: 100%;
    position: relative;
    z-index: 1;
    background: #BABBCF;
    min-height: 700px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 714px;
        padding-bottom: 64px;
    }
`

export const DbGreetings = styled.h3`
    color: #fff;
    padding-top: 24px;
    padding-bottom: 24px;
`

export const DbPlotHeader = styled.h5`
    color: #0d0d0d;
    padding-top: 8px;
    padding-bottom: 24px;

`

export const DbPlotBg = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 16px;
    align-items: center;
    justify-content: center;
`

export const DbModules = styled.div`
    display: flex;
    border-radius: 12px;
    padding: 16px;
    background-color: #BF567D;
    margin-top: 64px;
`