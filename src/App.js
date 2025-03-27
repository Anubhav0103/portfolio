import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Initialize Google Analytics 4 with the Measurement ID
const TRACKING_ID = 'G-K1ZPE2XFXK'; // Your Measurement ID
ReactGA.initialize(TRACKING_ID);

// Component to track page views on route changes
function TrackPageViews() {
  const location = useLocation();
  useEffect(() => {
    // Send pageview with the current path
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800 text-gray-300 font-sans">
        <TrackPageViews />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;