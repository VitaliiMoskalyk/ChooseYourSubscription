import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import NetflixPage from 'pages/NetflixPage/NetflixPage';
import { Footer, Header } from 'views';
import YouTubePage from 'pages/YouTubePage/YouTubePage';
import SpotifyPage from 'pages/SpotifyPage/SpotifyPage';
import Modals from 'pages/Modals/Modals';

export const App = () => {
  return (
    <>
      <Header />
      <Modals />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="netflix" element={<NetflixPage />} />
        <Route path="youtube" element={<YouTubePage />} />
        <Route path="spotify" element={<SpotifyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};
