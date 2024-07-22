import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>SBI Homepage</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/service">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/loan">loan</a></li>
      <input type="search" placeholder='Search Here '   />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
