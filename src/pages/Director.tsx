import React from "react";
import "../styles/director.css";
import TestimonialSlider from "../components/sections/TestimonialSlider";
import Achievements from "../components/sections/Achievements";


const Director: React.FC = () => {
  return (
       <>
    <div className="director-page">

      {/* HERO */}
      <section className="director-hero">
        <div className="director-hero-content">
          <span className="breadcrumb">Home / Managing Director's Desk</span>
          <h1>DHRUV DASHONDI</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="director-section container">
        <div className="director-grid">

          {/* LEFT CONTENT */}
          <div className="director-card">
            <h3>By Managing Director of Kuber Dairy Group, Dhruv Dashondi,</h3>

            <p>
              Kuber Dairy Group is your trusted Partner for all Business Needs in the Dairy Industry.
              Kuber Dairy Group is a prominent enterprise in the domain engaged in providing supreme-grade dairy products and services hassle-free.
              We additionally have a real mission around sustainability, with all the services we offer focusing on environmental sustainability and social responsibility.
            </p>

            <h4>Exceptional Dairy Products</h4>
            <p>
              We have always been convinced that great products start with the best ingredients.
              That is why we source our dairy from local, small, family-owned farms that practice sustainable farming.
            </p>

            <h4>Quality Standards and Certifications</h4>
            <p>
              Kuber Dairy Group is authorized and committed to maintaining high quality standards.
              Our HACCP, FSSAI, HALAL and EU Business Register certifications ensure compliance.
            </p>

            <h4>Our Commitment to You</h4>
            <p>
              At Kuber Dairy Group, it always has and will be about building solid relationships with our customers.
              Transparency and integrity are at the heart of what we do.
            </p>

            <h4>Our Passionate Team</h4>
            <p>
              Kuber Dairy Group is known not only as a dairy company.
              We are a group of like-minded individuals who understand the abundant benefits food offers in maintaining good health.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="director-form-card">
            <h3>Request For Call Back</h3>

            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Write a Message" rows={4}></textarea>
              <button type="submit">Send a Message</button>
            </form>
          </div>

        </div>
      </section>
    
    </div>
       <Achievements/>
      <TestimonialSlider/>
   
      </>
  );
};

export default Director;
