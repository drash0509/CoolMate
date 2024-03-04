import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create this CSS file with the styles provided below

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">COOLMATE</Link>
      <button
        className="nav-toggle"
        aria-expanded={isNavExpanded}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        &#9776;
      </button>
      <div className={`nav-menu ${isNavExpanded ? "expanded" : ""}`}>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/Home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Collection" className="nav-link">Collection</Link>
          </li>
          <li className="nav-item">
            <Link to="/AboutUs" className="nav-link">AboutUs</Link>
          </li>
          <li className="nav-item">
            <Link to="/ContactUs" className="nav-link">ContactUs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
