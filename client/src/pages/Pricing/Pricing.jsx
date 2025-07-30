import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-hero">
        <h2>Our Pricing Plans</h2>
        <p>Choose the plan that fits your needs.</p>
      </div>

      <div className="pricing-cards">
        <div className="pricing-card basic">
          <h3>Basic</h3>
          <p className="price">$10/month</p>
          <ul>
            <li>Basic Coin Tracking</li>
            <li>Real-time Data</li>
            <li>Weekly Reports</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="pricing-card popular">
          <h3>Pro</h3>
          <p className="price">$25/month</p>
          <ul>
            <li>Advanced Coin Tracking</li>
            <li>Price Alerts</li>
            <li>Customizable Reports</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="pricing-card premium">
          <h3>Premium</h3>
          <p className="price">$50/month</p>
          <ul>
            <li>All Features from Pro</li>
            <li>24/7 Support</li>
            <li>Priority Access</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
