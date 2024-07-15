// Navbar.jsx

import React , { useState }from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Make sure to adjust the path according to your file structure
import QuizModal from './QuizModal';

const Navbar = ( ) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            StyleStream
          </NavLink>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <button>
              ☰
            </button>
          </div>

          <div className={`nav__menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink exact to="/" className="nav__link" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/explore" className="nav__link" onClick={closeMenu}>
                  Explore
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/gamezone" className="nav__link" onClick={closeMenu}>
                  GameZone
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/shop" className="nav__link" onClick={closeMenu}>
                  Shop
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/profile" className="nav__link" onClick={closeMenu}>
                  Profile
                </NavLink>
              </li>
              <li className="nav__item">
                <button onClick={() => { openQuiz(); closeMenu(); }} className="nav__link nav__cta">
                  Quiz of the day
                </button>
              </li>
              <li className="nav__item">
                <NavLink to="/logout" className="nav__link">
                  Logout
                </NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={closeMenu}>
              ✖
            </div>
          </div>
        </nav>
      </header>
      {isQuizOpen && <QuizModal closeQuiz={closeQuiz} />}
    </>
  );
};

export default Navbar;
