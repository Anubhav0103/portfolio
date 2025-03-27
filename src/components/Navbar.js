import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-gray-900 shadow-lg p-4 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden flex justify-between items-center">
        <button onClick={toggleMenu} className="text-teal-400 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0 mt-4 sm:mt-0 text-center bg-gray-900 sm:bg-transparent absolute sm:static top-14 left-0 w-full sm:w-auto z-50`}
      >
        {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
          <li key={item} className="py-2 sm:py-0">
            <NavLink
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-teal-400 hover:text-purple-400 transition transform hover:scale-110 text-sm sm:text-base ${
                  isActive ? 'underline' : ''
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;