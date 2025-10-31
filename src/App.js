import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Component
import Header from './components/Layout/Header'; // Line 6: Header is imported

// Import Page Components
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Give from './pages/Give';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Home from './pages/Home'; // Assuming you have a Home component

// Import your Global CSS (e.g., App.css, index.css) here

const App = () => {
    return (
        // The Header is now USED here, which resolves the warning.
        <Router>
            <Header /> 
            
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sermons" element={<Sermons />} />
                    <Route path="/ministries" element={<Ministries />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/give" element={<Give />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Add a 404 route here */}
                </Routes>
            </main>

            {/* Footer component would typically go here */}
        </Router>
    );
};

export default App;