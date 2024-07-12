// Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Make sure to adjust the path according to your file structure

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          StyleStream
        </NavLink>

        <div className="nav__toggle" id="nav-toggle">
          <button>
            Toggle
          </button>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink exact to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/explore" className="nav__link">
                Explore
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/activity" className="nav__link">
                Activity
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/shop" className="nav__link">
                Shop
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/profile" className="nav__link">
                Profile
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/get-started" className="nav__link nav__cta">
                Create Post
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            Logout
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
