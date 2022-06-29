import MainPage from 'pages/MainPage/MainPage';
import MobileModal from 'pages/MobileModal/MobileModal';
import { useState } from 'react';
import { Footer, Header } from 'views';
import { useWindowWidth } from '@react-hook/window-size';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onlyWidth = useWindowWidth();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header opener={handleClick} svgStatus={isOpen} />
      {isOpen && onlyWidth < 767 ? <MobileModal /> : <MainPage />}
      {!isOpen && <Footer />}
    </>
  );
};
