import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Footer/Footer'; 

// Import Page Components (Ensure you have placeholder files for these to compile)
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Give from './pages/Give';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Home from './pages/Home'; 

const App = () => {
    return (
        <Router>
            {/* Header stays static at the top of the page */}
            <Header /> 
            
            {/* Main content area */}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sermons" element={<Sermons />} />
                    <Route path="/ministries" element={<Ministries />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/give" element={<Give />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    {/* Placeholder routes for the Footer links */}
                    <Route path="/blog" element={<div>Blog Page</div>} />
                    <Route path="/devotionals" element={<div>Devotionals Page</div>} />
                    <Route path="/prayer" element={<div>Prayer Requests Page</div>} />
                    <Route path="/bible-studies" element={<div>Bible Studies Page</div>} />
                    <Route path="/library" element={<div>Media Library Page</div>} />
                    <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
                    <Route path="/terms" element={<div>Terms of Use Page</div>} />
                </Routes>
            </main>

            {/* Footer stays static at the bottom of the page */}
            <Footer /> 
        </Router>
    );
};

export default App;