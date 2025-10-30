import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Assume Home.module.css exists

// NOTE: All image paths must be accessible in your public folder (e.g., public/images/exterior.jpg)
const HeroSection = () => {
    return (
        <section id="home" className={styles.hero}>
            {/* For a true React slider, you'd use state/useEffect for transitions. 
                Here, we show the static structure of the first slide. */}
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
                {/* The other slides would be included here, managed by React state */}
            </div>
            {/* Slider controls omitted for pure structural conversion, but would use state/handlers */}
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
      {/* You would add components for About, Sermons, Events, etc. here or route them separately */}
      {/* <AboutSection /> */}
      {/* <SermonsSection /> */}
      {/* etc. */}
    </>
  );
};

export default Home;