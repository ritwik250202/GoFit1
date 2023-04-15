import React from 'react'
import FotoLarissa from '../../images/profilepic.jpeg'
import FotoNathalie from '../../images/tp.jpeg'
import FotoMurilo from '../../images/ap.jpeg'
import FotoYasmin from '../../images/yasmin.jpg'


import {
    FaLinkedin,
    FaGithub
}
    from 'react-icons/fa';
import {
    Container,
    ContactWrap,
    ContactContainer,
    ContactCard,
    ContactPhoto,
    ContactH2,
    SocialContactContainer,
    SocialMediaLink,
    ContactH1
   
} from '././ContactElements'


const Contact = () => {
    return (
        <>
            <Container>
                <ContactWrap>

            <ContactH1>Meet the team</ContactH1>

                    <ContactContainer>
                        
                    <ContactCard>
                    <ContactPhoto src={FotoLarissa} />
                    <ContactH2>Ritwik Singh</ContactH2>

                    <SocialContactContainer>
                    <SocialMediaLink href="https://www.linkedin.com/in/ritwiksingh250202/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialMediaLink>

                            <SocialMediaLink href="https://github.com/ritwik250202" target="_blank"
                                aria-label="GitHub">
                                <FaGithub />
                            </SocialMediaLink>
                    </SocialContactContainer>
                </ContactCard>

                <ContactCard>
                    <ContactPhoto src={FotoMurilo} />
                    <ContactH2>Aashika Prakash</ContactH2>

                    <SocialContactContainer>
                    <SocialMediaLink href="https://www.linkedin.com/in/ritwiksingh250202/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialMediaLink>

                            <SocialMediaLink href="https://github.com/ritwik250202" target="_blank"
                                aria-label="GitHub">
                                <FaGithub />
                            </SocialMediaLink>
                    </SocialContactContainer>
                </ContactCard>

                <ContactCard>
                    <ContactPhoto src={FotoNathalie} />
                    <ContactH2>Tanushree Ghosh</ContactH2>

                    <SocialContactContainer>
                    <SocialMediaLink href="https://www.linkedin.com/in/ritwiksingh250202/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialMediaLink>

                            <SocialMediaLink href="https://github.com/ritwik250202" target="_blank"
                                aria-label="GitHub">
                                <FaGithub />
                            </SocialMediaLink>
                    </SocialContactContainer>
                </ContactCard>

                



                    </ContactContainer>

                </ContactWrap>
            </Container>
        </>
    )
}

export default Contact;
