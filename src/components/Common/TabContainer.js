import React, { useState } from 'react';
import styles from './TabContainer.module.css';

const TabContainer = ({ tabs }) => {
    // State to track which tab is currently active (using the data-tab string)
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className={styles.ministriesTabs}>
            <div className={styles.tabButtons} role="tablist">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        id={`tab-btn-${tab.id}`}
                        aria-controls={`tab-content-${tab.id}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className={styles.tabContentContainer}>
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={`${styles.tabContent} ${activeTab === tab.id ? styles.active : ''}`}
                        id={`tab-content-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`tab-btn-${tab.id}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabContainer;