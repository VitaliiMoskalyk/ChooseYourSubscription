import {
  NavigationItem,
  NavigationTitle,
  Navigation,
} from './PageNavigation.styled';

const PageNavigation = ({ onClick }) => {
  //   const goToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   };
  return (
    <Navigation>
      <li>
        <NavigationItem smooth to="/netflix" onClick={onClick}>
          <NavigationTitle>Netflix</NavigationTitle>
        </NavigationItem>
      </li>
      <li>
        <NavigationItem smooth to="youtube" onClick={onClick}>
          <NavigationTitle>YouTube Premium</NavigationTitle>
        </NavigationItem>
      </li>
      <li>
        <NavigationItem smooth to="/spotify" onClick={onClick}>
          <NavigationTitle>Spotify</NavigationTitle>
        </NavigationItem>
      </li>
    </Navigation>
  );
};

export default PageNavigation;
