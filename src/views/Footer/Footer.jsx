import MainLogo from '../../images/mainLogo.png';
import sprite from '../../images/sprite.svg';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1749B3' }}>
      <img src={MainLogo} alt="MainLogo" />
      <h2>DiscountsOnServices</h2>
      <p>It's simple, fast and economical</p>
      <nav>
        <h4>Subscriptions</h4>
        <ul>
          <li>Netflix</li>
          <li>YouTube Premium</li>
          <li>Spotify</li>
        </ul>
        <h4>Site navigation</h4>
        <ul>
          <li>About</li>
          <li>FAQ</li>
          <li>Support</li>
        </ul>
      </nav>
      <ul>
        <li>
          <a href="#">
            <svg width="32" height="32">
              <use href={`${sprite}#icon-whatsapp`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="32" height="32">
              <use href={`${sprite}#icon-telegram`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <a href="#">
        EN
        <svg width="12" height="12">
          <use href={`${sprite}#icon-Lang`}></use>
        </svg>
      </a>
      <hr />
      <p>Privacy Policy</p>
      <p>Copyright 2022 © All Rights Reserved</p>
      <p>Developed by Vitalii Moskalik</p>
    </footer>
  );
};

export default Footer;
