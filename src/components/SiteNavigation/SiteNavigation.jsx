import {
  Navigation,
  NavigationItem,
  NavigationTitle,
} from './SiteNavigation.styled';

const SiteNavigation = ({ children }) => {
  return (
    <Navigation>
      {children && (
        <NavigationItem href="#">
          <NavigationTitle>{children}</NavigationTitle>
        </NavigationItem>
      )}
      <NavigationItem href="#AboutSection">
        <NavigationTitle>About</NavigationTitle>
      </NavigationItem>
      <NavigationItem href="#FAQ">
        <NavigationTitle>FAQ</NavigationTitle>
      </NavigationItem>
      <NavigationItem href="#">
        <NavigationTitle>Support</NavigationTitle>
      </NavigationItem>
    </Navigation>
  );
};

export default SiteNavigation;
