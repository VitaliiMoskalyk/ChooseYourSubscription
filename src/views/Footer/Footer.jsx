import MainLogo from '../../images/mainLogo.png';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import {
  FooterStl,
  Title2,
  Paragh,
  Title4,
  NavigationWrapper,
  SocialMediaWrapper,
  Span1,
  Span3,
  Span4,
  SocialWrapper,
} from './Footer.styled';
import SiteNavigation from 'components/SiteNavigation/SiteNavigation';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import PageNavigation from 'components/PageNavigation/PageNavigation';

const Footer = () => {
  return (
    <Span4>
      <FooterStl>
        <Span1>
          <img src={MainLogo} alt="MainLogo" />
          <Title2>DiscountsOnServices</Title2>
          <Paragh>It's simple, fast and economical</Paragh>
        </Span1>
        <NavigationWrapper>
          <Title4>Subscriptions</Title4>
          <PageNavigation />
        </NavigationWrapper>

        <NavigationWrapper>
          <Title4>Site navigation</Title4>
          <SiteNavigation />
        </NavigationWrapper>

        <SocialWrapper>
          <SocialMediaWrapper>
            <SocialMedia fill="#fff" width="32" inverse />
          </SocialMediaWrapper>
          <div>
            <LanguageSwitcher fill="#FFFFFF" />
          </div>
        </SocialWrapper>

        <Span3>
          <p>Privacy Policy</p>
          <p>Copyright 2022 © All Rights Reserved</p>
          <p>Developed by Vitalii Moskalik</p>
        </Span3>
      </FooterStl>
    </Span4>
  );
};

export default Footer;
