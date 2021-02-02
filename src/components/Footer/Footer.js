import React from 'react';
import {FooterContainer, FooterLink, FooterLinkItem, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterWrap} from './FooterElements'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLink to="/signin">2020 PWSZ Tarnów</FooterLink>
                            <FooterLink to="/signin">Jakub Zegar</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
