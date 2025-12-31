import React from "react";
import Header from "../main/Header";
import Footer from "../main/Footer";

const Portfolio = () => {
  return (
    <>
      <Header />

      {/* ================= PORTFOLIO HERO ================= */}
      <header className="container-fluid bg-black text-light py-5 mt-5">
        <div className="container text-center">
          <h1 className="fw-bold">
            Our <span className="text-orange">Portfolio</span>
          </h1>
          <p className="mt-3 text-light-50">
            Software Development, Website Design, Mobile Apps & WhatsApp
            Automation Projects Delivered by MSP IT Solution
          </p>
        </div>
      </header>

      {/* ================= INTRO ================= */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-10 mx-auto">
            <h2 className="fw-bold">
              Our <span className="text-orange">Work Speaks</span> for Us
            </h2>
            <p className="text-muted mt-3">
              MSP IT Solution has successfully delivered high-quality,
              performance-driven and scalable IT solutions for startups,
              businesses and enterprises across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECT CATEGORIES ================= */}
      <section className="container pb-4">
        <div className="row g-3 text-center">
          {[
            "Web Development",
            "Custom Software",
            "WhatsApp Automation",
            "Mobile Applications",
            "Admin Dashboards",
            "E-Commerce Solutions",
          ].map((cat, i) => (
            <div key={i} className="col-6 col-md-4">
              <div className="category-card">
                {cat}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="container py-5">
        <div className="row g-4">
          {[
            {
              title: "Corporate Business Website",
              desc: "Professional, responsive and SEO-optimized business website designed to improve brand presence and lead generation.",
              tech: "HTML, CSS, JavaScript, React",
              industry: "Corporate Business",
            },
            {
              title: "Custom Business Software",
              desc: "Web-based software solution developed to automate internal business operations and reporting.",
              tech: "React, Node.js, MongoDB",
              industry: "Enterprise Software",
            },
            {
              title: "WhatsApp Automation Panel",
              desc: "Bulk WhatsApp messaging panel with CRM integration, scheduling and analytics.",
              tech: "Node.js, WhatsApp API, MongoDB",
              industry: "Digital Marketing",
            },
            {
              title: "E-Commerce Platform",
              desc: "Full-featured e-commerce website with secure payment gateway and admin management.",
              tech: "React, Node.js, Payment Gateway",
              industry: "E-Commerce",
            },
            {
              title: "Mobile Application",
              desc: "Android mobile app developed to enhance customer engagement and service accessibility.",
              tech: "React Native, REST APIs",
              industry: "Mobile App",
            },
            {
              title: "Admin Dashboard System",
              desc: "Secure admin dashboard with analytics, user roles and performance monitoring.",
              tech: "React, Bootstrap, REST API",
              industry: "Admin & Analytics",
            },
          ].map((project, i) => (
            <article key={i} className="col-md-4">
              <div className="card project-card h-100">
                <div className="card-body">
                  <h3 className="h5 fw-semibold">
                    {project.title}
                  </h3>

                  <p className="text-muted mt-2">
                    {project.desc}
                  </p>

                  <p className="mb-1">
                    <strong>Technologies:</strong> {project.tech}
                  </p>

                  <p>
                    <strong>Industry:</strong> {project.industry}
                  </p>

                  <a
                    href="#"
                    className="btn btn-outline-orange btn-sm mt-2"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">
            Our <span className="text-orange">Development Process</span>
          </h2>

          <div className="row g-4 text-center">
            {[
              "Requirement Analysis",
              "UI/UX Design",
              "Development",
              "Testing & QA",
              "Deployment",
              "Support & Maintenance",
            ].map((step, i) => (
              <div key={i} className="col-6 col-md-4">
                <div className="process-card">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="container-fluid bg-black text-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Technologies <span className="text-orange">We Use</span>
          </h2>

          <div className="row g-3 text-center">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "React Native",
              "Cloud Services",
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

      {/* ================= CTA ================= */}
      <section className="container-fluid bg-black text-light py-5 text-center">
        <h2 className="fw-bold">
          Have a <span className="text-orange">Project Idea?</span>
        </h2>
        <p className="text-light-50 mt-2">
          Let MSP IT Solution transform your idea into a powerful digital product.
        </p>
        <a href="/contact" className="btn btn-orange mt-3">
          Start Your Project
        </a>
      </section>
      <Footer/>
    </>
  );
};

export default Portfolio;
