import { useWindowWidth } from '@react-hook/window-size';
import { useEffect } from 'react';

const { default: Button } = require('components/Button/Button');
const { default: SocialMedia } = require('components/SocialMedia/SocialMedia');
const { default: Svg } = require('components/Svg/Svg');

const {
  PageNav,
  NavItem,
  Link,
  NavTitle,
  ButtonWrap,
  ModalWrapper,
  ModalContent,
  SocialMediaWrapper,
} = require('./MobileModal.styled');

const MobileModal = ({ onClose }) => {
  const onlyWidth = useWindowWidth();

  useEffect(() => {
    window.addEventListener('keydown', close);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', close);
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    };
  });

  const close = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') onClose();
  };

  return (
    onlyWidth < 1439 && (
      <ModalWrapper onClick={close}>
        <ModalContent>
          <PageNav>
            <ul>
              <NavItem>
                <Link href="#Home" onClick={onClose}>
                  <Svg icon="icon-Home" width="20" height="18" />
                  <NavTitle>Home</NavTitle>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#AboutSection" onClick={onClose}>
                  <Svg icon="icon-About" width="20" height="18" />
                  <NavTitle>About</NavTitle>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#FAQ" onClick={onClose}>
                  <Svg icon="icon-FAQ" width="20" height="18" />
                  <NavTitle>FAQ</NavTitle>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#Support" onClick={onClose}>
                  <Svg icon="icon-Support" width="20" height="18" />
                  <NavTitle>Support</NavTitle>
                </Link>
              </NavItem>
            </ul>
          </PageNav>
          <PageNav>
            <ul>
              <NavItem>
                <Link href="#">
                  <NavTitle>Netflix</NavTitle>
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
            <Button blue>Login</Button>
            <Button blue>Sign up</Button>
          </ButtonWrap>

          <SocialMediaWrapper>
            <SocialMedia fill="#333333" width="26.67" />
          </SocialMediaWrapper>
        </ModalContent>
      </ModalWrapper>
    )
  );
};

export default MobileModal;
