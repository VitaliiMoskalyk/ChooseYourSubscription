import MainLogo from '../../images/mainLogo.png';
import sprite from '../../images/sprite.svg';

const Header = () => {
  return (
    <header>
      <img src={MainLogo} alt="MainLogo" />
      <a href="#">
        <svg width="18" height="16">
          <use href={`${sprite}#icon-Vector`}></use>
        </svg>
      </a>
    </header>
  );
};

export default Header;
