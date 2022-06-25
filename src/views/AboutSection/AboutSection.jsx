import AboutPic from '../../images/About.jpg';
import MainLogo from '../../images/mainLogo.png';

const AboutSection = () => {
  return (
    <>
      <h2>About us</h2>
      <img src={AboutPic} alt="about" width="327" />
      <div>
        <img src={MainLogo} alt="MainLogo" />
        <p>
          We offer you a subscription to various media services at the best
          price.
        </p>
        <p>
          We have partnered with several companies to help you find the best
          prices for your media subscriptions and provide you with the best
          prices for the Premium subscriptions you want.
        </p>
        <b>It's simple, fast and economical.</b>
      </div>
    </>
  );
};

export default AboutSection;
