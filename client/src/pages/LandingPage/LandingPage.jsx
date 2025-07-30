import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Market Value Tracker</h1>
      <p>Get real-time data and insights on cryptocurrencies. Please log in to explore more!</p>
      <Link to="/auth">
        <button>Login / Sign Up</button>
      </Link>
    </div>
  );
};

export default LandingPage;
