import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const initialFAQs = [
    {
      question: "What is Market Value Tracker?",
      answer: "Market Value Tracker is a crypto price tracking platform providing real-time data, historical charts, and insights for various cryptocurrencies."
    },
    {
      question: "Is the data shown in real-time?",
      answer: "Yes, we update prices in real-time using trusted APIs so you always see the latest values."
    },
    {
      question: "Which currencies are supported?",
      answer: "We currently support USD, EUR, and INR with plans to add more in future updates."
    },
    {
      question: "Do I need to create an account to use the platform?",
      answer: "No account is required to view data, but creating one unlocks personalized features like alerts and watchlists."
    },
    {
      question: "Does this platform provide investment advice?",
      answer: "No. Market Value Tracker is for informational purposes only. We do not provide financial or investment advice."
    }
  ];

  const [faqs, setFaqs] = useState(initialFAQs);
  const [activeIndex, setActiveIndex] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion && newAnswer) {
      const newFAQ = { question: newQuestion, answer: newAnswer };
      setFaqs([...faqs, newFAQ]);
      setNewQuestion('');
      setNewAnswer('');
    } else {
      alert("Both question and answer are required.");
    }
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <h3>{faq.question}</h3>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Form to Contribute New Question */}
      <div className="faq-form-container">
        <div className="faq-form">
          <h3>Contribute</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Answer"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              required
            />
            <button type="submit">Submit Question</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
