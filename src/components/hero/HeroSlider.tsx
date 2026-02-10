import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import bgImage from "../../assets/banner1.jpg";
 

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-content">
              <p>Global Supplier Of Dairy Products</p>
              <h1>KUBER DAIRY GROUP</h1>

              <button className="hero-btn">
                Contact Us
                <span>→</span>
              </button>
            </div>

            <div className="hero-image">
              {/* <img src={productImage} alt="products" /> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-content">
              <p>Premium Milk Powder</p>
              <h1>Trusted Worldwide</h1>

              <button className="hero-btn">
                Explore
                <span>→</span>
              </button>
            </div>

            <div className="hero-image">
              {/* <img src={productImage} alt="products" /> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
