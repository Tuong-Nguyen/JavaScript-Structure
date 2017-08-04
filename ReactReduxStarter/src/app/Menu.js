import React from 'react';

const Menu = () => {
  return (
    <div className="menu">
      <nav className="menu-nav">
        <ul>
          <li className="menu-nav-item"><a href="#">Popular</a></li>
          <li className="menu-nav-item"><a href="#">Shots</a></li>
          <li className="menu-nav-item"><a href="#">Now</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;