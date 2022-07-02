import { useWindowWidth } from '@react-hook/window-size';
import { LogoWrapper, Title } from './LogoTitle.styled';

const LogoTitle = ({ logo }) => {
  const onlyWidth = useWindowWidth();

  return (
    <LogoWrapper>
      <img src={logo} alt="MainLogo" width={onlyWidth < 1440 ? '32' : '55'} />
      {onlyWidth > 767 && <Title>DiscountsOnServices</Title>}
    </LogoWrapper>
  );
};

export default LogoTitle;
