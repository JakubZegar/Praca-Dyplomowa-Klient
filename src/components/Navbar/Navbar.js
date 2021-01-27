import React, {useState, useEffect} from 'react'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavItemR, NavLinks,FlagSection, NavBtn, NavBtnLink, FlagContainer} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import {useTranslation} from 'react-i18next';
import Flags from 'country-flag-icons/react/3x2'
import {animateScroll} from 'react-scroll';

const Navbar = ({toggle, isOpen}) => {
    const [t, i18n] = useTranslation();
    const [scrollNav, setScrollNav] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    };

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        animateScroll.scrollToTop();
    }

    const logOut = () => {
        localStorage.removeItem('login');
        setIsLogged(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    useEffect(() => {
        try {
            let token = localStorage.getItem('login')
            setIsLogged(JSON.parse(token).isLogged);
        } catch (e) {
            console.log('error' + e);
        }
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        {t('appName')}
                    </NavLogo>

                    <MobileIcon onClick={toggle} isOpen={isOpen}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={600} spy={true} exact='true' offset={-80}>
                                {t('about')}
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={600} spy={true} exact='true' offset={-80}>
                                {t('discover')}
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={600} spy={true} exact='true' offset={-80}>
                                {t('services')}
                            </NavLinks>
                        </NavItem>
                        {
                            isLogged ? (
                            <NavItem>
                                <NavItemR to="/dashboard">
                                    {t('dashboard')}
                                </NavItemR>
                            </NavItem>
                                ) : (
                            <NavItem>
                                <NavItemR to="/register">
                                    {t('register')}
                                </NavItemR>
                            </NavItem>
                            ) 
                        }


                    </NavMenu>

                    <FlagSection>
                        <FlagContainer>
                                <Flags.GB title="English" onClick={() => changeLanguage('en')}/>
                            </FlagContainer>
                            <FlagContainer>
                                <Flags.PL title="Polish" onClick={() => changeLanguage('pl')}/>
                        </FlagContainer>
                    </FlagSection>

                    <NavBtn>
                    {
                        isLogged ? (
                            <NavBtnLink onClick={() => logOut()}>
                                {t('logout')}
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to="/signin">
                                {t('login')}
                            </NavBtnLink>
                        ) 
                    }
                    </NavBtn>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
