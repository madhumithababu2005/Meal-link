import React, { useState } from "react";
import "./VolunteerSignInPage.css";

const VolunteerSignInPage = () => {
  const [volunteerName, setVolunteerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send data to backend (replace with your actual backend API)
    fetch("http://localhost:5000/volunteer-signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ volunteerName, email, phone, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => console.error("Error:", err));

    // Clear fields after submission
    setVolunteerName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div className="volunteer-signin-container">
      <h2>Volunteer Sign In</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="input-group">
          <label>Volunteer Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={volunteerName}
            onChange={(e) => setVolunteerName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default VolunteerSignInPage;
