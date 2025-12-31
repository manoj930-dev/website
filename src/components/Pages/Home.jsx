import React from "react";
import Header from "../main/Header";
import Footer from "../main/Footer";

const Home = () => {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <header className="container-fluid hero-section mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-light">
              <h1 className="fw-bold">
                MSP IT Solution <br />
                <span className="text-orange">
                  Software Development & IT Services Company
                </span>
              </h1>

              <p className="mt-3 text-light-50">
                MSP IT Solution is a professional IT company in India providing
                <strong> software development</strong>,
                <strong> website development</strong>,
                <strong> mobile app development</strong>,
                <strong> cloud computing</strong> and
                <strong> WhatsApp automation software</strong>
                for startups, small businesses and enterprises worldwide.
              </p>

              <p className="text-light-50">
                We build scalable, secure and SEO-optimized digital products
                using modern programming languages and frameworks.
              </p>

              <a href="/contact" className="btn btn-info mt-3">
                Get Free Consultation
              </a>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/logo.jpeg"
                alt="Software Development Company"
                className=" hero-img"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ================= SERVICES ================= */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Software & IT Services</h2>
          <p className="text-muted">
            End-to-end IT solutions using modern technologies
          </p>
        </div>

        <div className="row g-4">
          {[
            "Website Development (React, HTML, CSS, JavaScript)",
            "Custom Software Development",
            "Mobile App Development (Android & iOS)",
            "WhatsApp Automation & Bulk Messaging Panel",
            "Cloud Hosting & Server Management",
            "SEO & Digital Marketing Services",
          ].map((item, i) => (
            <div key={i} className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body">
                  <h5 className="fw-semibold">{item}</h5>
                  <p className="text-muted">
                    High-performance, secure and scalable solutions designed to
                    meet your business requirements.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      {/* <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Programming Languages & Technologies We Use
            </h2>
            <p className="text-muted">
              We work with industry-leading technologies and tools
            </p>
          </div>

          <div className="row g-4 text-center">
            {[
              {
                name: "HTML5",
                icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
              },
              {
                name: "CSS3",
                icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
              },
              {
                name: "JavaScript",
                icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
              },
              {
                name: "React.js",
                icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
              },
              {
                name: "Node.js",
                icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
              },
              {
                name: "MongoDB",
                icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
              },
              {
                name: "MySQL",
                icon: "https://cdn-icons-png.flaticon.com/512/919/919844.png",
              },
              {
                name: "Python",
                icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
              },
            ].map((tech, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="tech-card">
                  <img src={tech.icon} alt={tech.name} />
                  <h6 className="mt-2">{tech.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= CEO & FOUNDER ================= */}
      <section className="container-fluid bg-black py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <img
                src="/ceo.jpg"
                alt="CEO & Founder MSP IT Solution"
                className=" founder-img"
              />
            </div>

            <div className="col-md-7 text-light">
              <h2 className="fw-bold">
                CEO & Founder
                <span className="text-orange"> – MSP IT Solution</span>
              </h2>

              <p className="mt-3 text-light-50">
                <strong>Manoj Yadav</strong>, Founder & CEO of MSP IT Solution,
                is a software developer and IT entrepreneur with expertise in
                web technologies, backend systems and cloud solutions.
              </p>

              <p className="text-light-50">
                His vision is to help businesses grow digitally by providing
                secure, scalable and cost-effective software solutions using
                modern programming languages and frameworks.
              </p>

              <span className="text-white">CEO & Founder : <span className="text-primary">Manoj Yadav</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container-fluid cta-section text-center">
        <div className="container">
          <h2 className="fw-bold text-light">
            Build Your Business with Modern Technology
          </h2>
          <p className="text-light-50 mt-2">
            Partner with MSP IT Solution for professional software development
            and IT services.
          </p>
          <a href="/contact" className="btn btn-orange mt-3">
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
