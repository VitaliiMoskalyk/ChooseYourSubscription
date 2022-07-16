// import Svg from 'components/Svg/Svg';
import {
  NavigationItem,
  NavigationTitle,
  Navigation,
} from './SiteNavigation.styled';

const SiteNavigation = ({ onClick }) => {
  return (
    <Navigation>
      <li>
        <NavigationItem smooth to="/#AboutSection" onClick={onClick}>
          <NavigationTitle>About</NavigationTitle>
        </NavigationItem>
      </li>
      <li>
        <NavigationItem smooth to="#FAQ" onClick={onClick}>
          <NavigationTitle>FAQ</NavigationTitle>
        </NavigationItem>
      </li>
      <li>
        <NavigationItem smooth to="/" onClick={onClick}>
          <NavigationTitle>Support</NavigationTitle>
        </NavigationItem>
      </li>
    </Navigation>
  );
};

export default SiteNavigation;
