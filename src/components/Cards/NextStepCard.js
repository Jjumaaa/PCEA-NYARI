import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NextStepCard.module.css'; // Create this file

const NextStepCard = ({ iconClass, title, description, linkTo }) => {
    return (
        <Link to={linkTo} className={styles.nextStepCard}>
            <i className={`fas ${iconClass} ${styles.icon}`}></i>
            <h4>{title}</h4>
            <p>{description}</p>
        </Link>
    );
};

export default NextStepCard;
// Note: Create NextStepCard.module.css (Flex/Grid item, strong hover effect, icon emphasis)