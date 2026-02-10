import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import avatar1 from "../../assets/about-one-ceo-img.jpg";
import avatar2 from "../../assets/about-one-ceo-img.jpg";
import avatar3 from "../../assets/about-one-ceo-img.jpg";

const testimonials = [
    {
        id: 1,
        name: "Bharat A",
        text: "Ghee made in India has very nice fragrance and beautiful aroma while making and eating the food. We appreciate the kind cooperation.",
        avatar: avatar1,
    },
    {
        id: 2,
        name: "Rachel W",
        text: "Kuber’s fat filled milk powder bags from Poland is top notch, we have imported the same and very happy with results.",
        avatar: avatar2,
    },
    {
        id: 3,
        name: "David H",
        text: "I'm a big fan of this company's UHT, sweetened condensed milk and evaporated milk. I love trying new varieties.",
        avatar: avatar3,
    },
    {
        id: 4,
        name: "David H",
        text: "I'm a big fan of this company's UHT, sweetened condensed milk and evaporated milk. I love trying new varieties.",
        avatar: avatar3,
    },
    {
        id: 5,
        name: "David H",
        text: "I'm a big fan of this company's UHT, sweetened condensed milk and evaporated milk. I love trying new varieties.",
        avatar: avatar3,
    },
];

const TestimonialSlider = () => {
    return (
        <section className="testimonial-section">
            <div className="premium-header">
                <span className="premium-subtitle">
                    Welcome to Testimonials
                </span>
                <h2 className="premium-title">
                    What They’re talking about
                </h2>
                <div className="premium-line"></div>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                autoplay={{ delay: 4000 }}
                loop
                breakpoints={{
                    1200: { slidesPerView: 3 },
                    992: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                }}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="testimonial-card">
                            <div className="testimonial-avatar">
                                <img src={item.avatar} alt={item.name} />
                                <div className="quote-bubble">❝</div>
                            </div>

                            <p className="testimonial-text">
                                {item.text}
                            </p>

                            <div className="testimonial-name">
                                {item.name}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TestimonialSlider;