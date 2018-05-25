import React from 'react';
import Logo from './logo/logo';
import Search from './searchField/search';
import MenuNav from './menuNav/menuNav';
import './header.css';

const Header = () => (
  <div className="menu">
    <Logo />
    <MenuNav />
    <Search />
  </div>
);

export default Header;
