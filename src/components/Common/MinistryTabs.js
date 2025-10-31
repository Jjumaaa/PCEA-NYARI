import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MinistryTabs.module.css';

const MinistryTabs = () => {
    // State to track the currently active tab
    const [activeTab, setActiveTab] = useState('Children');

    // Sample data for the tabs
    const tabs = [
        { name: 'Children', content: 'Fun and engaging programs designed for kids to learn about God.' },
        { name: 'Youth', content: 'A dynamic group focusing on spiritual growth and building community for teens.' },
        { name: 'Adults', content: 'Weekly small groups and Bible studies to deepen faith and fellowship.' },
        { name: 'Seniors', content: 'Fellowship opportunities and support for our cherished older members.' },
    ];

    // Find the content for the active tab
    const currentContent = tabs.find(tab => tab.name === activeTab)?.content;

    return (
        <div className={styles.ministryTabsContainer}>
            <div className={styles.tabNav}>
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        // Apply the active style if the tab name matches the state
                        className={`${styles.tabButton} ${activeTab === tab.name ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab.name)}
                        aria-selected={activeTab === tab.name}
                        role="tab"
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            
            {/* The content panel that changes based on the active tab */}
            <div className={styles.tabContent} role="tabpanel">
                <p>{currentContent}</p>
                {/* Add a button linking to the full ministries page */}
                <Link to="/ministries" className={styles.contentLink}>
                    Learn More About {activeTab} Ministry <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default MinistryTabs;