import React from 'react';
import SectionHeader from '../components/Layout/SectionHeader';
import GiveForm from '../components/Forms/GiveForm';
import Button from '../components/Common/Button';
import styles from './Give.module.css'; // Create this file

const Give = () => {
    return (
        <section id="give" className="section-padding">
            <div className="container">
                <SectionHeader 
                    title="Generosity Changes Lives" 
                    subtitle="Your giving makes ministry possible" 
                />

                <div className={styles.giveGrid}>
                    <div className={styles.giveInfo}>
                        <h3>Why We Give</h3>
                        <p>Generosity is at the heart of our faith. When we give, we participate in God's work of transforming lives locally and globally.</p>

                        <div className={styles.givingOptions}>
                            <h4>Ways to Give</h4>
                            <ul>
                                <li><i className="fas fa-money-bill-wave"></i> <strong>Sunday Offering</strong> - During our worship services</li>
                                <li><i className="fas fa-mobile-alt"></i> <strong>Text to Give</strong> - Text "GIVE" to +2547...</li>
                                <li><i className="fas fa-laptop"></i> <strong>Online Giving</strong> - Secure giving through our website</li>
                                <li><i className="fas fa-envelope"></i> <strong>Mail a Check</strong> - Red Hill Link Rd, Village mkt</li>
                            </ul>
                        </div>

                        <div className={styles.financialTransparency}>
                            <h4>Financial Transparency</h4>
                            <p>We are committed to wise stewardship of God's resources. Our finances are reviewed annually by an independent accounting firm.</p>
                            <Button to="#financials" variant="outline">View Annual Report</Button>
                        </div>
                    </div>

                    <GiveForm />
                </div>
            </div>
        </section>
    );
};

export default Give;
// Note: Create Give.module.css (Grid layout for give info and form, list styling for options)