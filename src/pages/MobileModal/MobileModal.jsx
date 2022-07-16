import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';

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
    <>
      <PageNav>
        <ul>
          <NavItem>
            <Link smooth to="/" onClick={onClose}>
              <Svg icon="icon-Home" width="20" height="18" />
              <NavTitle>Home</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link smooth to="/#AboutSection" onClick={onClose}>
              <Svg icon="icon-About" width="20" height="18" />
              <NavTitle>About</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link smooth to="/#FAQ" onClick={onClose}>
              <Svg icon="icon-FAQ" width="20" height="18" />
              <NavTitle>FAQ</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link smooth to="/#FAQ" onClick={onClose}>
              <Svg icon="icon-Support" width="20" height="18" />
              <NavTitle>Support</NavTitle>
            </Link>
          </NavItem>
        </ul>
      </PageNav>
      <PageNav>
        <ul>
          <NavItem>
            <Link to="/netflix" onClick={onClose}>
              <NavTitle>Netflix</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/youtube" onClick={onClose}>
              <NavTitle>YouTube</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/spotify" onClick={onClose}>
              <NavTitle>Spotify</NavTitle>
            </Link>
          </NavItem>
        </ul>
      </PageNav>
      <ButtonWrap>
        <ButtonWrapper>
          <Button>Login</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button>Sign up</Button>
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
    </>
  );
};

export default MobileModal;
