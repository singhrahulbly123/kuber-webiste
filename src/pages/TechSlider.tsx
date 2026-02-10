import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";


import "../styles/tech-slider.css";

import tech1 from "../assets/tech1.jpg";
import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.jpg";
import tech4 from "../assets/tech4.jpg";
import tech5 from "../assets/tech5.jpg";
import tech6 from "../assets/tech6.jpg";
import ProcessSection from "../components/aboutus/ProcessSection";

const images: string[] = [
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
];

const TechSlider: React.FC = () => {
  return (

    <>
      {/* HERO */}
      <section className="director-hero">
        <div className="director-hero-content">
          <span className="breadcrumb">Home / Technology</span>
          <h1>Technology</h1>
        </div>
      </section>

      <section className="tech-slider-section">
        <div className="container">
          <div className="tech-header">
            <span className="section-tag">Gadgetry & Hardware</span>
            <h2>Gadgetry & Hardware</h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={25}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="tech-card">
                  <img src={img} alt={`Technology ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      <ProcessSection/>
    </>

  );
};

export default TechSlider;
