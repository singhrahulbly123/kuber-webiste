import React from "react";
import StorygImg from "../../assets/about-big-400-x-538-px.png";

const AboutStory: React.FC = () => {
    return (
        <section className="about-story">
            <div className="about-story-grid container">
                <div className="about-img">
                    <img src={StorygImg} alt="Dairy Farm" />
                </div>

                <div className="about-content">
                    <span className="section-tag">Welcome to KUBER Dairy</span>
                    <h2>Boost Your Business with Kuber's Premium Products</h2>
                    <p>
                        KUBER Dairy is a world-renowned expert in dairy production, offering a wide range of 
                        high-quality milk products to the global market. Our extensive experience in the dairy industry 
                        has allowed us to excel in producing and providing exceptional dairy products. We take 
                        pride in the quality of our products, our manufacturing processes, and our business practices.
                    </p>
                    <br/>
                    <p>
                        The company is operated from Estonia and India , spearheaded by Vidhi Brahmbhatt, a dynamic 
                        entrepreneur who is passionate about assisting companies and businesses to be relevant, 
                        successful and highly profitable in the ever-evolving market dynamics.
                    </p>
                    <br/>
                    <p>
                        Close observations of the industry trends have lead manufacturing of milk 
                        powder blending facility in INDIA and EUROPE where we manufacture products 
                        being a cost-effective option for traditional milk powder. Also , we are 
                        in joint ventures with producers across Europe and Americas . Our 
                        skimmed milk powder , whole milk powder preparations are satisfying 
                        needs of producers of baked goods, ice creams, drinks, chocolates etc., 
                        and in fact are suitable for almost all applications in the food industry.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
