import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Meal Link</h1>
        <p>Reducing food waste and alleviating hunger by connecting donors and volunteers.</p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Meal Link is dedicated to reducing food waste and fighting hunger by connecting restaurants, stores, and events with food banks and shelters.
          We ensure that surplus food reaches those in need instead of going to waste.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>📦</span>
            <h3>Donors List Surplus Food</h3>
            <p>Restaurants & stores upload food details on Meal Link.</p>
          </div>
          <div className="step">
            <span>🚗</span>
            <h3>Volunteers Pick Up & Deliver</h3>
            <p>Our volunteers collect & deliver food to nearby shelters.</p>
          </div>
          <div className="step">
            <span>🍽</span>
            <h3>People Get Food, Waste is Reduced</h3>
            <p>Food banks & shelters distribute meals to those in need.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>🍲 10,000+ Meals Delivered</h3>
          </div>
          <div className="stat">
            <h3>🌍 30% Less Food Waste</h3>
          </div>
          <div className="stat">
            <h3>🏠 50+ Food Banks Supported</h3>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join Us in Making a Difference</h2>
        <p>Be a part of the change. Register as a donor or volunteer today!</p>
        <div className="cta-buttons">
          <a href="/donor-register" className="btn primary">Become a Donor</a>
          <a href="/volunteer-register" className="btn secondary">Join as a Volunteer</a>
        </div>
      </section>
    </div>
  );
};

export default About;