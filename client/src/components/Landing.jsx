import React, { useState } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import bitcoin from '../assets/bitcoin.jpeg';
import ethereum from '../assets/etherium.jpg';
import cardano from '../assets/cardino.jpeg';

const Landing = () => {
  const [faqIndex, setFaqIndex] = useState(null);

  const toggleFAQ = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is cryptocurrency?",
      answer: "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security and operates independently of a central bank."
    },
    {
      question: "Is crypto safe?",
      answer: "While blockchain technology is secure, investing in crypto carries risks. Always research before investing."
    },
    {
      question: "How do I buy crypto?",
      answer: "You can buy cryptocurrency through exchanges like Binance, Coinbase, or Kraken using traditional currencies or other cryptocurrencies."
    }
  ];

  return (
    <div className="landing">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Market Value Tracker</h1>
        <h1>Track the Future of Digital Finance</h1>
        <p>Stay informed with real-time crypto insights and market trends.</p>
        <div className="crypto-cards">
          {[{img: bitcoin, name: "Bitcoin"}, {img: ethereum, name: "Ethereum"}, {img: cardano, name: "Cardano"}].map((coin, index) => (
            <div className="crypto-card" key={index}>
              <img src={coin.img} alt={coin.name} />
              <h3>{coin.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Cryptocurrency Overview */}
      <section className="overview-section">
        <h2>Top Cryptocurrencies Explained</h2>
        <div className="overview-cards">
          <div className="overview-card">
            <h3>Bitcoin (BTC)</h3>
            <p>Bitcoin is a decentralized digital currency that was invented in 2008 by an unknown person or group of
               people using the name Satoshi Nakamoto. It was released as open-source software in 2009 and is considered
                the first cryptocurrency. Bitcoin allows peer-to-peer transactions over the internet without the need for a 
                central authority such as a bank or government. It operates on a public ledger called the blockchain, 
                where all confirmed transactions are recorded and verified by network nodes through cryptography.
                 The total supply of Bitcoin is capped at 21 million, making it a deflationary asset.
                  New bitcoins are introduced into circulation through a process called mining, 
                  which involves solving complex mathematical problems to validate transactions.
                   Bitcoin is stored in digital wallets and can be used for purchases, investment, 
                   or transferring value globally. Its price is highly volatile and influenced by factors like market demand, 
                   investor sentiment, regulations, and technological developments. Over the years, Bitcoin has evolved from
                    a niche digital currency into a widely recognized asset, often referred to as 
              "digital gold" due to its scarcity and potential use as a hedge against inflation..</p>
          </div>
          <div className="overview-card">
            <h3>Ethereum (ETH)</h3>
            <p>Ethereum is a decentralized, open-source blockchain system that features smart
               contract functionality and was proposed in late 2013 by programmer Vitalik Buterin.
                Development began in early 2014, and the network officially launched on July 30, 2015.
                 Unlike Bitcoin, which was designed primarily as a digital currency, Ethereum was created
                  as a platform to enable developers to build and deploy decentralized applications (dApps).
                   At the core of Ethereum is its native cryptocurrency called Ether (ETH), which is used to
                    pay for transaction fees and computational services on the network. One of Ethereum’s 
                    key innovations is the introduction of smart contracts — self-executing contracts with 
                    the terms directly written into code — which allow for complex and automated interactions
                     without intermediaries. The Ethereum network transitioned from a proof-of-work (PoW)
                      to a proof-of-stake (PoS) consensus mechanism in 2022 through an upgrade known as 
                      "The Merge," making it more energy-efficient. Ethereum has played a foundational role 
                      in the growth of decentralized finance (DeFi), non-fungible tokens (NFTs), and many 
                      other blockchain-based ecosystems,
               making it one of the most influential technologies in the blockchain space. (dApps).</p>
          </div>
          <div className="overview-card">
            <h3>Cardano (ADA)</h3>
            <p>Cardano is a decentralized, open-source blockchain platform that was founded in 2017 by Charles Hoskinson,
               one of the co-founders of Ethereum. It was developed by the blockchain research and development company
                IOHK (Input Output Hong Kong) and is known for its strong emphasis on academic research, peer-reviewed development
                , and scientific philosophy. Cardano’s native cryptocurrency is called ADA, named after 19th-century mathematician
                 Ada Lovelace. Unlike many other blockchains, Cardano was built in multiple phases and layers to separate the settlement
                  of transactions from the computation of smart contracts, providing greater flexibility and security. The platform uses a
                   unique proof-of-stake consensus mechanism called Ouroboros, which is designed to be energy-efficient and secure while
                    maintaining decentralization. Cardano aims to provide a scalable and sustainable platform for the development of
                     decentralized applications (dApps), especially in sectors such as education, healthcare, and finance, with a focus 
                     on serving regions with limited access to traditional financial systems. As a third-generation blockchain,
                      Cardano seeks to improve upon the limitations of earlier 
              blockchains like Bitcoin and Ethereum by offering enhanced scalability, interoperability, and sustainability.</p>
          </div>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="market-section">
        <h2>Market Highlights</h2>
        <ul className="market-stats">
        Cryptocurrency Prices Today By Market Cap
The global cryptocurrency market cap today is $3.04 Trillion, a -2.08% change in the last 24 hours.

Total cryptocurrency trading volume in the last day is at $70.87 Billion. Forbes is now tracking 16,977 cryptocurrencies. Bitcoin dominance is at +61.69% and Ethereum dominance is at +7.19%.


Trending tokens today are Rocket Pool ETH (+3.45%) and First Digital USD (+1.76%).
        </ul>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How Cryptocurrency Works</h2>
        <div className="timeline">
          <div className="timeline-step">1️⃣ Blockchain stores all transactions</div>
          <div className="timeline-step">2️⃣ Miners validate and add blocks</div>
          <div className="timeline-step">3️⃣ Users send and receive crypto securely</div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {faqIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2>Latest Crypto News</h2>
        <div className="news-cards">
          <div className="news-card">
            <h4>Bitcoin Breaks $90K</h4>
            <p>BTC reaches an all-time high amid rising institutional adoption.</p>
          </div>
          <div className="news-card">
            <h4>Ethereum Gas Fees Drop</h4>
            <p>Scalability improvements reduce transaction costs for users.</p>
          </div>
          <div className="news-card">
            <h4>Cardano Expands in Africa</h4>
            <p>ADA partners with governments to provide blockchain-based identity solutions.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Dive In?</h2>
        <p>Create your free account now and start your journey in the digital economy!</p>
        <div className="auth-buttons">
          <Link to="/Signup" className="signup-btn">Get Started</Link>
          <Link to="/Login" className="login-btn">Already Have an Account?</Link>
        </div>
      </section>

    </div>
  );
};

export default Landing;
