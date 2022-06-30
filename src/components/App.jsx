import { Routes, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage/MainPage';
import MobileModal from 'pages/MobileModal/MobileModal';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="main" element={<MobileModal />} />
      </Routes>
    </>
  );
};
