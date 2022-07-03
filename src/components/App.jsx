import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import NetflixPage from 'pages/NetflixPage/NetflixPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="netflix" element={<NetflixPage />} />
      </Routes>
    </>
  );
};
