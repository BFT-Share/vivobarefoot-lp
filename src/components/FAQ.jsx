import React, { useState } from 'react';
import '../App.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I safely transition to barefoot shoes?",
      answer: "Transitioning is a journey. If you have worn cushioned, narrow shoes for years, your feet need time to rebuild strength. Start by wearing Vivos for 30-60 minutes daily for casual walking. Gradually increase this over 4 to 8 weeks. Do not jump straight into long runs or heavy workouts until your calves and arches adapt."
    },
    {
      question: "Why do Vivos feel much wider than my normal shoes?",
      answer: "That is by design! The wide toe box gives your toes the space they need to spread out and balance you. Over time, your toes will naturally splay, widening your footprint. We recommend leaving about a thumb's width (12mm to 15mm) of space at the front of the toes for natural forward motion."
    },
    {
      question: "Are barefoot shoes good for running and gym workouts?",
      answer: "Absolutely. Our Active collection (like the Primus Lite and Motus Strength) is designed exactly for functional fitness, road running, and training. Barefoot shoes improve ground feedback, strengthen ankles, and reduce injury risk by training your natural posture."
    },
    {
      question: "Where can I try on VIVOBarefoot in Bangkok?",
      answer: "You can try our entire range at the Barefootinc Flagship Store in K Village (Sukhumvit 26), Bangkok. Our specialists can help measure your feet, determine your correct barefoot size, and guide you on the transition process."
    },
    {
      question: "What does it mean that VIVOBarefoot is a B Corp?",
      answer: "B Corp certification means we meet high verified standards of social and environmental performance, transparency, and accountability. We prioritize planetary health by using natural materials, recycled plastics, and algae-bloom foam in our products."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="animate-fade-in">
        <h2 className="section-title">Common Questions</h2>
        <p className="section-subtitle">
          Transitioning to natural movement can raise questions. Here are the answers to help you start your barefoot journey.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question-btn" 
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>
              <span className="faq-icon-toggle">+</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
