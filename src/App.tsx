import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import NotFound from './pages/NotFound';
import Guides from './pages/Resources/Guides';
import EatingOut from './pages/Resources/Guides/EatingOut';
import Flying from './pages/Resources/Guides/Flying';
import Dating from './pages/Resources/Guides/Dating';
import Parenting from './pages/Resources/Guides/Parenting';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-omj" element={<AboutOMJ />} />
            <Route path="/mission-and-goals" element={<MissionAndGoals />} />
            <Route path="/about-tmj" element={<AboutTMJ />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/guides" element={<Guides />} />
            <Route path="/resources/guides/eating-out" element={<EatingOut />} />
            <Route path="/resources/guides/flying" element={<Flying />} />
            <Route path="/resources/guides/dating" element={<Dating />} />
            <Route path="/resources/guides/parenting" element={<Parenting />} />
            <Route path="/why-omj" element={<WhyOMJ />} />
            <Route path="/sponsor-us" element={<SponsorUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/support" element={<Support />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;