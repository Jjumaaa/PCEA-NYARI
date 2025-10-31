// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import MinistryTabs from '../components/Common/MinistryTabs'; // Line 4: MinistryTabs is imported

// Reusable component for the info cards at the bottom (unchanged)
// const InfoCard = ({ iconClass, title, text }) => (
//     <div className={styles.infoCard}>
//         <div className={styles.iconWrapper}>
//             <i className={`fas ${iconClass}`}></i>
//         </div>
//         <h4>{title}</h4>
//         <p>{text}</p>
//     </div>
// );

const HeroSection = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.heroSlider}>
                <div 
                    className={`${styles.slide} ${styles.active}`} 
                    style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/exterior.jpg')" }}
                >
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h2>Welcome Home</h2>
                            <p>Wherever you are on your spiritual journey, you're welcome here</p>
                            <div className={styles.heroButtons}>
                                <Link to="/events#services" className={`${styles.btnLarge} ${styles.primary}`}>Join Us Sunday</Link>
                                <Link to="/about#new-here" className={`${styles.btnLarge} ${styles.outline}`}>I'm New Here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 👇 MINISTRY TABS MUST BE RENDERED HERE TO RESOLVE THE WARNING 👇 */}
            <div className={styles.ministryTabsWrapper}> 
                 <MinistryTabs /> 
            </div>
            {/* 👆 End Ministry Tabs 👆 */}
        </section>
    );
};

const QuickInfoBar = () => {
    return (
        <section className={styles.quickInfo}>
            <div className={`container ${styles.infoContainer}`}>
                <div className={styles.infoItem}>
                    <i className="fas fa-clock"></i>
                    <div>
                        <h4>Service Times</h4>
                        <p>Sunday 9:00 AM & 11:00 AM</p>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                        <h4>Location</h4>
                        <p>Red Hill Link Rd</p>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <i className="fas fa-church"></i>
                    <div>
                        <h4>What to Expect</h4>
                        <p>Casual atmosphere, passionate worship</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <QuickInfoBar />
    </>
  );
};

export default Home;