import React from 'react';
import styles from './menuNav.css';
import { NavLink } from 'react-router-dom';

const MenuNav = () => (
  <div className={styles.menuNav}>
    <ul>
      <li className={styles.menuNavItem}>
        <NavLink to="/" exact className={styles.menuNavItemLink}>
          <span>Home</span>
        </NavLink>
      </li>
      <li className={styles.menuNavItem}>
        <NavLink to="/fgdfg" className={styles.menuNavItemLink}>
          <span>Not Found</span>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default MenuNav;
