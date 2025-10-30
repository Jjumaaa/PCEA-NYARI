import React, { useState } from 'react';
import styles from './GiveForm.module.css'; // Create this file
import Button from '../Common/Button';

const GiveForm = () => {
    const [amount, setAmount] = useState(25);
    const [isOther, setIsOther] = useState(false);

    const handleAmountClick = (e, val) => {
        e.preventDefault();
        if (val === 'other') {
            setIsOther(true);
            setAmount('');
        } else {
            setIsOther(false);
            setAmount(val);
        }
    };

    const handleManualChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for initiating payment gateway (e.g., Pushpay)
        alert(`Proceeding to payment for ${amount} (${document.getElementById('frequency').value}) to the ${document.getElementById('fund').value} fund.`);
    };

    return (
        <div className={styles.giveFormContainer}>
            <h3>Give Online</h3>
            <form onSubmit={handleSubmit} id="donation-form">
                <div className={styles.formGroup}>
                    <label htmlFor="amount">Donation Amount</label>
                    <div className={styles.amountOptions}>
                        {[25, 50, 100, 250, 500].map(val => (
                            <button 
                                key={val}
                                type="button" 
                                className={`${styles.amountOption} ${amount === val ? styles.active : ''}`}
                                onClick={(e) => handleAmountClick(e, val)}
                            >
                                ${val}
                            </button>
                        ))}
                        <button 
                            type="button" 
                            className={`${styles.amountOption} ${isOther ? styles.active : ''}`}
                            onClick={(e) => handleAmountClick(e, 'other')}
                        >
                            Other
                        </button>
                    </div>
                    {(amount === '' || isOther) && (
                        <input 
                            type="number" 
                            id="amount" 
                            name="amount" 
                            placeholder="Enter amount" 
                            value={amount}
                            onChange={handleManualChange}
                            required 
                            className={styles.amountInput}
                        />
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="frequency">Frequency</label>
                    <select id="frequency" name="frequency">
                        <option value="one-time">One-Time Gift</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="fund">Fund</label>
                    <select id="fund" name="fund">
                        <option value="general">General Fund</option>
                        <option value="missions">Missions</option>
                        <option value="building">Building Fund</option>
                        <option value="benevolence">Benevolence</option>
                    </select>
                </div>

                <Button type="submit" variant="primary" size="medium" className={styles.fullWidth}>
                    Continue to Payment
                </Button>

                <div className={styles.secureGiving}>
                    <i className="fas fa-lock"></i>
                    <span>Secure Giving Powered by Pushpay</span>
                </div>
            </form>
        </div>
    );
};

export default GiveForm;
// Note: Create GiveForm.module.css (Grid layout for amount options, clear focus styles)