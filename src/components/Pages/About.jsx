import React from "react";
import Header from "../main/Header";
import Footer from "../main/Footer";

const About = () => {
  return (
    <>
      <Header />

      {/* ================= ABOUT HERO ================= */}
      <header className="container-fluid bg-black text-light py-5 mt-5">
        <div className="container text-center">
          <h1 className="fw-bold">
            About <span className="text-orange">MSP IT Solution</span>
          </h1>
          <p className="mt-3 text-light-50">
            Software Development Company | IT Services | Digital Solutions
            Provider in Jaipur
          </p>
        </div>
      </header>

      {/* ================= COMPANY INTRO ================= */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h2 className="fw-bold">
              Who <span className="text-orange">We Are</span>
            </h2>
            <p className="mt-3">
              <strong>MSP IT Solution</strong> is a professional software
              development and IT services company delivering high-quality
              <strong> websites</strong>, <strong>software solutions</strong>,
              <strong> mobile applications</strong> and
              <strong> WhatsApp automation panels</strong>.
            </p>
            <p>
              We help startups, small businesses and enterprises grow digitally
              using modern, secure and scalable technologies.
            </p>
          </div>

          <div className="col-md-5 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Software Development Company"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-6">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h3 className="fw-bold text-orange">Our Mission</h3>
                  <p className="mt-2">
                    Our mission is to deliver reliable, scalable and
                    SEO-optimized software solutions that help businesses
                    achieve their digital goals efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h3 className="fw-bold text-orange">Our Vision</h3>
                  <p className="mt-2">
                    Our vision is to become a leading IT company known for
                    innovation, quality and customer satisfaction worldwide.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">
          Our <span className="text-orange">IT Services</span>
        </h2>

        <div className="row g-3">
          {[
            "Website Development",
            "Software Development",
            "Mobile App Development",
            "WhatsApp Automation Panel",
            "Cloud & Hosting Services",
            "SEO & Digital Marketing",
          ].map((service, i) => (
            <div key={i} className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body">
                  <h5 className="fw-semibold">{service}</h5>
                  <p className="text-muted">
                    Secure, scalable and business-focused IT solutions.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="container-fluid bg-black text-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Technologies & <span className="text-orange">Languages</span>
          </h2>

          <div className="row g-4 text-center">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Python",
              "Java",
              "PHP",
              "Cloud Computing",
            ].map((tech, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="tech-card">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">
          Why Choose <span className="text-orange">MSP IT Solution?</span>
        </h2>

        <div className="row">
          <div className="col-md-10 mx-auto">
            <ul className="list-unstyled fs-5">
              <li>✔️ Experienced Software Developers</li>
              <li>✔️ Latest Technologies & Tools</li>
              <li>✔️ Affordable Pricing</li>
              <li>✔️ Timely Project Delivery</li>
              <li>✔️ 24/7 Client Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container-fluid bg-black text-light py-5 text-center">
        <h2 className="fw-bold">
          Let’s Build Your <span className="text-orange">Digital Product</span>
        </h2>
        <p className="text-light-50 mt-2">
          Partner with MSP IT Solution for professional IT services
        </p>
        <a href="/contact" className="btn btn-orange mt-3">
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
};

export default About;
