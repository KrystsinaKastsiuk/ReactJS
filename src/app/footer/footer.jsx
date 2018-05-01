import React from 'react';
import LegalFooter from './legalFooter.jsx';
import './footer.css';

const FunctionalComponents = () => {
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

export default FunctionalComponents;
