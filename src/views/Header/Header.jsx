import Svg from 'components/Svg/Svg';
import Logo from '../../images/logo.svg';
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

import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuModal } from 'redux/slices/modalSlace';
import PageNavigation from 'components/PageNavigation/PageNavigation';
import SubMenu from 'components/SubMenu/SubMenu';

const Header = () => {
  const onlyWidth = useWindowWidth();

  const dispatch = useDispatch();
  const menuModalIsOpen = useSelector(state => state.modals.menuModal);

  return (
    <>
      <Head>
        <LogoTitle logo={Logo} title="DiscountsOnServices" />
        {onlyWidth > 1439 && (
          <>
            <SubscriptionsWrapper>
              <SiteNavTitle>Subscriptions</SiteNavTitle>
              <Svg icon="icon-Lang" width="12" fill="#333333" height="12" />
              <SubMenu>
                <PageNavigation />
              </SubMenu>
            </SubscriptionsWrapper>

            <SiteNavigationWrapper>
              <SiteNavigation />
            </SiteNavigationWrapper>

            <SocialMediaWrapper>
              <SocialMedia fill="#333333" width="24" />
            </SocialMediaWrapper>

            <LanguageWrapper>
              <LanguageSwitcher fill="#333333" />
              <SubMenu>English Russian Ukrainian</SubMenu>
            </LanguageWrapper>

            <ButtonWrapper>
              <LogInBtn>Log in</LogInBtn>
            </ButtonWrapper>
          </>
        )}

        {onlyWidth < 1440 && (
          <div onClick={() => dispatch(toggleMenuModal())}>
            {menuModalIsOpen ? (
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
    </>
  );
};

export default Header;
