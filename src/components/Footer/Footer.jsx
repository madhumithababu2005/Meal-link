import React from "react";
import "./Footer.css"; // Importing CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About Meal Link</li>
            <li>Volunteer Sign Up</li>
            <li>Restaurant Registration</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>Our Mission</li>
            <li>How It Works</li>
            <li>Partnership Opportunities</li>
            <li>Our Team</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Food Waste Awareness</li>
            <li>Donation Guidelines</li>
            <li>Customer Testimonials</li>
            <li>Media Kit</li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Meal Link. All rights reserved.</p>
        <p>Making a difference, one meal at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;

