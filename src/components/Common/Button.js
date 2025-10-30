import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, to, onClick, variant = 'primary', size = 'medium', className, type = 'button' }) => {
    const buttonClasses = `${styles.btn} ${styles[variant]} ${styles[size]} ${className || ''}`;

    if (to) {
        // Use <a> or <Link> for navigation (depending on whether it's internal React Router or external)
        // Since we are using React, we should prefer Link or a standard <a> for external
        return (
            <a href={to} className={buttonClasses} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;