import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    // Get the current year dynamically for the copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerCol}>
                        {/* Assuming logo-white.png is in public/images */}
                        <img src="/images/logo-white.png" alt="Nyari Church" className={styles.footerLogo} />
                        <p>Living by Faith, Growing in Grace</p>
                        <div className={styles.socialLinks}>
                            <a href="https://web.facebook.com/pceanyariparish" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/ministries">Ministries</Link></li>
                            <li><Link to="/sermons">Sermons</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/give">Give</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/devotionals">Devotionals</Link></li>
                            <li><Link to="/prayer">Prayer Requests</Link></li>
                            <li><Link to="/bible-studies">Bible Studies</Link></li>
                            <li><Link to="/library">Media Library</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4>Contact Info</h4>
                        <address>
                            Red Hill Link RD<br/>
                            Village Mkt<br/><br/>
                            <i className="fas fa-phone"></i> +2547...<br/>
                            <i className="fas fa-envelope"></i> info@nyari.org
                        </address>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {currentYear} PCEA NYARI Church. All Rights Reserved.</p>
                    <div className={styles.footerLinks}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Use</Link>
                    </div>
                </div>
            </div>
            {/* Back to top button functionality would be added with state/useEffect */}
        </footer>
    );
};

export default Footer;