import HeroSlider from "../components/hero/HeroSlider"
import Aboutimg from "../assets/about-one-shape-1.png"
import AboutSection from "../components/sections/AboutSection"
import Achievements from "../components/sections/Achievements"
import BlogSection from "../components/sections/BlogSection"
import ContactSection from "../components/sections/ContactSection"
import PremiumSelection from "../components/sections/PremiumSelection"
import ProductRange from "../components/sections/ProductRange"
import TestimonialSlider from "../components/sections/TestimonialSlider"
import AboutEliteSection from "../components/sections/AboutEliteSection"

const Home = () => {
  return (
    <main>
   {/* PremiumSelection Section */}
      <section className="hero-slider">
        <HeroSlider/>
      </section>

      {/* PremiumSelection Section */}
      <section className="hero-container">
        <PremiumSelection />
      </section>



      {/* About Preview */}
      <section className="about-preview">
        <AboutSection />
        <img src={Aboutimg} alt="Shape 1" className="float-bob-x"></img>
      </section>

      {/* Product Highlight */}
      <section className="product-highlightls">
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
        <BlogSection />
 



    </main>
  )
}

export default Home
