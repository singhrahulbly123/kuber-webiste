import mainImg from "../../assets/about-one-img-2.jpg";
import smallImg from "../../assets/about-one-img-2.jpg";

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                {/* LEFT CONTENT */}
                <div className="about-left">
                    <span className="about-subtitle">
                        Get to Know KUBER DAIRY GROUP
                    </span>

                    <h2 className="about-title">
                        KUBER Dairy is a world-renowned
                        expert in dairy production
                    </h2>

                    <h4 className="about-cert">
                        Certified from (HACCP, FSSAI, ISO, HALAL, EU, IFS)
                    </h4>

                    <p className="about-text">
                        KUBER Dairy is a world-renowned expert in dairy production, offering a wide range of high-quality milk 
                        products to the global market. Our extensive experience in the dairy industry has allowed us to excel 
                        in producing and providing exceptional dairy products. We take pride in the quality of our products, 
                        our manufacturing processes, and our business practices. </p>
                       <p className="about-text">
                        The company is operated from Estonia and India , spearheaded by Vidhi Brahmbhatt, a dynamic 
                        entrepreneur who is passionate about assisting companies and businesses to be relevant, 
                        successful and highly profitable in the ever-evolving market dynamics.
                    </p>

                    <button className="about-btn">
                        Contact Us
                        <span>→</span>
                    </button>
                </div>

                {/* RIGHT IMAGES */}
                <div className="about-right">
                    <div className="about-accent"></div>

                    <div className="about-img-main">
                        <img src={mainImg} alt="main" />
                    </div>

                    <div className="about-img-small">
                        <img src={smallImg} alt="small" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
