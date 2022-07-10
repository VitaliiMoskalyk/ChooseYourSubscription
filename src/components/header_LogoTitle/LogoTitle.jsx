import { LogoWrapper, Title, Img } from './LogoTitle.styled';

const LogoTitle = ({ logo, title }) => {
  return (
    <LogoWrapper>
      <Img src={logo} alt="MainLogo" />
      <Title>{title}</Title>
    </LogoWrapper>
  );
};

export default LogoTitle;
