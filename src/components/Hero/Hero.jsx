import React from 'react';
import logo from '../../assets/images/madhu1.jpeg'; 
import './Hero.css';

export default function Hero() {
  return (
    <section id='hero' className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, <br />
            <span>I'm Madhumitha B</span>
          </h1>
          <p>Welcome to my portfolio.</p>
        </div>
        <div className="hero-logo">
          <img src={logo} alt="madhu logo" />
        </div>
        
        <div className="social-icons">
          <a href="https://github.com/madhumithababu2005" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
              alt="GitHub" 
              className="social-icon" 
            />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png" 
              alt="LinkedIn" 
              className="social-icon" 
            />
          </a>
          <a href="https://www.instagram.com/__madhu__.07/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
              alt="Instagram" 
              className="social-icon" 
            />
          </a>
        </div>
      </div>
    </section>
  );
}
