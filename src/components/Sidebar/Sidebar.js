import React, {useEffect, useState} from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu,
    FlagSection,
    FlagContainer,
    SidebarLinkR
} from './SidebarElements'
import Flags from 'country-flag-icons/react/3x2'
import {useTranslation} from 'react-i18next';

const Sidebar = ({isOpen, toggle}) => {

    const [t, i18n] = useTranslation();
    const [isLogged, setIsLogged] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    };

    const logOut = () => {
        localStorage.removeItem('login');
        setIsLogged(false);
    }

    useEffect(() => {
        try {
            let token = localStorage.getItem('login')
            setIsLogged(JSON.parse(token).isLogged);
        } catch (e) {
            console.log('error' + e);
        }
    }, [])

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon onClick={toggle}/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        {t('about')}
                    </SidebarLink>

                    <SidebarLink to="discover" onClick={toggle}>
                        {t('discover')}
                    </SidebarLink>

                    <SidebarLink to="services" onClick={toggle}>
                        {t('services')}
                    </SidebarLink>

                    {
                            isLogged ? (
                            <SidebarLinkR to="/dashboard" onClick={toggle}>
                                {t('dashboard')}
                            </SidebarLinkR>
                                ) : (
                            <SidebarLinkR to="/register" onClick={toggle}>
                                {t('register')}
                            </SidebarLinkR>
                            ) 
                        }

                    <FlagSection>
                        <FlagContainer>
                            <Flags.GB title="English" onClick={() => changeLanguage('en')}/>
                        </FlagContainer>
                        <FlagContainer>
                            <Flags.PL title="Polish" onClick={() => changeLanguage('pl')}/>
                        </FlagContainer>
                    </FlagSection>
                </SidebarMenu>

                <SideBtnWrap>
                {
                    isLogged ? (
                        <SidebarRoute onClick={() => logOut()}>
                            {t('logout')}
                        </SidebarRoute>
                    ) : (
                        <SidebarRoute to="/signin">
                            {t('login')}
                        </SidebarRoute>
                    ) 
                }
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
