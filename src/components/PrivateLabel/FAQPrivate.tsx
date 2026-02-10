import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the private labeling service offered by Kuber Dairy Group?",
    answer:
      "Our private labeling service allows customers to market dairy products under their own brand name. We offer personalized packaging, including customized logos, labels, and designs, ensuring that your brand stands out in the market. This service enables businesses to build a unique identity while maintaining the high quality of Kuber Dairy Group's products.",
  },
  {
    question: "How does Kuber Dairy Group ensure product quality during the repacking and private labeling process?",
    answer:
      "Kuber Dairy Group follows strict quality control measures at every stage of the repacking and private labeling process. Our advanced facilities adhere to international quality standards, ensuring that all products retain their freshness, purity, and nutritional value. We guarantee the highest quality regardless of the customization involved.",
  },
  {
    question: "Can Kuber Dairy Group accommodate specific packaging requirements?",
    answer:
      "Yes, we provide repacking services that cater to a wide range of packaging needs, whether it’s for different package sizes, bulk quantities, or specialized materials. We work closely with our clients to meet their exact specifications, ensuring flexibility and satisfaction for diverse business demands.",
  },
  {
    question: "Does Kuber Dairy Group assist with shipping and distribution after repacking?",
    answer:
      "Yes, we offer comprehensive support, including assistance with logistics and global shipping. We ensure that your customized products are packaged securely and distributed efficiently, allowing you to focus on growing your brand while we handle the complexities of packaging and delivery.",
  },
  
];

const FAQPrivate: React.FC = () => {
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

export default FAQPrivate;
