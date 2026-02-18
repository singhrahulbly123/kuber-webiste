import React from 'react';
import '../styles/achievements.css'; // Make sure to import the CSS file here
import hero from "../assets/banner1.jpg";


interface AchievementData {
  id: string;
  title: string;
  description: string;
  // In a real app, use real image paths
  // imgSrc: string; 
  placeholderText: string; 
}

const achievements: AchievementData[] = [
  {
    id: 'haccp',
    title: 'HACCP',
    placeholderText: 'HACCP LOGO',
    description: "In accordance with HACCP, in cooperation with veterinarians to ensure constant improvement of raw material processing and satisfy the expectations of our Customers. HACCP is a management system in which food safety is addressed through the analysis and control of biological, chemical, and physical hazards."
  },
  {
    id: 'fssai',
    title: 'FSSAI INDIA',
    placeholderText: 'FSSAI LOGO',
    description: "Another system we operate in accordance with is FSSAI and we are committed to meet export market requirements as well. Food Safety and Standards Authority of India is a statutory body established under the Ministry of Health & Family Welfare, Government of India."
  },
  {
    id: 'iso',
    title: 'ISO',
    placeholderText: 'ISO CERTIFICATION',
    description: "We are concerned about the environment. Therefore, we hold Environmental Management System certificates in accordance with the standard ISO. ISO certification is a seal of approval from a third-party body that a company runs to one of the international standards."
  },
  {
    id: 'halal',
    title: 'HALAL',
    placeholderText: 'HALAL STAMP',
    description: "We have also obtained a HALAL certificate approving us to sell our products in Islamic markets and to clients with corresponding quality requirements. Halal certification is a guarantee that the food is prepared in accordance with Islamic law."
  },
  {
    id: 'eu',
    title: 'EU BUSINESS REGISTER',
    placeholderText: 'EU REGISTER',
    description: "KUBRE GROUP is also registered in EU business register as verified provider of Milk powder."
  },
  {
    id: 'ifs',
    title: 'IFS',
    placeholderText: 'IFS FOOD',
    description: "For Pet Food powder manufacturing in Poland, we have IFS certification as well."
  }
];

const AchievementsPage: React.FC = () => {
  return (
    <div className="achievements-container">
      
     <div
        className="contact-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="contact-hero-overlay">
          <p>Home / Our Achievements</p>
          <h1>Achievements</h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="content-wrapper">
        
        {/* Left Column */}
        <div className="achievements-list">
          {achievements.map((item) => (
            <div key={item.id} className="achievement-item">
              <h2 className="item-title">{item.title}</h2>
              
              <div className="image-container">
                 {/* Replace the div below with an image tag when you have files:
                    <img src={item.imgSrc} alt={item.title} className="achievement-img" /> 
                 */}
                 <div className="img-placeholder" style={{ color: '#555' }}>
                    {item.placeholderText}
                 </div>
              </div>

              <p className="item-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="sidebar">
          
          {/* Categories Widget */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Categories</h3>
            <ul className="categories-list">
              <li>Dairy Products</li>
              <li>Certifications</li>
              <li>Quality Standards</li>
              <li>Export Markets</li>
            </ul>
          </div>

          {/* Request Call Back Form */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Request For Call Back</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" className="form-input" />
              </div>
              <div className="form-group">
                <textarea rows={4} placeholder="Write a Message" className="form-textarea"></textarea>
              </div>
              
              <button type="submit" className="btn-submit">
                Send a Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;