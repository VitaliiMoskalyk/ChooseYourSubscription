import AboutPic from '../../images/About.jpg';
import MainLogo from '../../images/mainLogo.png';
import ImageBlock from 'components/ImageBlock/ImageBlock';

import { Title2, BorderWrap, Paragr } from './AboutSection.styled';

const AboutSection = () => {
  return (
    <>
      <Title2 id="AboutSection">About us</Title2>

      <ImageBlock src={AboutPic} alt="About our company" />

      <BorderWrap>
        <img src={MainLogo} alt="MainLogo" width="60" />
        <Paragr>
          We offer you a subscription to various media services at the best
          price.
        </Paragr>
        <Paragr>
          We have partnered with several companies to help you find the best
          prices for your media subscriptions and provide you with the best
          prices for the Premium subscriptions you want.
        </Paragr>
        <Paragr>
          <b>It's simple, fast and economical.</b>
        </Paragr>
      </BorderWrap>
    </>
  );
};

export default AboutSection;
