import React from 'react';
import LegalFooter from './legalFooter';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <ul className="menuFooter">
      <li className="menuFooterList">
        <a className="menuFooterItem" href="/">FAQ</a>
      </li>
      <li className="menuFooterList">
        <a className="menuFooterItem" href="/">Privacy</a>
      </li>
      <li className="menuFooterList">
        <a className="menuFooterItem" href="/">Terms of Use</a>
      </li>
      <li className="menuFooterList">
        <a className="menuFooterItem" href="/">Media Center</a>
      </li>
      <li className="menuFooterList">
        <a className="menuFooterItem" href="/">Help Center</a>
      </li>
      <li className="menuFooterList">
        <a className="menuFooterItem" href="/">Contact Us</a>
      </li>
    </ul>
    <LegalFooter />
  </div>
);

export default Footer;
