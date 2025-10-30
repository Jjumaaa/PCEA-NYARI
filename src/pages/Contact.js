import React from 'react';
import SectionHeader from '../components/Layout/SectionHeader';
import ContactForm from '../components/Forms/ContactForm';
import styles from './Contact.module.css'; // Create this file

const Contact = () => {
    return (
        <>
            <section id="contact" className="section-padding">
                <div className="container">
                    <SectionHeader 
                        title="Contact Us" 
                        subtitle="We'd love to hear from you" 
                    />

                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h3>Get In Touch</h3>

                            <div className={styles.contactMethod}>
                                <i className="fas fa-phone"></i>
                                <div>
                                    <h4>Phone</h4>
                                    <p>07...</p>
                                </div>
                            </div>
                            
                            {/* ... other contact methods */}
                            
                            <div className={styles.officeHours}>
                                <h4>Office Hours</h4>
                                <ul>
                                    <li><strong>Monday-Thursday:</strong> 9:00 AM - 5:00 PM</li>
                                    {/* ... other hours */}
                                </ul>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>
            
            {/* Newsletter Section from the bottom of your HTML */}
            <section className={styles.newsletterSection}>
                <div className="container">
                    <div className={styles.newsletterContent}>
                        <div className={styles.newsletterText}>
                            <h3>Stay Connected</h3>
                            <p>Subscribe to our weekly newsletter for updates, events, and encouragement.</p>
                        </div>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Your email address" required />
                            <Button type="submit" variant="secondary">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
// Note: Create Contact.module.css (Grid layout for contact info/form, newsletter bar styling)