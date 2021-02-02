import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #101522;
    /* background: ${({scrollNav}) => (scrollNav ? 'rgba(0,0,0,0.5)' :  '#101522' )}; */
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    /* box-shadow: 0 3px 5px  #0D0D0D; */
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease
    }
`

export const FlagContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    max-width: 40px;
    width: 100%;
    z-index: 1;
    margin: 0 4px;
    cursor: pointer;

    @media screen and (max-width: 1280px){
        max-width: 40px;
    }
`

export const FlagSection = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    @media screen and (max-width: 768px) {
        display: none;
    }
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    flex: 1;

`

export const NavLogo = styled(LinkR)`
    flex: 1;
    color: #F2F2F2;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 25px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        color: #F2F2F2;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    flex: 3;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavItemR = styled(LinkR)`
    color: #F2F2F2;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 4px solid #BF567D;
    }
    &:hover {
        
    }
`

export const NavLinks = styled(LinkS)`
    color: #F2F2F2;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 4px solid #BF567D;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #BF567D;
    white-space: nowrap;
    padding: 10px 22px;
    text-align: center;
    color: #F2F2F2;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #F2F2F2;
        scale: 1.1;
    }
`