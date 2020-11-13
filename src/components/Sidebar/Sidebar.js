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
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon onClick={toggle}/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        O aplikacji
                    </SidebarLink>

                    <SidebarLink to="discover" onClick={toggle}>
                        Odkryj
                    </SidebarLink>

                    <SidebarLink to="services" onClick={toggle}>
                        Usługi
                    </SidebarLink>

                    <SidebarLink to="signup" onClick={toggle}>
                        Rejestracja
                    </SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Zaloguj
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
