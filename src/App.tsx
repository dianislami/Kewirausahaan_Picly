import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './landing_page';
import Services from './pages/services';
import AboutUsPage from './pages/about_us';
import ContactUsPage from './pages/contact_us';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;