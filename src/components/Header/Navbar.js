import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import AnnouncementBar from './AnnouncementBar';
// NOTE: You'll need to place logo2.jpg in the src/images folder or public/images folder

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <AnnouncementBar />
            <header className={styles.header}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.logo}>
                        {/* The image source needs to be managed by React (public folder or import) */}
                        <img src="/images/logo2.jpg" alt="PCEA NYARI Church Logo" className={styles.logoImg} />
                        <div className={styles.logoText}>
                            <h1>PCEA NYARI CHURCH</h1>
                            <p>Living by Faith, Growing in Grace</p>
                        </div>
                    </div>

                    <nav className={`${styles.mainNav} ${isMobileMenuOpen ? styles.active : ''}`}>
                        <ul>
                            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                            <li className={styles.dropdown}>
                                <Link to="/ministries">Ministries <i className="fas fa-chevron-down"></i></Link>
                                <ul className={styles.dropdownMenu}>
                                    {/* These sub-links will likely become sub-sections on the Ministries page */}
                                    <li><Link to="/ministries#children" onClick={toggleMenu}>Children</Link></li>
                                    <li><Link to="/ministries#youth" onClick={toggleMenu}>Youth</Link></li>
                                    <li><Link to="/ministries#adults" onClick={toggleMenu}>Adults</Link></li>
                                    <li><Link to="/ministries#seniors" onClick={toggleMenu}>Seniors</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/sermons" onClick={toggleMenu}>Sermons</Link></li>
                            <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
                            <li><Link to="/give" onClick={toggleMenu}>Give</Link></li>
                            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className={styles.headerCta}>
                        {/* Using Link instead of <a> for internal routing */}
                        <Link to="/events#services" className={styles.btnPrimary} onClick={toggleMenu}>Service Times</Link>
                        <div className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle Navigation Menu">
                            <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;