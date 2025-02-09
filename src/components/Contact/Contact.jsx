import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="section">
            <h2>Contact Me</h2>
            <div className="contact-container">
               
                <div className="contact-details">
                    <div className="contact-item">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
                            alt="Email Icon" 
                            className="contact-icon" 
                        />
                        <span>madhumithababu2005@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/724/724664.png" 
                            alt="Phone Icon" 
                            className="contact-icon" 
                        />
                        <span>+91 90032 95185</span>
                    </div>
                </div>
               
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Enter your Name" required />
                        <input type="email" placeholder="Enter your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
