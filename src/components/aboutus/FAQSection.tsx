import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What products does Kuber Dairy offer?",
    answer:
      "Kuber Dairy range of dairy products includes liquid milk, cheese, yogurt, butter, baby foods, milk powder, and UHT milk. All products conform to the best quality standards on the market.",
  },
  {
    question: "Where does Kuber Dairy source its milk from?",
    answer:
      "All our milk is procured from local organic farmers who use environmentally friendly methods. Our cows are grass-fed and free to roam to ensure nutrient-rich milk.",
  },
  {
    question: "Are Kuber Dairy products free from additives?",
    answer:
      "Yes. We prioritize purity and quality, ensuring our dairy products maintain strict safety and quality standards.",
  },
  {
    question: "Does Kuber Dairy export its products internationally?",
    answer:
      "Yes. Kuber Dairy operates internationally and supplies dairy solutions across multiple global markets.",
  },
  {
    question: "What certifications does Kuber Dairy hold?",
    answer:
      "We comply with international food safety and quality standards, ensuring our products meet global regulatory requirements.",
  },
  {
    question: "How can I place an order with Kuber Dairy?",
    answer:
      "You can contact our sales team directly through our website contact page for bulk or partnership inquiries.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container faq-wrapper">
        <div className="faq-header">
          <span className="section-tag">FAQ's</span>
          <h2>Kuber Dairy Group</h2>
        </div>

        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-card ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                <span className="icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
