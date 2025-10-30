import React from 'react';
import SectionHeader from '../components/Layout/SectionHeader';
import EventCard from '../components/Cards/EventCard';
import Button from '../components/Common/Button';
import styles from './Events.module.css'; // Create this file

// Placeholder event data
const eventsData = [
    { day: "12", month: "Jun", title: "Summer Picnic & Baptism", time: "4:00 PM - 8:00 PM", location: "City Park Pavilion", description: "Join us for our annual church picnic with food, games, and a special baptism service in the lake.", featured: true },
    // ... add more events
];

const Events = () => {
    // Note: Calendar functionality requires complex state management and logic (or a third-party library).
    // This component provides the structure and styling for the event list.

    return (
        <section id="events" className="section-padding">
            <div className="container">
                <SectionHeader 
                    title="Upcoming Events" 
                    subtitle="Join us for these special gatherings" 
                />

                <div className={styles.eventsCalendar}>
                    {/* Calendar structure from HTML */}
                    <div className={styles.calendarHeader}>
                        <Button size="small" variant="secondary"><i className="fas fa-chevron-left"></i></Button>
                        <h3 id="current-month">June 2023</h3>
                        <Button size="small" variant="secondary"><i className="fas fa-chevron-right"></i></Button>
                    </div>
                    {/* Calendar Grid (JS would populate this in a real app) */}
                    <div className={styles.calendarGrid} id="calendar-days">
                        {/* Placeholder days */}
                    </div>
                </div>

                <div className={styles.eventsList}>
                    {eventsData.map((event, index) => (
                        <EventCard 
                            key={index}
                            {...event}
                            infoLink="#"
                            rsvpLink="#"
                        />
                    ))}
                </div>

                <div className={styles.eventsCta}>
                    <p>Want to stay updated on all our events?</p>
                    <Button to="#newsletter">Subscribe to Our Newsletter</Button>
                </div>
            </div>
        </section>
    );
};

export default Events;
// Note: Create Events.module.css (Calendar layout, list styling)