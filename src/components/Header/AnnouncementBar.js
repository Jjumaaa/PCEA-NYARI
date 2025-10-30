import React, { useState } from 'react';
import styles from './AnnouncementBar.module.css';

const AnnouncementBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className={styles.announcementBar}>
            <div className={`container ${styles.container}`}>
                <p><i className="fas fa-bullhorn"></i> Join us for Easter Sunday Service - April 9th at 9:00 AM</p>
                <button 
                    className={styles.closeAnnouncement} 
                    onClick={() => setIsVisible(false)}
                    aria-label="Close Announcement"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBar;