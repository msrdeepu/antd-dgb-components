import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white focus:outline-none">
                  Services
                </button>
                <div className="absolute hidden group-hover:block bg-gray-800 text-gray-300 py-2 mt-1">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Service 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Service 2
                  </a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white focus:outline-none">
                  Dropdown
                </button>
                <div className="absolute hidden group-hover:block bg-gray-800 text-gray-300 py-2 mt-1">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Item 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Item 2
                  </a>
                </div>
              </div>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <div className="group">
            <button className="text-gray-300 hover:text-white focus:outline-none w-full text-left">
              Services
            </button>
            <div className="hidden bg-gray-800 text-gray-300 py-2 mt-1">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Service 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Service 2
              </a>
            </div>
          </div>
          <div className="group">
            <button className="text-gray-300 hover:text-white focus:outline-none w-full text-left">
              Dropdown
            </button>
            <div className="hidden bg-gray-800 text-gray-300 py-2 mt-1">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Item 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Item 2
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
