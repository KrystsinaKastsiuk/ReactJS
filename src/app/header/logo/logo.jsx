import React from 'react';
import logo from './images/logo.png';
import styles from './logo.css';

const Logo = () => (
  <div className={styles.logo}>
    <img src={logo} alt="logo" />
  </div>
);

export default Logo;
