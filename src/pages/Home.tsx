import HeroSlider from "../components/hero/HeroSlider"
import Footer from "../components/layout/Footer"
import AboutSection from "../components/sections/AboutSection"
import Achievements from "../components/sections/Achievements"
import BlogSection from "../components/sections/BlogSection"
import ContactSection from "../components/sections/ContactSection"
import PremiumSelection from "../components/sections/PremiumSelection"
import ProductRange from "../components/sections/ProductRange"
import TestimonialSlider from "../components/sections/TestimonialSlider"

const Home = () => {
  return (
    <main>
   {/* PremiumSelection Section */}
      <section className="hero-slider">
        <HeroSlider/>
      </section>

      {/* PremiumSelection Section */}
      <section className="hero">
        <PremiumSelection />
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <AboutSection />
      </section>

      {/* Product Highlight */}
      <section className="product-highlight">
        <ProductRange />
      </section>

      {/* Client Slider */}
      <section className="client-slider">
        <Achievements />
      </section>

      {/* Testimonial Slider */}
      <section className="testimonial-slider">
        <TestimonialSlider />
      </section>

      {/* Contact Slider */}
      <section className="contact-slider">
        <ContactSection />
      </section>

      {/* Blog Section */}
      <section className="contact-slider">
        <BlogSection />
      </section>

      {/* Footer Section */}
      <section className="footer-slider">
        <Footer/>
      </section>

    </main>
  )
}

export default Home
