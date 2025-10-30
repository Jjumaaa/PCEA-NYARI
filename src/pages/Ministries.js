import React from 'react';
import SectionHeader from '../components/Layout/SectionHeader';
import TabContainer from '../components/Common/TabContainer';
import Button from '../components/Common/Button';
import styles from './Ministries.module.css'; // Create this file

// Reusable component for displaying a leader
const LeaderCard = ({ image, name, title }) => (
    <div className={styles.leaderCard}>
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <p>{title}</p>
    </div>
);

// Content for each tab (passed to TabContainer)
const tabContents = [
    {
        id: 'children', label: 'Children', content: (
            <div className={styles.ministryDetail}>
                <div className={styles.ministryInfo}>
                    <h3>TotoNdogo - Teens</h3>
                    <p className={styles.ministryMotto}>"Training up children in the way they should go"</p>
                    <p>Our children's ministry provides a safe, fun environment where kids can learn about Jesus at their level. We use creative Bible teaching, worship, and activities to help children grow in their faith.</p>
                    {/* ... other programs */}
                    <div className={styles.ministryLeaders}>
                        <h4>Ministry Leaders</h4>
                        <div className={styles.leadersGrid}>
                            <LeaderCard image="" name="Sarah Johnson" title="Children's Ministry Director" />
                            <LeaderCard image="/images/leader2.jpg" name="Michael Chen" title="Elementary Coordinator" />
                        </div>
                    </div>
                </div>
                <div className={styles.ministryImage}>
                    <img src="/images/children-ministry.jpg" alt="GraceKids children's ministry" />
                    <Button to="#children-ministry" className={styles.buttonFloat}>Learn More About GraceKids</Button>
                </div>
            </div>
        )
    },
    {
        id: 'youth', label: 'Youth', content: (
            // Youth content structure here
            <div className={styles.ministryDetail}>... Youth Content ...</div>
        )
    },
    {
        id: 'adults', label: 'Adults', content: (
            // Adults content structure here
            <div className={styles.ministryDetail}>... Adults Content ...</div>
        )
    },
    {
        id: 'seniors', label: 'Womens Guild', content: (
            // Seniors/Womens Guild content structure here
            <div className={styles.ministryDetail}>... Womens Guild Content ...</div>
        )
    },
    {
        id: 'outreach', label: 'PCMF', content: (
            // PCMF/Outreach content structure here
            <div className={styles.ministryDetail}>... PCMF Content ...</div>
        )
    },
];

const Ministries = () => {
    return (
        <section id="ministries" className="section-padding">
            <div className="container">
                <SectionHeader 
                    title="Our Ministries" 
                    subtitle="Find your place to connect, grow, and serve" 
                />
                <TabContainer tabs={tabContents} />
            </div>
        </section>
    );
};

export default Ministries;
// Note: Create Ministries.module.css (Styling for ministry-detail, ministry-info, and leaders-grid)