import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import yourLogoImage from '../../images/removelogo.png';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          For upcoming courses/challenges from your beloved creators
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
        <SocialLogo to='/'>
          <SocialIcon src={yourLogoImage} alt='Logo' />
        </SocialLogo>
          <WebsiteRights>ChallangeMOB © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.instagram.com/harshith.presents/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://www.youtube.com/@thepapusgang' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/in/harshithtunuguntla/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;