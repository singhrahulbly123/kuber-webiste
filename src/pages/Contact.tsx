import "../styles/contact.css";
import hero from "../assets/banner1.jpg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { getNames } from "country-list";

const countryOptions = getNames().map((country) => ({
  value: country,
  label: country,
}));

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState({
    value: "India",
    label: "India",
  });

  return (
    <>
      {/* HERO */}
      
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="contact-hero-overlay">
          <p>Home / Contact Us</p>
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* SECTION */}
      <section className="contact-page">
        <div className="contact-layout">

          {/* FORM SIDE */}
          <div className="contact-form">
            <span className="contact-tag">Write a Message</span>
            <h2>Always here to help you</h2>

            <form>
              <div className="row">
                <input placeholder="Name*" required />
                <input placeholder="Email Address*" required />
              </div>

              <input placeholder="Subject*" required />

              <div className="row">
                <PhoneInput
                  country={"in"}  // default India
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  enableSearch
                />

                <input placeholder="Phone Number*" />
              </div>

              <div className="row countphone">
                <Select
                  options={countryOptions}
                  value={country}
                  onChange={(selected) => setCountry(selected!)}
                />

                <input placeholder="Company Name*" />
                <input placeholder="Website" />
              </div>

              <Select
                options={[
                  { value: "Milk Powder", label: "Milk Powder" },
                  { value: "Butter", label: "Butter" },
                  { value: "UHT Milk", label: "UHT Milk" },
                ]}
                placeholder="Select Interested Product*"
              />

              <textarea
                rows={5}
                placeholder="Write a Message*"
              />

              <button type="submit">Send a Message</button>
            </form>
          </div>

          {/* CONTACT INFO SIDE */}
          <div className="contact-info">
            <div className="info-card">
              <h4>Have Question?</h4>
              <p>Call: +91 93270 67397</p>
            </div>

            <div className="info-card">
              <h4>Write Email</h4>
              <p>info@kuber-globalgroup.com</p>
            </div>

            <div className="info-card">
              <h4>Estonia Office</h4>
              <p>
                Narva mnt 5, 10117 Tallinn, Tallinn, Estonia
                <br />
                Phone: +372 631 1118
              </p>
            </div>

            <div className="info-card">
              <h4>India Office</h4>
              <p>
                Unit 401 -Plot No 29-30 (Apartment-Shantam 2), Upkar society, Behind Inox, 
                Land Mark-Ashwarya building, Near vahanvti temple. 
                Race Course, Vadodara, PIN 390007.
                <br />
                Phone: +91 93270 67397
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
