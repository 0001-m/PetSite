import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Placeholder routes — swap for real pages as you build them */}
        <Route path="/adopt"   element={<HomePage />} />
        <Route path="/donate"  element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}