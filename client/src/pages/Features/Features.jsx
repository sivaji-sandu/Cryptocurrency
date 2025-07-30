import React, { useEffect } from 'react';
import './Features.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import realTimeDataImg from '../../assets/realtimedata.png';
import performanceImg from '../../assets/24performance.jpeg';
import multiCurrencyImg from '../../assets/mc-2.jpg';
import chartsImg from '../../assets/images.jpeg';

const Features = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="features">
      {/* Hero Section */}
      <div className="features-hero">
        <h2>Our Key Features</h2>
        <p>Discover why our platform stands out in the crypto world!</p>
      </div>

      {/* Feature Cards */}
      <div className="feature-cards">
        <div className="feature-card" data-aos="fade-up">
        <img src={realTimeDataImg} alt="Real-time Data" />
          <h3>Real-Time Coin Data</h3>
          <p>Stay updated with the latest prices and trends.</p>
          <ul>
            <li>Live price updates</li>
            <li>Price comparison across exchanges</li>
            <li>Customizable price alerts</li>
          </ul>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
        <img src={performanceImg} alt="24H Performance" />
          <h3>24H Performance</h3>
          <p>Monitor the change in coin prices every 24 hours.</p>
          <ul>
            <li>Track price fluctuations</li>
            <li>Understand market trends</li>
            <li>Make informed investment decisions</li>
          </ul>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
        <img src={multiCurrencyImg} alt="Multi-Currency Support" />
          <h3>Multi-Currency Support</h3>
          <p>Choose between USD, EUR, INR, and more.</p>
          <ul>
            <li>Access global market prices</li>
            <li>Currency conversion support</li>
            <li>Track investments in multiple currencies</li>
          </ul>
        </div>
        {/* New Charts Card */}
        <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
        <img src={chartsImg} alt="Charts" />
          <h3>Charts</h3>
          <p>Visualize market trends with interactive charts.</p>
          <ul>
            <li>Interactive price charts</li>
            <li>Compare different coins</li>
            <li>Track price movement over time</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Ready to Explore Crypto?</h2>
        <p>Start tracking your favorite coins.</p>
        <Link to="/Home">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Features;
