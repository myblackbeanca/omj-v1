import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutOMJ from './pages/AboutOMJ';
import MissionAndGoals from './pages/MissionAndGoals';
import AboutTMJ from './pages/AboutTMJ';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import WhyOMJ from './pages/WhyOMJ';
import SponsorUs from './pages/SponsorUs';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Podcast from './pages/Podcast';
import Support from './pages/Support';
import ThankYou from './pages/ThankYou';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-omj" element={<AboutOMJ />} />
            <Route path="/mission-and-goals" element={<MissionAndGoals />} />
            <Route path="/about-tmj" element={<AboutTMJ />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/why-omj" element={<WhyOMJ />} />
            <Route path="/sponsor-us" element={<SponsorUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/support" element={<Support />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;