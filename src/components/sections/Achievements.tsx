import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import iso from "../../assets/client.png";

const achievements = [
    { id: 1, img: iso },
    { id: 2, img: iso },
    { id: 3, img: iso },
    { id: 4, img: iso },
    { id: 5, img: iso },
];

const Achievements = () => {
    return (
        <section className="achievements-section">
            <div className="achievements-header">
                <span className="premium-subtitle">
                    Achievements in dairy
                </span>
                <h2 className="premium-title">
                    Kuber Dairy Group
                </h2>
                <div className="premium-line"></div>

            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                autoplay={{ delay: 2500 }}
                loop
                breakpoints={{
                    1400: { slidesPerView: 5 },
                    1200: { slidesPerView: 5 },
                    992: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                }}
                className="achievements-swiper"
            >
                {achievements.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="achievement-card">
                            <img src={item.img} alt="ISO Certification" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Achievements;