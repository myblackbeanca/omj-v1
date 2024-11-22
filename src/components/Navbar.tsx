import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

interface MenuItem {
  name: string;
  path?: string;
  dropdown?: {
    name: string;
    path: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    name: "About",
    dropdown: [
      { name: "About Us", path: "/about-us" },
      { name: "About OMJ", path: "/about-omj" },
      { name: "Mission & Goals", path: "/mission-and-goals" }
    ]
  },
  {
    name: "About TMJ",
    dropdown: [
      { name: "About TMJ", path: "/about-tmj" },
      { name: "FAQ", path: "/faq" }
    ]
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Media & Infographics", path: "/resources" },
      { name: "Podcast", path: "/podcast" },
      { name: "Blog", path: "/blog" }
    ]
  },
  {
    name: "Support OMJ",
    dropdown: [
      { name: "Why OMJ", path: "/why-omj" },
      { name: "Sponsor Us", path: "/sponsor-us" }
    ]
  },
  { 
    name: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (menuItems[index].dropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <nav className="bg-black fixed w-full z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://github.com/myblackbeanca/tmjimages/blob/main/logone.png?raw=true"
                alt="OMJ Logo"
                className="h-[3.5rem] w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-bubblegum pt-2 hover:text-opacity-80">
              <Home size={24} />
            </Link>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                ref={el => dropdownRefs.current[index] = el}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-bubblegum hover:text-opacity-80 font-semibold"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className="text-bubblegum hover:text-opacity-80 font-semibold"
                  >
                    {item.name}
                  </button>
                )}

                {item.dropdown && activeDropdown === index && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-charcoal hover:bg-gray-100"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bubblegum hover:text-opacity-80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-bubblegum hover:text-opacity-80 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-bubblegum hover:text-opacity-80 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full text-left px-3 py-2 text-bubblegum hover:text-opacity-80 font-semibold"
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    >
                      {item.name}
                    </button>
                    {item.dropdown && activeDropdown === index && (
                      <div className="pl-6 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            className="block px-3 py-2 text-bubblegum hover:text-opacity-80"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;