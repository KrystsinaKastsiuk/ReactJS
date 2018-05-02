import React from 'react';
import LegalFooter from './legalFooter';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <span>FAQ</span>
        <span>Privacy</span>
        <span>Terms of Use</span>
        <span>Cookie Preferences</span>
        <span>Corporate Information</span>
        <span>Media Center</span>
        <span>Help Center</span>
        <span>Contact Us</span>
      </p>
      <LegalFooter />
    </div>
  );
};

export default Footer;
