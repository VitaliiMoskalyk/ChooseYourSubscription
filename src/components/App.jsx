import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import NetflixPage from 'pages/NetflixPage/NetflixPage';
import { Footer, Header } from 'views';
import { useState } from 'react';
import MobileModal from 'pages/MobileModal/MobileModal';
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
      {onlyWidth < 1439 && isOpen ? (
        <MobileModal onClose={handleClick} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="netflix" element={<NetflixPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};
