import "../styles/PrivateLabel.css";
import heroImage from "../assets/banner1.jpg";
import dryImage from "../assets/private-dry.png";
import liquidImage from "../assets/private-liquid.png";
import TestimonialSlider from "../components/sections/TestimonialSlider";
import FAQPrivate from "../components/PrivateLabel/FAQPrivate";

const PrivateLabel = () => {
    return (
        <>

            {/* HERO */}
            <section className="director-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="director-hero-content ">
                    <span className="breadcrumb">Home / Private Label</span>
                    <h1>Private Label</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="pl-section">
                <div className="pl-container">

                    {/* LEFT IMAGES */}
                    <div className="pl-images">
                        <div className="pl-card">
                            <h3>Dry Products</h3>
                            <img src={dryImage} alt="Dry Products" />
                        </div>

                        <div className="pl-card">
                            <h3>Liquid Products</h3>
                            <img src={liquidImage} alt="Liquid Products" />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="pl-content">
                        <span className="pl-tag">Private Label</span>

                        <h2>
                            Re-packaging, Private / White Labeling & Tailor Made Recipes Provider
                        </h2>

                        <p>
                            Kuber Dairy Group provides a range of services along with its exceptional
                            dairy product line. Repacking and private labeling are among the valuable
                            services we offer to our customers. These services enable customers to
                            promote products with their own brand name, helping them establish a
                            unique brand identity that is crucial for standing out in the market.
                        </p>

                        <p>
                            At Kuber Dairy Group, our private labeling service allows clients to personalize their dry
                            milk products through customized packaging, logos, and labels. Additionally, our repacking
                            services accommodate specific packaging requirements for dry milk powders and other dairy products,
                            catering to businesses with diverse needs such as varying package sizes, bulk packaging, or specialized packaging materials.
                        </p>

                        <p>
                            By adapting product packaging to individual specifications, Kuber Dairy Group ensures flexibility and
                            customer satisfaction. Our commitment to addressing the unique needs of our clients is evident in our private labeling and repacking services.
                            Our team of experts is available throughout the process to serve customers with their custom requirements and product specifications.
                        </p>

                        <p>
                            Furthermore, Kuber Dairy Group takes pride in its strict quality control measures. We understand that product
                            integrity is crucial, especially in the dairy industry, where the freshness and purity of the product are key.
                            Our state-of-the-art facilities and adherence to international quality
                            standards guarantee that every product, whether repacked or labeled under a private brand, maintains the highest level of quality.
                        </p>
                        <p>
                            In addition to private labeling and repacking, Kuber Dairy Group provides end-to-end support for product distribution.
                            We assist our clients not just in creating personalized products but also in navigating the logistical challenges of global shipping.
                            This holistic approach enables businesses to focus on expanding their brand presence while we handle the
                            complexities of packaging, quality assurance, and delivery
                        </p>
                    </div>
                </div>
            </section>

            <TestimonialSlider />
            <FAQPrivate />
        </>
    );
};

export default PrivateLabel;