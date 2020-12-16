import React from 'react'
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
    FlagContainer
} from './SidebarElements'
import Flags from 'country-flag-icons/react/3x2'
import {useTranslation} from 'react-i18next';

const Sidebar = ({isOpen, toggle}) => {
    const [t, i18n] = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    };
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

                    <SidebarLink to="signup" onClick={toggle}>
                        {t('register')}
                    </SidebarLink>

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
                    <SidebarRoute to="/signin">
                        {t('login')}
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
