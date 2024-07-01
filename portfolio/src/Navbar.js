import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        
        <li className="navbar-item">
          <FaHome className="navbar-icon" />
          Home
        </li>

        <li className="navbar-item">
          <FaInfoCircle className="navbar-icon" />
          About
        </li>

        <li className="navbar-item">
          <FaEnvelope className="navbar-icon" />
          Contact
        </li>

        <li className="navbar-item">
          <FaUser className="navbar-icon" />
          Profile
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;