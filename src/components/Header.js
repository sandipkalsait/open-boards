import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>open-boards</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        {/* <a href="/workspace">Workspace</a> */}
      </nav>
    </header>
  );
}

export default Header;
