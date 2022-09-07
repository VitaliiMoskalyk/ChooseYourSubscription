import LogInBtn from 'components/header_LogInBtn/LogInBtn';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { useDispatch } from 'react-redux';
import { toggleMenuModal } from 'redux/slices/modalSlace';

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

const MobileModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <PageNav>
        <ul>
          <NavItem>
            <Link smooth to="/" onClick={() => dispatch(toggleMenuModal())}>
              <Svg icon="icon-Home" width="20" height="18" />
              <NavTitle>Home</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link
              smooth
              to="/#AboutSection"
              onClick={() => dispatch(toggleMenuModal())}
            >
              <Svg icon="icon-About" width="20" height="18" />
              <NavTitle>About</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link smooth to="/#FAQ" onClick={() => dispatch(toggleMenuModal())}>
              <Svg icon="icon-FAQ" width="20" height="18" />
              <NavTitle>FAQ</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link smooth to="/#FAQ" onClick={() => dispatch(toggleMenuModal())}>
              <Svg icon="icon-Support" width="20" height="18" />
              <NavTitle>Support</NavTitle>
            </Link>
          </NavItem>
        </ul>
      </PageNav>
      <PageNav>
        <ul>
          <NavItem>
            <Link to="/netflix" onClick={() => dispatch(toggleMenuModal())}>
              <NavTitle>Netflix</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/youtube" onClick={() => dispatch(toggleMenuModal())}>
              <NavTitle>YouTube</NavTitle>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/spotify" onClick={() => dispatch(toggleMenuModal())}>
              <NavTitle>Spotify</NavTitle>
            </Link>
          </NavItem>
        </ul>
      </PageNav>
      <ButtonWrap>
        <ButtonWrapper>
          <LogInBtn>Login</LogInBtn>
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
