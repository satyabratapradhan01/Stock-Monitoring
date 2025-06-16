import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top shadow-sm">
      <div className="container py-2">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src="/images/logo.svg" alt="Zerodha" style={{ height: '32px' }} />
        </a>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links pushed to right */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {["Signup", "About", "Products", "Pricing", "Support"].map(item => (
              <li key={item} className="nav-item mx-2">
                <Link className="nav-link text-dark" to={`/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
