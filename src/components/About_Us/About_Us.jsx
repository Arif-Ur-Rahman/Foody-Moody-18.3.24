// AboutUs.js

import React from 'react';
import './About_Us.css';
import { AiOutlineMail } from 'react-icons/ai'; // Import Mail icon from react-icons

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">We Provide Good Food</h1>
        </div>
      </section>

      {/* About sections */}
      <section className="about-section">
        <div className="about-item">
          <img src="mission.jpg" alt="Our Mission" className="about-image" />
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>Description of your mission goes here...</p>
          </div>
        </div>
        <div className="about-item reverse">
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>Description of your vision goes here...</p>
          </div>
          <img src="vision.jpg" alt="Our Vision" className="about-image" />
        </div>
        <div className="about-item">
          <img src="quality.jpg" alt="Our Quality" className="about-image" />
          <div className="about-text">
            <h2>Our Quality</h2>
            <p>Description of your quality standards goes here...</p>
          </div>
        </div>
      </section>

      {/* Contact Us section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please fill out the form below:</p>
        {/* Add your contact form here */}
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          {/* Add Google reCAPTCHA here */}
          <button type="submit">Submit</button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
