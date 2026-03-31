import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage       from './pages/HomePage';
import AboutPage      from './pages/AboutPage';
import DonatePage     from './pages/DonatePage';
import ContactPage    from './pages/ContactPage';
import BrowsePetsPage from './pages/BrowsePetsPage';
import PetDetailPage  from './pages/PetDetailPage';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                element={<HomePage />}       />
        <Route path="/about"           element={<AboutPage />}      />
        <Route path="/donate"          element={<DonatePage />}     />
        <Route path="/contact"         element={<ContactPage />}    />
        <Route path="/browse-pets"     element={<BrowsePetsPage />} />
        <Route path="/pet/:id"         element={<PetDetailPage />}  />
        {/* Coming soon */}
        <Route path="/success-stories" element={<HomePage />}       />
      </Routes>
    </BrowserRouter>
  );
}