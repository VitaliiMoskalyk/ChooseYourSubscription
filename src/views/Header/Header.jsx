import Svg from 'components/Svg/Svg';
import MainLogo from '../../images/mainLogo.png';
import { Head } from './Header.styled';
import { useWindowWidth } from '@react-hook/window-size';

const Header = ({ opener, svgStatus }) => {
  const onlyWidth = useWindowWidth();
  const newLocal = '#';
  return (
    <Head>
      <img src={MainLogo} alt="MainLogo" width="32" />
      {onlyWidth < 767 && (
        <a href={newLocal} onClick={opener}>
          {svgStatus ? (
            <Svg width="28" height="28" icon="icon-CloseModal" />
          ) : (
            <Svg width="18" height="16" icon="icon-Vector" />
          )}
        </a>
      )}
    </Head>
  );
};

export default Header;
