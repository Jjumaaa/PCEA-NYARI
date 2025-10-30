import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Create this file
import Button from '../Common/Button';

const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would handle form submission (e.g., using fetch or Axios)
        // For now, we'll use a placeholder success message
        setStatus('success'); 
        setTimeout(() => setStatus(''), 5000);
        e.target.reset(); // Clear form fields
    };

    return (
        <div className={styles.contactFormContainer}>
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} id="contactForm">
                <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject">
                        <option value="general">General Inquiry</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="visitor">I'm New Here</option>
                        {/* ... other options */}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                {status === 'success' && (
                    <p className={styles.successMessage}>Thank you! Your message has been sent.</p>
                )}

                <Button type="submit" variant="primary" size="medium" className={styles.fullWidth}>
                    Send Message
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
// Note: Create ContactForm.module.css (Clean form layout, focus styles, full width button)