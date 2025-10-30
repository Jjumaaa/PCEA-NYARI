import React, { useState } from 'react';
import SectionHeader from '../components/Layout/SectionHeader';
import SermonCard from '../components/Cards/SermonCard';
import Button from '../components/Common/Button';
import styles from './Sermons.module.css'; // Create this file

// Placeholder data for sermons
const sermonData = [
    { title: "Living By Faith", date: "June 4, 2023", speaker: "Pastor John Smith", series: "Faith That Works series", image: "/images/sermon1.jpg", seriesTag: "faith", speakerTag: "pastor-john" },
    // ... add more sermon objects
];

const Sermons = () => {
    const [filter, setFilter] = useState('all');

    // Filtering logic (simple state change for filter buttons)
    const filteredSermons = sermonData.filter(sermon => {
        if (filter === 'all') return true;
        // In a real app, you'd use a more sophisticated filter based on the tags
        return sermon.seriesTag === filter || sermon.speakerTag === filter; 
    });

    return (
        <section id="sermons" className="section-padding">
            <div className="container">
                <SectionHeader 
                    title="Recent Sermons" 
                    subtitle="Watch or listen to our latest messages" 
                />

                <div className={styles.sermonFilters}>
                    <Button 
                        variant={filter === 'all' ? 'primary' : 'outline'} 
                        onClick={() => setFilter('all')}
                        size="small"
                    >All Sermons</Button>
                    {/* ... other filter buttons that change the 'filter' state */}
                </div>

                <div className={styles.sermonsGrid}>
                    {sermonData.map((sermon, index) => (
                        <SermonCard
                            key={index}
                            title={sermon.title}
                            date={sermon.date}
                            speaker={sermon.speaker}
                            series={sermon.series}
                            image={sermon.image}
                            watchLink="#"
                            listenLink="#"
                            downloadLink="#"
                        />
                    ))}
                </div>

                <div className={styles.sermonArchive}>
                    <h3>Sermon Archive</h3>
                    <p>Browse our collection of past sermons and teaching series</p>
                    <Button to="#archive" variant="outline">View All Sermons</Button>
                </div>
            </div>
        </section>
    );
};

export default Sermons;
// Note: Create Sermons.module.css (Filters bar styling, SermonsGrid layout)