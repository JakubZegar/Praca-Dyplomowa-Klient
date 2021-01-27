import styled from 'styled-components';

export const ApiKeyContainer = styled.div`
    display: flex;
    background-color: #f2f2f2;
    margin-bottom: 48px;
    margin-top: 16px;
    border-radius: 16px;
    padding: 12px;
    flex-direction: row;
`

export const ApiKeyText = styled.p`
    display: flex;
    font-weight: bold;
    color: black;
`

export const ApiKeyValue = styled.div`
    margin-left: 12px;
    display: flex;
    color: black;
    text-decoration:underline ;
`

export const ApiKeyHidden = styled.div`
    display: flex;
    margin-left: 18px;
    background-color: #BABBCF;
    border-radius: 12px;
    padding: 1px 16px 1px 16px;
    cursor: pointer;
    font-size: 13px;
    text-align: center;
    align-items: center;
    justify-content: center;
    &:hover {
        transition: all 0.2s ease-in-out;
        scale: 1.1;
        background: #BF567D;
    }
`

export const HideApiKey = styled.div`
display: flex;
margin-left: 18px;
background-color: #BABBCF;
border-radius: 12px;
padding: 1px 16px 1px 16px;
cursor: pointer;
font-size: 13px;
text-align: center;
align-items: center;
justify-content: center;
&:hover {
    transition: all 0.2s ease-in-out;
    scale: 1.1;
    background: #BF567D;
}
`