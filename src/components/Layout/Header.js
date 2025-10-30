import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';
import styles from './Header.module.css';

const Header = () => {
    // State to toggle the mobile menu open/closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.navbar}>
                    
                    {/* Logo - Links to Home */}
                    <Link to="/" className={styles.logoContainer} onClick={closeMenu}>
                        <img 
                            src="/images/church_logo.png" // Assumes logo is in public/images
                            alt="PCEA Nyari Church Logo"
                            className={styles.logo}
                        />
                    </Link>

                    {/* Mobile Menu Button (Hamburger) */}
                    <button 
                        className={styles.menuToggle} 
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="main-nav-links"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    {/* Navigation Links */}
                    <div 
                        id="main-nav-links"
                        className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}
                    >
                        <Link to="/about" className={styles.navItem} onClick={closeMenu}>About Us</Link>
                        <Link to="/sermons" className={styles.navItem} onClick={closeMenu}>Sermons</Link>
                        <Link to="/ministries" className={styles.navItem} onClick={closeMenu}>Ministries</Link>
                        <Link to="/events" className={styles.navItem} onClick={closeMenu}>Events</Link>
                        <Link to="/contact" className={styles.navItem} onClick={closeMenu}>Contact</Link>
                        
                        {/* Call-to-Action Button */}
                        <div className={styles.ctaButton}>
                            <Link to="/give" onClick={closeMenu}>
                                <Button variant="primary" size="small">
                                    Give Online
                                </Button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;