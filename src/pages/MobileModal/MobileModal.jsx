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
} = require('./MobileModal.styled');

const MobileModal = () => {
  return (
    <ModalWrapper>
      <ModalContent>
        <PageNav>
          <ul>
            <NavItem>
              <Link href="/#">
                <Svg icon="icon-Home" width="20" height="18" />
                <NavTitle>Home</NavTitle>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#AboutSection">
                <Svg icon="icon-About" width="20" height="18" />
                <NavTitle>About</NavTitle>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#">
                <Svg icon="icon-FAQ" width="20" height="18" />
                <NavTitle>FAQ</NavTitle>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#">
                <Svg icon="icon-Support" width="20" height="18" />
                <NavTitle>Support</NavTitle>
              </Link>
            </NavItem>
          </ul>
        </PageNav>
        <PageNav>
          <ul>
            <NavItem>
              <Link href="/#">
                <NavTitle>Netflix</NavTitle>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#">
                <NavTitle>YouTube</NavTitle>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#">
                <NavTitle>Spotify</NavTitle>
              </Link>
            </NavItem>
          </ul>
        </PageNav>
        <ButtonWrap>
          <Button blue>Login</Button>

          <Button blue>Sign up</Button>
        </ButtonWrap>
        <SocialMedia fill="#333333" />
      </ModalContent>
    </ModalWrapper>
  );
};

export default MobileModal;
