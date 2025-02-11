import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import VolunteerLogin from "./components/VolunteerLogin/VolunteerLogin";
import RestaurentLogin from "./components/RestaurentLogin/RestaurentLogin";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignInPage from "./components/SignInPage/SignInPage";
import VolunteerSignInPage from "./components/VolunteerSignInPage/VolunteerSignInPage";

function App() {
  return (
    <Router>
      {/* Navigation */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/volunteerlogin" element={<VolunteerLogin />} />
        <Route path="/restaurentlogin" element={<RestaurentLogin />} />
      </Routes>
      <Routes>
        <Route path="/" element={<RestaurentLogin />} />
        <Route path="/signin" element={<SignInPage />} />
        {/* Add other routes as needed */}
      </Routes>
      <Routes>
        <Route path="/volunteer-signin" element={<VolunteerSignInPage />} />
      </Routes>
      {/* Footer displayed on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
