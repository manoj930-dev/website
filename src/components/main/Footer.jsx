import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-light pt-5">
      <div className="container">

        {/* ================= TOP FOOTER ================= */}
        <div className="row g-4">

          {/* COMPANY INFO */}  
          <div className="col-md-4">
            <h4 className="fw-bold">
              MSP <span className="text-primary">IT Solution</span>
            </h4>
            <p className="text-muted mt-3">
              MSP IT Solution is a professional IT company in Jaipur providing
              high-quality <strong>website development</strong>, 
              <strong> software development</strong>, 
              <strong> mobile app development</strong> and 
              <strong> WhatsApp automation solutions</strong> for businesses.
            </p>
            <p className="text-muted">
              We help startups and enterprises grow digitally with modern,
              secure, and SEO-friendly technology solutions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li><Link className="footer-link" to="/">Home</Link></li>
              <li><Link className="footer-link" to="/about">About Us</Link></li>
              <li><Link className="footer-link" to="/portfolio">Portfolio</Link></li>
              <li><Link className="footer-link" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Our Services</h5>
            <ul className="list-unstyled mt-3">
              <li>Website Development</li>
              <li>Software Development</li>
              <li>Mobile App Development</li>
              <li>WhatsApp Panel & Automation</li>
              <li>SEO & Digital Solutions</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-md-3">
            <h5 className="fw-semibold">Contact Us</h5>
            <ul className="list-unstyled mt-3">
              <li>📞 9306487930</li>
              <li>📞 8901517890</li>
              <li>📧 monuyadav4772@gmail.com</li>
              <li className="mt-2">
                📍 Samod Road, Chomu<br />
                Near Samod Pulia,<br />
                Jaipur, Rajasthan, India
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="row mt-4 border-top pt-3 text-center">
          <div className="col">
            <p className="mb-1">
              © {new Date().getFullYear()} <strong>MSP IT Solution</strong>. All
              Rights Reserved.
            </p>
            <small className="text-muted">
              Designed & Developed by MSP IT Solution | Software & Web Experts
            </small>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
