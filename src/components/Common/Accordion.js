import React, { useState } from 'react';
import styles from './Accordion.module.css';

const AccordionItem = ({ header, content }) => {
    // State to manage whether this specific item is open or closed
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordionItem}>
            <button 
                className={styles.accordionHeader} 
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                <span>{header}</span>
                <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
            </button>
            {/* Conditional rendering for content, often handled by max-height in CSS for smooth transition */}
            <div 
                className={styles.accordionContent}
                style={{ maxHeight: isOpen ? '500px' : '0' }} // Adjust max-height for content length
            >
                <div className={styles.contentInner}>
                    {content}
                </div>
            </div>
        </div>
    );
};

// Main component that wraps multiple items
const Accordion = ({ items }) => {
    return (
        <div className={styles.beliefsAccordion}>
            {items.map((item, index) => (
                <AccordionItem 
                    key={index}
                    header={item.header}
                    content={item.content}
                />
            ))}
        </div>
    );
};

export default Accordion;