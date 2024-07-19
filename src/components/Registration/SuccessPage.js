// src/components/Registration/SuccessPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage = () => {
  return (
    <div className="success-page">
      <h2>Registration Successful!</h2>
      <p>
        You will be required to own a usable computer device, installed dev dependencies (if unsure, guidance for installation will be provided personally to you), and a fee of $83 or FCFA 50,000. Please visit the WhatsApp number for further details if needed.
      </p>
      <a href="https://wa.me/67769" className="whatsapp-button">Contact on WhatsApp</a>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default SuccessPage;
