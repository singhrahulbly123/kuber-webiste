import React from "react";
import mainImg from "../../assets/pouring.jpg";
import smallImg from "../../assets/about-one-img-2.jpg";
import "../../styles/aboutPremium.css";

const AboutSection: React.FC = () => {
  return (
    <section className="about-premium-section">
      <div className="about-premium-container">

        {/* LEFT CONTENT */}
        <div className="about-premium-content">
          <span className="about-premium-subtitle">
           Get to Know KUBER DAIRY GROUP
          </span>

          <h2 className="about-premium-title">
           KUBER Dairy is a world-renowned expert in dairy production
        
          </h2>

          <h4 className="about-premium-cert">
             Certified from (HACCP, FSSAI, ISO, HALAL, EU, IFS)
          </h4>

          <p className="about-premium-text">
           KUBER Dairy is a world-renowned expert in dairy production, offering a wide range of high-quality milk products to 
           the global market. Our extensive experience in the dairy industry has allowed us to excel in producing 
           and providing exceptional dairy products. We take pride in the quality of our products, 
           our manufacturing processes, and our business practices.
          </p>

          <p className="about-premium-text">
            The company is operated from Estonia and India , spearheaded by Vidhi Brahmbhatt, a dynamic entrepreneur who 
            is passionate about assisting companies and businesses to be relevant, successful 
            and highly profitable in the ever-evolving market dynamics.
          </p>

          <button className="about-premium-btn">
            Contact Us <span>→</span>
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="about-premium-images">

          <div className="about-premium-main-img">
            <img src={mainImg} alt="Kuber Dairy Production" />
          </div>

          <div className="about-premium-small-img">
            <img src={smallImg} alt="Dairy Expertise" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
