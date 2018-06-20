import React from 'react';
import LegalFooter from './legalFooter';
import styles from './footer.css';

const Footer = () => (
  <div className={styles.footer}>
    <ul className={styles.menuFooter}>
      <li className={styles.menuFooterList}>
        <a className={styles.menuFooterItem} href="/">FAQ</a>
      </li>
      <li className={styles.menuFooterList}>
        <a className={styles.menuFooterItem} href="/">Privacy</a>
      </li>
      <li className={styles.menuFooterList}>
        <a className={styles.menuFooterItem} href="/">Terms of Use</a>
      </li>
      <li className={styles.menuFooterList}>
        <a className={styles.menuFooterItem} href="/">Media Center</a>
      </li>
      <li className={styles.menuFooterList}>
        <a className={styles.menuFooterItem} href="/">Help Center</a>
      </li>
      <li className={styles.menuFooterList}>
        <a className={styles.menuFooterItem} href="/">Contact Us</a>
      </li>
    </ul>
    <LegalFooter />
  </div>
);

export default Footer;
