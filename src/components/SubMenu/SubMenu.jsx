import { useEffect, useState } from 'react';
import { Block, Wrapper } from './SubMenu.styled';

const SubMenu = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', close);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', close);
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    };
  });

  const close = e => {
    if (e.code === 'Escape') setMenuIsOpen(false);
    else setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Wrapper href="#" onClick={e => close(e)}>
      {menuIsOpen && <Block>{children}</Block>}
    </Wrapper>
  );
};

export default SubMenu;
