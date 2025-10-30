import React from 'react';
import SectionHeader from '../components/Layout/SectionHeader';
import Accordion from '../components/Common/Accordion';
import Button from '../components/Common/Button';
import styles from './About.module.css'; // Create this file

const beliefsItems = [
    { header: "The Bible", content: <p>We believe the Bible is the inspired, infallible, authoritative Word of God and the final authority for faith and life.</p> },
    { header: "God", content: <p>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</p> },
    { header: "Jesus Christ", content: <p>We believe in the deity of Christ, His virgin birth, sinless life, miracles, atoning death, bodily resurrection, ascension, and personal return.</p> },
    { header: "Salvation", content: <p>We believe salvation is by grace through faith in Christ alone, not by works, and results in a transformed life.</p> },
];

const About = () => {
    return (
        <section id="about" className={`section-padding ${styles.aboutSection}`}>
            <div className="container">
                <SectionHeader 
                    title="About Our Church" 
                    subtitle="Discover who we are and what we believe" 
                />

                <div className={styles.aboutGrid}>
                    <div className={styles.aboutCard}>
                        <div className={styles.aboutIcon}><i className="fas fa-cross"></i></div>
                        <h3>Our Mission</h3>
                        <p>To lead people into a growing relationship with Jesus Christ through authentic worship, intentional discipleship, and compassionate service.</p>
                    </div>

                    <div className={styles.aboutCard}>
                        <div className={styles.aboutIcon}><i className="fas fa-eye"></i></div>
                        <h3>Our Vision</h3>
                        <p>To be a thriving, multi-generational community that transforms lives through the power of the Gospel and impacts our city for Christ.</p>
                    </div>

                    <div className={styles.aboutCard}>
                        <div className={styles.aboutIcon}><i className="fas fa-heart"></i></div>
                        <h3>Our Values</h3>
                        <p>Biblical truth, authentic relationships, spiritual growth, generous living, and serving others with compassion.</p>
                    </div>
                </div>

                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h3>Our Story</h3>
                        <p>Founded in 1985, PCEA NYARI Church began as a small Bible study in a living room... Through God's faithfulness, we've grown into a vibrant congregation serving thousands each week.</p>
                        <p>Our commitment remains the same - to share the life-changing message of Jesus Christ in relevant ways that connect with people where they are.</p>
                        <Button to="#history">Learn More About Our History</Button>
                    </div>
                    <div className={styles.aboutImage}>
                        <img src="/images/old.jpg" alt="Grace Community Church early days" />
                        <div className={styles.imageCaption}>Our original building dedication in 2015</div>
                    </div>
                </div>

                <div className={styles.beliefsSection}>
                    <h3>Our Core Beliefs</h3>
                    <Accordion items={beliefsItems} />
                </div>
            </div>
        </section>
    );
};

export default About;