import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Clothes<span className='span'>In</span></h1>
        <div className="right">
          <ul className="nav-ui">
            <li className="ul-li"><a href="#about">About</a></li>
            <li className="ul-li"><a href="#shop">Shop</a></li>
            <li className="ul-li"><a href="#category">Category</a></li>
          </ul>
          <input id="search" type="text" placeholder="Search..." />
        </div>
      </nav>
    </header>
  );
};

export default Header;
