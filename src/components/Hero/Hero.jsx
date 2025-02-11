import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
     
      <section className="hero">
        
        <h1>Welcome to MealLink</h1>
        <p>Reducing food waste and feeding the hungry by connecting donors and volunteers.</p>
        <div className="hero-buttons">
          <Link to="/donor-register" className="btn primary">Donate Food</Link>
          <Link to="/volunteer-register" className="btn secondary">Join as a Volunteer</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>What is MealLink?</h2>
        <p>
          MealLink is a platform that helps restaurants, stores, and events donate surplus food to food banks and shelters.
          Our mission is to ensure that good food doesn't go to waste but instead reaches people who need it.
        </p>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>📦</span>
            <h3>List Surplus Food</h3>
            <p>Restaurants & stores upload food details on MealLink.</p>
          </div>
          <div className="step">
            <span>🚗</span>
            <h3>Volunteers Pick Up</h3>
            <p>Our volunteers collect & deliver food to nearby shelters.</p>
          </div>
          <div className="step">
            <span>🍽</span>
            <h3>People Get Food</h3>
            <p>Food banks & shelters distribute meals to those in need.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join Us in Making a Difference</h2>
        <p>Be a part of the change. Register as a donor or volunteer today!</p>
        <div className="cta-buttons">
          <Link to="/donor-register" className="btn primary">Become a Donor</Link>
          <Link to="/volunteer-register" className="btn secondary">Join as a Volunteer</Link>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default HomePage;
