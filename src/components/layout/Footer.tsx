import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail, FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import logo from "../../assets/kuber.png";

const Footer = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowTop(window.scrollY > 300);
        });
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Company Info */}
                <div className="footer-col">
                    <img src={logo} alt="logo" className="logo" />
                    <h3>Kuber Dairy Group</h3>
                    <p>
                        KUBER Dairy is a world-renowned expert in dairy production,
                        offering a wide range of high-quality milk products globally.
                    </p>
                </div>

                {/* Explore Links */}
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Milk Products</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Contact Short Info */}
                <div className="footer-col">
                    <h4>Our Offices</h4>
                    <div className="footer-contact">
                        <FiPhone />
                        <span>+91 93270 67397</span>
                    </div>

                    <div className="footer-contact">
                        <FiMail />
                        <span>info@kuber-globalgroup.com</span>
                    </div>

                    {/* India */}
                    <div className="footer-location">
                        <FiMapPin className="footer-icon" />
                        <div>
                            <p className="country">India</p>
                            <p className="address">
                                Unit 401 - Plot No 29-30 (Apartment-Shantam 2),
                                Upkar society, Behind Inox, Near vahanvti temple.
                                Race Course, Vadodara, PIN 390007.
                            </p>
                            <div className="footer-phone">
                                <FiPhone className="footer-icon small" />
                                <span>+91 93270 67397</span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Newsletter */}
                <div className="footer-col">
                    <h4>Subscribe</h4>
                    <div className="newsletter">
                        <input type="email" placeholder="Email Address" />
                        <button>→</button>
                    </div>

                    {/* Estonia */}
                    <div className="footer-location">
                        <FiMapPin className="footer-icon" />
                        <div>
                            <p className="country">Estonia</p>
                            <p className="address">
                                Narva mnt 5, 10117 Tallinn, Tallinn, Estonia
                            </p>
                            <div className="footer-phone">
                                <FiPhone className="footer-icon small" />
                                <span>+372 631 1118</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>© 2026 Kuber Dairy Group. All Rights Reserved. Developed By HRM Infosec</p>

                <div className="socials">
                    <FaFacebookF />
                    <FaInstagram />
                </div>
            </div>

            {/* Scroll To Top */}
            {showTop && (
                <button
                    className="scroll-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <FiArrowUp />
                </button>
            )}
        </footer>
    );
};

export default Footer;

