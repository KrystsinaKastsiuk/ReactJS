import React from 'react';
import './menuNav.css';

const MenuNav = () => (
  <div className="menuNav">
    <ul>
      <li className="menuNavItem">
        <a className="menuNavItemLink" href="/">
          <span>New</span>
        </a>
      </li>
      <li className="menuNavItem">
        <a className="menuNavItemLink" href="/">
          <span>Popular</span>
        </a>
      </li>
    </ul>
  </div>
);

export default MenuNav;
