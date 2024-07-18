// src/components/Registration/RegistrationForm.js

import React from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  return (
    <div className="registration-form">
      <h2>DevConvergence</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          City:
          <input type="text" name="city" required />
        </label>
        <label>
          Country:
          <input type="text" name="country" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
