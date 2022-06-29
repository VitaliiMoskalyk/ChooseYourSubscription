import MainLogo from '../../images/mainLogo.png';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import {
  FooterStl,
  Title2,
  Paragh,
  Navigate,
  Title4,
  Links,
  Lang,
  Span,
  Span1,
  Span3,
  Span4,
  SocialItem,
} from './Footer.styled';

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
            <Links>
              <Lang href="#AboutSection">
                <SocialItem>About</SocialItem>
              </Lang>
              <Lang href="#FAQ">
                <SocialItem>FAQ</SocialItem>
              </Lang>

              <Lang href="#">
                <SocialItem>Support</SocialItem>
              </Lang>
            </Links>
          </span>
        </Navigate>
        <Span>
          <SocialMedia fill="#fff" />
        </Span>

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
