// In your existing code (RestaurentLogin.jsx)
import React, { useState } from "react";
import "./RestaurentLogin.css";

const RestaurentLogin = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [foodQualityCertificate, setFoodQualityCertificate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Restaurant Name: ${restaurantName}
      Address: ${address}
      Owner Name: ${ownerName}
      Email: ${email}
      Phone: ${phone}
      Password: ${password}
    `);
    setRestaurantName("");
    setAddress("");
    setOwnerName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setFoodQualityCertificate(null);
  };

  return (
    <div className="restaurent-login">
      <div className="running-text-container">
        <p className="running-text">
          Welcome to Meal Link - Donate Excess Food to Local Shelters - Together We Make a Difference!
        </p>
      </div>

      <div className="food-rescue-container">
        <div className="food-card">
          <img
            src="" // Replace with your image URL
            alt="Food Rescue"
            className="food-image"
          />
          <p>
            Your participation in this network will help us fight hunger and ensure that food doesn’t go to waste.
          </p>
          
        </div>

        <div className="food-card">
          <img
            src="" // Replace with your image URL
            alt="Child Hunger"
            className="food-image"
          />
          <p>
            Sign up your restaurant with Meal Link to help reduce food waste by donating surplus food to local shelters.
          </p>
          
        </div>
      </div>

      {/* Sign In Button */}
      <div className="login-container">
        <button onClick={() => window.open("/signin", "_blank")}>
          Sign In
        </button>
      </div>

      
      
    </div>
  );
};

export default RestaurentLogin;
