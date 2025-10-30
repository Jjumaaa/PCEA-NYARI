import React from 'react';
import styles from './EventCard.module.css'; // Create this file
import Button from '../Common/Button';

const EventCard = ({ day, month, title, time, location, description, featured = false, infoLink, rsvpLink }) => {
    return (
        <div className={`${styles.eventCard} ${featured ? styles.featured : ''}`}>
            <div className={styles.eventDate}>
                <span className={styles.eventDay}>{day}</span>
                <span className={styles.eventMonth}>{month}</span>
            </div>
            <div className={styles.eventDetails}>
                <h3>{title}</h3>
                <p className={styles.eventTime}><i className="fas fa-clock"></i> {time}</p>
                <p className={styles.eventLocation}><i className="fas fa-map-marker-alt"></i> {location}</p>
                <p className={styles.eventDescription}>{description}</p>
                <div className={styles.eventActions}>
                    <Button to={infoLink} size="small">More Info</Button>
                    <Button to={rsvpLink} variant="outline" size="small">RSVP</Button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
// Note: Create EventCard.module.css (Flex layout, clear date column, border/shadow for featured)