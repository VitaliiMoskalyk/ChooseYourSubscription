import MainLogo from '../../images/mainLogo.png';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import {
  FooterStl,
  Title2,
  Paragh,
  Navigate,
  Title4,
  Links,
  SiteNavigationWrapper,
  SocialMediaWrapper,
  Span1,
  Span3,
  Span4,
  SocialItem,
  SocialWrapper,
} from './Footer.styled';
import SiteNavigation from 'components/SiteNavigation/SiteNavigation';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';

const Footer = () => {
  return (
    <Span4>
      <FooterStl>
        <Span1>
          <img src={MainLogo} alt="MainLogo" />
          <Title2>DiscountsOnServices</Title2>
          <Paragh>It's simple, fast and economical</Paragh>
        </Span1>

        <Navigate>
          <span>
            <Title4>Subscriptions</Title4>
            <Links>
              <SocialItem>Netflix</SocialItem>
              <SocialItem>YouTube Premium</SocialItem>
              <SocialItem>Spotify</SocialItem>
            </Links>
          </span>

          <span>
            <Title4>Site navigation</Title4>
            <SiteNavigationWrapper>
              <SiteNavigation />
            </SiteNavigationWrapper>
          </span>
        </Navigate>
        <SocialWrapper>
          <SocialMediaWrapper>
            <SocialMedia fill="#fff" width="32" />
          </SocialMediaWrapper>
          <div>
            <LanguageSwitcher fill="#FFFFFF" />
          </div>
        </SocialWrapper>

        <Span3>
          <hr />
          <p>Privacy Policy</p>
          <p>Copyright 2022 © All Rights Reserved</p>
          <p>Developed by Vitalii Moskalik</p>
        </Span3>
      </FooterStl>
    </Span4>
  );
};

export default Footer;
