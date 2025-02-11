// SignInPage.jsx
import React, { useState } from "react";
import "./SignInPage.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [foodQualityCertificate, setFoodQualityCertificate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in-page">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
              type="text"
              name="restaurantName"
              placeholder="Restaurant Name"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              required
            />
         

         
            <input
              type="text"
              name="address"
              placeholder="Restaurant Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
         

         
            <input
              type="text"
              name="ownerName"
              placeholder="Owner's Name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              required
            />
         
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
         
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
         
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        
            <input
              type="file"
              name="foodQualityCertificate"
              onChange={(e) => setFoodQualityCertificate(e.target.files[0])}
              required
            />
          
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
