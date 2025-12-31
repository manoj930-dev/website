import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top premium-navbar bg-black">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="logo-main me-1 text-orange">MSP</span>
          <span className="logo-sub text-light">IT Solution</span>
        </Link>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 text-center">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>

            {/* CTA BUTTONS */}
            <li className="nav-item">
              <a
                href="https://wapanel.mspit.in/"
                className="btn btn-outline-danger"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Panel
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://wapanel.mspit.in/about.html"
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Doc
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
