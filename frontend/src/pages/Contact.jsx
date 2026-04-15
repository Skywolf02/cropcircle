import React from "react";

function Contact() {
  return (
    <section className="page-section contact-page">
      <div className="container contact-layout">
        <div className="contact-card large">
          <p className="eyebrow">Contact us</p>
          <h1>We’re here to support better crop discovery</h1>
          <p>
            Reach out for listing support, platform help, or questions related to
            crop visibility and marketplace access.
          </p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>support@cropcircle.com</p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <h3>Address</h3>
          <p>Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;