import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Form.css';

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    subscriptionPlan: 'Basic',
    subscriptionPrice: '$9.90', // Default price for Basic
  });

  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'subscriptionPlan') {
      setFormData({
        ...formData,
        [name]: value,
        subscriptionPrice: getSubscriptionPrice(value),
      });
    }
  };

  const getSubscriptionPrice = (plan) => {
    switch (plan) {
      case 'Basic':
        return '$9.90';
      case 'Standard':
        return '$29.90';
      case 'Premium':
        return '$59.90';
      default:
        return '$9.90';
    }
  };

  const handleRecaptchaChange = (value) => {
    if (value) {
      setRecaptchaVerified(true);
    } else {
      setRecaptchaVerified(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaVerified) {
      alert('Please verify the reCAPTCHA.');
      return;
    }
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Subscribe Now</h2>
      <form className="subscription-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required></textarea>

        <label htmlFor="subscriptionPlan">Subscription Plan:</label>
        <select id="subscriptionPlan" name="subscriptionPlan" value={formData.subscriptionPlan} onChange={handleInputChange} required>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>

        <label htmlFor="subscriptionPrice">Subscription Price:</label>
        <input type="text" id="subscriptionPrice" name="subscriptionPrice" value={formData.subscriptionPrice} readOnly />

        <ReCAPTCHA
          sitekey="6LeZAKApAAAAADIDKMBS_b0nhKqsNWLQB04fgP9a"
          onChange={handleRecaptchaChange}
        />

        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
