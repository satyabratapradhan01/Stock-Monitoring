import React from 'react';

function Pricing() {
    return ( 
        <div className="container">
      <div className="row align-items-center">
        {/* Left Side - Text */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-primary text-decoration-none">
            See pricing <i className="fas fa-arrow-right ms-1"></i>
          </a>
        </div>

        {/* Right Side - Prices */}
        <div className="col-md-6 d-flex justify-content-around text-center">
          <div>
            <h1 className="text-warning fw-bold display-4">₹0</h1>
            <p className="text-muted small">Free account<br />opening</p>
          </div>
          <div>
            <h1 className="text-warning fw-bold display-4">₹0</h1>
            <p className="text-muted small">Free equity delivery<br />and direct mutual funds</p>
          </div>
          <div>
            <h1 className="text-warning fw-bold display-4">₹20</h1>
            <p className="text-muted small">Intraday and<br />F&amp;O</p>
          </div>
        </div>
      </div>
    </div>
     );
}

export default Pricing;