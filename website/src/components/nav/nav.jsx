import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation 
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf,
  Menu,
  X,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { Toaster } from 'sonner';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { 
      label: 'Solutions',
      children: [
        { path: '/services', label: 'Services' },
        { path: '/programs', label: 'Programs' },
        { path: '/resources', label: 'Resources' }
      ]
    },
    { path: '/about', label: 'About' },
    { path: '/impact', label: 'Impact' },
    { 
      label: 'Insights',
      children: [
        { path: '/case-studies', label: 'Case Studies' },
        { path: '/partnerships', label: 'Partnerships' }
      ]
    },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="flex items-center space-x-2"
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Green Axis</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.children ? (
                <DesktopDropdown key={index} item={item} />
              ) : (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) => `
                    text-gray-700 hover:text-green-600 transition-colors relative
                    ${isActive ? 'text-green-600' : ''}
                  `}
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                item.children ? (
                  <MobileDropdown key={index} item={item} />
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) => `
                      block px-3 py-2 rounded-md text-base font-medium
                      ${isActive ? 
                        'bg-green-50 text-green-600' : 
                        'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                      }
                    `}
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const DesktopDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = item.children.some(
    child => child.path === location.pathname
  );

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center space-x-1 ${
          isActiveRoute ? 'text-green-600' : 'text-gray-700'
        } hover:text-green-600 transition-colors`}
      >
        <span>{item.label}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              {item.children.map((child, index) => (
                <NavLink
                  key={index}
                  to={child.path}
                  className={({ isActive }) => `
                    block px-4 py-2 text-sm
                    ${isActive ? 
                      'bg-green-50 text-green-600' : 
                      'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                    }
                  `}
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = item.children.some(
    child => child.path === location.pathname
  );

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium
          ${isActiveRoute ? 
            'bg-green-50 text-green-600' : 
            'text-gray-700 hover:bg-gray-50 hover:text-green-600'
          }
        `}
      >
        <span>{item.label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-4 overflow-hidden"
          >
            {item.children.map((child, index) => (
              <NavLink
                key={index}
                to={child.path}
                className={({ isActive }) => `
                  block px-3 py-2 text-sm rounded-md
                  ${isActive ? 
                    'bg-green-50 text-green-600' : 
                    'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                  }
                `}
              >
                {child.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
