import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Give from './pages/Give';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Header components will be outside the Routes so they show on every page */}
      <Navbar />
      
      <main>
        <Routes>
          {/* Note: Your original HTML was a single-page structure. 
              We'll use this multi-page structure for React best practice, 
              mapping each main section to a separate route. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route for 404 - optional */}
          {/* <Route path="*" element={<div>404 Page Not Found</div>} /> */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;