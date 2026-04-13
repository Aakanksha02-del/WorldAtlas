import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-box">
          <FaMapMarkerAlt className="footer-icon" />
          <div>
            <h4>Find us</h4>
            <p>Pune, Maharashtra</p>
          </div>
        </div>

        <div className="footer-box">
          <FaPhoneAlt className="footer-icon" />
          <div>
            <h4>Call us</h4>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <div className="footer-box">
          <FaEnvelope className="footer-icon" />
          <div>
            <h4>Mail us</h4>
            <p>contact@yourdomain.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved | YourWebsite</p>
      </div>
    </footer>
  );
};

export default Footer;