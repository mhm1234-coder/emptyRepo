import React from "react";

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-section">

      {/* PAGE WRAPPER */}
      <div className="contact-grid">

        {/* HEADER (separate full width) */}
        <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
          <h1>Contact Us</h1>
          <p>We are here to help you with medicines and support.</p>

          <h2>Get In Touch</h2>
        </div>

        {/* INFO CARDS */}
        <div className="card">
          <h3>Email</h3>
          <p>pharmacy@gmail.com</p>
        </div>

        <div className="card">
          <h3>Phone</h3>
          <p>0300-1234567</p>
        </div>

        <div className="card">
          <h3>Address</h3>
          <p>123 Pharmacy Street</p>
        </div>

        <div className="card">
          <h3>Working Hours</h3>
          <p>9 AM - 9 PM</p>
        </div>

        {/* FORM SECTION */}
        <div className="contact-form-card">

          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <textarea placeholder="Your Message" required />

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default ContactPage;