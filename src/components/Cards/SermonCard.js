import React from 'react';
import styles from './SermonCard.module.css'; // Create this file

const SermonCard = ({ title, date, speaker, series, image, watchLink, listenLink, downloadLink }) => {
    return (
        <div className={styles.sermonCard}>
            <div className={styles.sermonImage}>
                <img src={image} alt={title} />
                <button className={styles.playBtn} aria-label={`Play ${title}`}><i className="fas fa-play"></i></button>
            </div>
            <div className={styles.sermonInfo}>
                <span className={styles.sermonDate}>{date}</span>
                <h3>{title}</h3>
                <p className={styles.sermonSeries}>{series}</p>
                <p className={styles.sermonSpeaker}>{speaker}</p>
                <div className={styles.sermonActions}>
                    <a href={watchLink} className={styles.sermonLink}><i className="fas fa-play"></i> Watch</a>
                    <a href={listenLink} className={styles.sermonLink}><i className="fas fa-headphones"></i> Listen</a>
                    <a href={downloadLink} className={styles.sermonLink}><i className="fas fa-download"></i> Download</a>
                </div>
            </div>
        </div>
    );
};

export default SermonCard;
// Note: Create SermonCard.module.css (Grid layout, box-shadow, hover effects)