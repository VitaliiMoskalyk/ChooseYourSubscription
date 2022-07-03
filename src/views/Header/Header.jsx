import Svg from 'components/Svg/Svg';
import MainLogo from '../../images/mainLogo.png';
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

const Header = ({ opener, svgStatus }) => {
  const onlyWidth = useWindowWidth();

  return (
    <Head>
      <LogoTitle logo={MainLogo} />

      {onlyWidth > 1440 && (
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

      {onlyWidth < 1439 && (
        <div onClick={opener}>
          {svgStatus ? (
            <Svg width="28" height="28" icon="icon-CloseModal" />
          ) : (
            <Svg width="18" height="16" icon="icon-Vector" />
          )}
        </div>
      )}
    </Head>
  );
};

export default Header;
