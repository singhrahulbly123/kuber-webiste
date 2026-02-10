import React from "react";
import AboutHero from "../components/aboutus/AboutHero";
import AboutStory from "../components/aboutus/AboutStory";
import AboutVision from "../components/aboutus/AboutVision";
import TestimonialSlider from "../components/sections/TestimonialSlider";
import FAQSection from "../components/aboutus/FAQSection";
import "../styles/about.css";
import Achievements from "../components/sections/Achievements";



const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <Achievements/>
      <AboutVision />
      <TestimonialSlider/>
      <FAQSection/>

    </>
  );
};

export default About;
