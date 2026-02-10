import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import p1 from "../../assets/12.png";
import p2 from "../../assets/13.png";
import p3 from "../../assets/12.png";
import p4 from "../../assets/13.png";
import p5 from "../../assets/12.png";

const products = [
  { id: 1, img: p1 },
  { id: 2, img: p2 },
  { id: 3, img: p3 },
  { id: 4, img: p4 },
  { id: 5, img: p5 },
];

const PremiumSelection = () => {
  return (
    <section className="premium-section">
<div className="premium-header">
  <span className="premium-subtitle">
    Our Premium Selection
  </span>
  <h2 className="premium-title">
    Kuber Dairy Group
  </h2>
  <div className="premium-line"></div>
</div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{ delay: 2500 }}
        loop
        breakpoints={{
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="premium-swiper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-card">
              <img src={item.img} alt="product" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PremiumSelection;
