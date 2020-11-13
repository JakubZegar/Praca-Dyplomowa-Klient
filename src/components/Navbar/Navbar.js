import React, {useState} from 'react'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle, isOpen}) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Aplikacja
                    </NavLogo>

                    <MobileIcon onClick={toggle} isOpen={isOpen}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                                O aplikacji
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="discover">
                                Odkryj
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="services">
                                Usługi
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="signup">
                                Rejestracja
                            </NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Zaloguj
                        </NavBtnLink>
                    </NavBtn>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
