import { HashLink } from 'react-router-hash-link';

const NavigationItem = ({ children, path, onClick }) => {
  return (
    <HashLink smooth to={path} onClick={onClick}>
      {children}
    </HashLink>
  );
};

export default NavigationItem;
