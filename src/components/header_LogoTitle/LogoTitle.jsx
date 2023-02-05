import { useNavigate } from 'react-router-dom';
import { LogoWrapper, Title, Img } from './LogoTitle.styled';

const LogoTitle = ({ logo, title }) => {
  const navigate = useNavigate();
  return (
    <LogoWrapper onClick={() => navigate('/')}>
      <Img src={logo} alt="MainLogo" />
      <Title>{title}</Title>
    </LogoWrapper>
  );
};

export default LogoTitle;
