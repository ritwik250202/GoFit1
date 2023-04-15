import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube, FaLinkedin,
    FaTwitter
}
    from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
}
    from './FooterElements';
const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>Healthy Living</FooterLink>
                            <FooterLink to='/'>Fitness</FooterLink>
                            <FooterLink to='/'>Health</FooterLink>
                            <FooterLink to='/'>Nutrition</FooterLink>
                            <FooterLink to='/'>Meal Plans</FooterLink>
                        </FooterLinkItems>


                    </FooterLinksWrapper>


                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            GoFit
                        </SocialLogo>
                        <WebsiteRights> GoFit © {new Date().getFullYear()}
                             | All rigths reserved</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/ritwik.singh.1276487" target="_blank"
                                aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="https://www.instagram.com/ritwik230602/" target="_blank"
                                aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="https://www.youtube.com/channel/UCu6uI6hDDAAgcFuKB6XpqJg" target="_blank"
                                aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href="https://twitter.com/RitwikS31484635" target="_blank"
                                aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="https://www.linkedin.com/in/ritwiksingh250202/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>

                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
