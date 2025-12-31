import React from "react";
import Header from "../main/Header";
import Footer from "../main/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      {/* ================= CONTACT HERO ================= */}
      <header className="container-fluid bg-black text-light py-5 mt-5">
        <div className="container text-center">
          <h1 className="fw-bold">
            Contact <span className="text-orange">MSP IT Solution</span>
          </h1>
          <p className="mt-3 text-light-50">
            Software Development | Website Design | Mobile App Development |
            WhatsApp Automation Services in Jaipur
          </p>
        </div>
      </header>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="container py-5">
        <div className="row text-center mb-5">
          <h2 className="fw-bold">
            Get in <span className="text-orange">Touch</span>
          </h2>
          <p className="text-muted">
            We are always ready to help your business grow with modern IT
            solutions.
          </p>
        </div>

        <div className="row g-4">
          {/* Phone */}
          <div className="col-md-4">
            <div className="card contact-card h-100 text-center">
              <div className="card-body">
                <i className="bi bi-telephone-fill text-orange fs-2"></i>
                <h5 className="mt-3 fw-semibold">Call Us</h5>
                <p className="mb-1">📞 9306487930</p>
                <p>📞 8901517890</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4">
            <div className="card contact-card h-100 text-center">
              <div className="card-body">
                <i className="bi bi-envelope-fill text-orange fs-2"></i>
                <h5 className="mt-3 fw-semibold">Email</h5>
                <p>📧 monuyadav4772@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-md-4">
            <div className="card contact-card h-100 text-center">
              <div className="card-body">
                <i className="bi bi-geo-alt-fill text-orange fs-2"></i>
                <h5 className="mt-3 fw-semibold">Office Address</h5>
                <address className="mb-0">
                  Samod Road, Chomu <br />
                  Near Samod Pulia <br />
                  Jaipur, Rajasthan
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INQUIRY FORM ================= */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">
              Send Your <span className="text-orange">Inquiry</span>
            </h2>
            <p className="text-muted">
              Fill the form below and our team will contact you shortly.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                  <form>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Service Required
                      </label>
                      <select className="form-select" required>
                        <option value="">Select Service</option>
                        <option>Website Development</option>
                        <option>Software Development</option>
                        <option>Mobile App Development</option>
                        <option>WhatsApp Automation</option>
                        <option>Other IT Services</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Describe your requirement"
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button className="btn btn-orange px-5">
                        Submit Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container-fluid bg-black text-light py-5 text-center">
        <h2 className="fw-bold">
          Need Professional <span className="text-orange">IT Services?</span>
        </h2>
        <p className="text-light-50 mt-2">
          Call us today and grow your business with MSP IT Solution
        </p>
        <a href="tel:9306487930" className="btn btn-orange mt-3">
          Call Now
        </a>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
