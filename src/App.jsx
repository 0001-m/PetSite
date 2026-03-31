import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage    from './pages/HomePage';
import AboutPage   from './pages/AboutPage';
import DonatePage  from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                element={<HomePage />}    />
        <Route path="/about"           element={<AboutPage />}   />
        <Route path="/donate"          element={<DonatePage />}  />
        <Route path="/contact"         element={<ContactPage />} />
        {/* Pages coming soon — swap these out when designs are ready */}
        <Route path="/browse-pets"     element={<HomePage />} />
        <Route path="/success-stories" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}