import React from 'react';
import './menuNav.css';
import { NavLink } from 'react-router-dom';

const MenuNav = () => (
  <div className="menuNav">
    <ul>
      <li className="menuNavItem">
        <NavLink to="/" exact className="menuNavItemLink">
          <span>Home</span>
        </NavLink>
      </li>
      <li className="menuNavItem">
        <NavLink to="/fgdfg" className="menuNavItemLink">
          <span>Not Found</span>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default MenuNav;
