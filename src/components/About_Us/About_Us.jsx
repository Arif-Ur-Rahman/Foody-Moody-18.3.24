// Import the necessary dependencies
import React from 'react';
import './About_Us.css'; // Import your CSS file for styling
import { AiOutlineMail } from 'react-icons/ai'; // Import Mail icon from react-icons

// Import your images
import missionImage from '../../assets/About/Mission.png';
import visionImage from '../../assets/About/Vision.png';
import serviceImage from '../../assets/About/ourservice.png';
import gifImage from '../../assets/About/Foody Moody.gif';

function AboutUs() {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted');
  };

  return (
    <div className="about-us-container">
      {/* Hero section with gif image */}
      <section className="hero-banner">
        <img src={gifImage} alt="Foody Moody" className="hero-gif" />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Foody Moody</h1>
        </div>
      </section>

      {/* Our Mission section */}
      <section className="mission-section">
        <div className="mission-item">
          <img src={missionImage} alt="Our Mission" className="mission-image" />
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>Description of your mission goes here...</p>
          </div>
        </div>
      </section>

      {/* Our Vision section */}
      <section className="vision-section">
        <div className="vision-item">
          <div className="vision-text">
            <h2>Our Vision</h2>
            <p>Description of your vision goes here...</p>
          </div>
          <img src={visionImage} alt="Our Vision" className="vision-image" />
        </div>
      </section>

      {/* Our Service section */}
      <section className="service-section">
        <div className="service-item">
          <img src={serviceImage} alt="Our Service" className="service-image" />
          <div className="service-text">
            <h2>Our Service</h2>
            <p>Description of your services goes here...</p>
          </div>
        </div>
      </section>

      {/* Contact Us section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please fill out the form below:</p>
        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">What Service you Want?</label>
            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option value="Reservation">Reservation</option>
              <option value="Catering">Catering</option>
              <option value="Delivery">Delivery</option>
            </select>
          </div>
          {/* Google reCAPTCHA */}
          <div className="recaptcha-container">
            {/* Add Google reCAPTCHA here */}
          </div>
          {/* Submit button */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default AboutUs;
