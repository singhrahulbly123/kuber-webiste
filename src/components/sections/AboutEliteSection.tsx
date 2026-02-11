import React from "react";
import heroImg from "../../assets/milk.jpg";
import accentImg from "../../assets/about-one-img-1.jpg";
import "../../styles/aboutElite.css";

const AboutEliteSection: React.FC = () => {
    return (
        <section className="elite-about">
            <div className="elite-wrapper">

                {/* VISUAL SIDE */}
                <div className="elite-visual">

                    <div className="elite-img-primary">
                        <img src={heroImg} alt="Kuber Dairy Production Facility" />
                    </div>

                    <div className="elite-img-secondary">
                        <img src={accentImg} alt="Premium Dairy Expertise" />
                    </div>

                    <div className="elite-glow-circle"></div>

                </div>

                {/* CONTENT SIDE */}
                <div className="elite-content">

                    <span className="elite-tag">
                        Join Kuber Dairy Group at Gulfood 2026
                    </span>

                    <h2 className="elite-heading">
                        Experience world-class dairy innovation with Kuber Dairy Group at Gulfood 2026!
                    </h2>

                    <p className="elite-certification">
                        Certified from (HACCP, FSSAI, ISO, HALAL, EU, IFS)
                    </p>

                    <p className="elite-description">
                       As one of the fastest-growing global dairy exporters, we’re setting new benchmarks in quality, innovation, and reliability. 
                       From Fat Filled Milk Powder to Skimmed Milk Powder, Butter, and Dairy Ingredients, Kuber Dairy Group has become the trusted 
                       name powering leading brands and importers across continents.
                    </p>

                    <p className="elite-description">
                        Book your exclusive appointment with the Kuber Dairy Group team today and secure your place among global dairy leaders!
                    </p>

                    <button className="elite-cta">
                        Book Your Appointment Now
                        <span className="elite-arrow">→</span>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default AboutEliteSection;
