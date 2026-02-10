import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Email from '../../assets/icon/call.png'
import Call from '../../assets/icon/call.png'
import India from '../../assets/icon/india.png'
import Estonia from '../../assets/icon/estonia.png'


const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(() => {
                setSuccess("Message sent successfully!");
                setLoading(false);
                formRef.current?.reset();
            })
            .catch(() => {
                setSuccess("Message not sent successfully!");
                setLoading(false);
            });
    };

    return (
        <section className="contact-section">
            <div className="contact-wrapper">
                {/* LEFT SIDE */}
                <div className="contact-left">
                    <span className="contact-subtitle">
                        Kuber Dairy Group
                    </span>

                    <h2>Get in touch now</h2>

                    <div className="contact-block">
                        <img className="flag w-25" src={Email} alt="Question" />
                        <div>
                            <p className="label">Have Question?</p>
                            <p className="value">+91 93270 67397</p>
                        </div>
                    </div>

                    <div className="contact-block">
                        <img className="flag" src={Call} alt="Email" />
                        <div>
                            <p className="label">Write Email</p>
                            <p className="value">
                                info@kuber-globalgroup.com
                            </p>
                        </div>
                    </div>

                    <div className="contact-block">
                        <img className="flag" src={Estonia} alt="Estonia" />
                        <div>
                            <p className="label">Estonia Address</p>
                            <p className="value">
                                Narva mnt 5, 10117 Tallinn, Tallinn, Estonia
                            </p>
                        </div>
                    </div>

                    <div className="contact-block">
                        <img className="flag" src={India} alt="Estonia" />
                        <div>
                            <p className="label">India Address</p>
                            <p className="value">
                                Unit 401 -Plot No 29-30 (Apartment-Shantam 2), Upkar society,
                                Behind Inox, Land Mark-Ashwarya building,
                                Near vahanvti temple. Race Course, Vadodara, PIN 390007.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}

                <div className="contact-form-box">
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="tel"
                                name="tel"
                                placeholder="Mobile Number"
                                required
                                minLength={10}
                                maxLength={10}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Write a Message"
                            rows={5}
                            required
                        />

                        <button type="submit">
                            {loading ? "Sending..." : "Send a Message"}
                        </button>

                        {success && (
                            <p className="success-text">{success}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;