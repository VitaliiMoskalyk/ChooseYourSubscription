import Svg from 'components/Svg/Svg';
import Logo from '../../images/Logo.svg';
import {
  Head,
  SocialMediaWrapper,
  SiteNavigationWrapper,
  SubscriptionsWrapper,
  LanguageWrapper,
  SiteNavTitle,
  ButtonWrapper,
} from './Header.styled';
import { useWindowWidth } from '@react-hook/window-size';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import LogoTitle from 'components/header_LogoTitle/LogoTitle';
import SiteNavigation from 'components/SiteNavigation/SiteNavigation';
import LogInBtn from 'components/header_LogInBtn/LogInBtn';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { useState } from 'react';
import MobileModal from 'pages/MobileModal/MobileModal';
import Modal from 'components/Modal/Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onlyWidth = useWindowWidth();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      <Head>
        <LogoTitle logo={Logo} title="DiscountsOnServices" />

        {onlyWidth > 1439 && (
          <>
            <SubscriptionsWrapper>
              <SiteNavTitle>Subscriptions</SiteNavTitle>
              <Svg icon="icon-Lang" width="12" fill="#333333" height="12" />
            </SubscriptionsWrapper>

            <SiteNavigationWrapper>
              <SiteNavigation />
            </SiteNavigationWrapper>

            <SocialMediaWrapper>
              <SocialMedia fill="#333333" width="24" />
            </SocialMediaWrapper>

            <LanguageWrapper>
              <LanguageSwitcher fill="#333333" />
            </LanguageWrapper>

            <ButtonWrapper>
              <LogInBtn>Log in</LogInBtn>
            </ButtonWrapper>
          </>
        )}

        {onlyWidth < 1440 && (
          <div onClick={handleClick}>
            {isOpen ? (
              <Svg
                width="28"
                height="28"
                icon="icon-CloseModal"
                fill="#1749B3"
              />
            ) : (
              <Svg width="18" height="16" icon="icon-Vector" />
            )}
          </div>
        )}
      </Head>
      {isOpen && onlyWidth < 1440 && (
        <Modal isOpen onClose={handleClick}>
          <MobileModal onClose={handleClick} />
        </Modal>
      )}
    </>
  );
};

export default Header;
