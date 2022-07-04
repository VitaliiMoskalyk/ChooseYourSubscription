import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import Modal from 'components/Modal/Modal';
import { NavLink } from 'react-router-dom';

const { default: Button } = require('components/Button/Button');
const { default: SocialMedia } = require('components/SocialMedia/SocialMedia');
const { default: Svg } = require('components/Svg/Svg');

const {
  PageNav,
  NavItem,
  Link,
  NavTitle,
  ButtonWrap,
  SocialMediaWrapper,
  ButtonWrapper,
  SocialWrapper,
} = require('./MobileModal.styled');

const MobileModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <PageNav>
        <ul>
          <NavItem>
            <NavLink to="/" onClick={onClose}>
              <Link>
                <Svg icon="icon-Home" width="20" height="18" />
                <NavTitle>Home</NavTitle>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to={{ pathname: '/', hash: '#AboutSection' }}
              onClick={onClose}
            >
              <Link>
                <Svg icon="icon-About" width="20" height="18" />
                <NavTitle>About</NavTitle>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={{ pathname: '/', hash: '#FAQ' }} onClick={onClose}>
              <Link>
                <Svg icon="icon-FAQ" width="20" height="18" />
                <NavTitle>FAQ</NavTitle>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to={{ pathname: '/', hash: '#AboutSection' }}
              onClick={onClose}
            >
              <Link href="#Support" onClick={onClose}>
                <Svg icon="icon-Support" width="20" height="18" />
                <NavTitle>Support</NavTitle>
              </Link>
            </NavLink>
          </NavItem>
        </ul>
      </PageNav>
      <PageNav>
        <ul>
          <NavItem>
            <Link>
              <NavLink to="/netflix" onClick={onClose}>
                <NavTitle>Netflix</NavTitle>
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#">
              <NavTitle>YouTube</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#">
              <NavTitle>Spotify</NavTitle>
            </Link>
          </NavItem>
        </ul>
      </PageNav>

      <ButtonWrap>
        <ButtonWrapper>
          <Button blue>Login</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button blue>Sign up</Button>
        </ButtonWrapper>
      </ButtonWrap>

      <SocialMediaWrapper>
        <SocialWrapper>
          <SocialMedia fill="#333333" width="32" />
        </SocialWrapper>
        <div>
          <LanguageSwitcher fill="#333333" />
        </div>
      </SocialMediaWrapper>
    </Modal>
  );
};

export default MobileModal;
