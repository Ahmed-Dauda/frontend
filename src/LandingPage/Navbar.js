import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass =
    "text-blue-600 font-semibold border-b-2 border-blue-600";

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
  <img
    src={`${process.env.PUBLIC_URL}/logo.png`} // points to public/logo.png
    alt="CodeThinkers Logo"
    className="h-10 w-auto mr-3"
  />
  {/* <span className="text-xl font-bold text-blue-600">CodeThinkers</span> */}
</NavLink>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/programs"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              Programs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                // Close Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/programs"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
              onClick={() => setIsOpen(false)}
            >
              Programs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? activeClass
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
