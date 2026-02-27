import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Innovatech 360', href: '#' },
    { name: 'Meet', href: '#' },
    { name: 'InnovaOS', href: '#' },
    { name: 'InnovaTab', href: '#' },
    { name: 'PlaySphere', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                <div className="bg-[#f25022] w-full h-full"></div>
                <div className="bg-[#7fbb00] w-full h-full"></div>
                <div className="bg-[#00a4ef] w-full h-full"></div>
                <div className="bg-[#ffb900] w-full h-full"></div>
              </div>
              <span className="text-xl font-semibold text-gray-700 hidden sm:block">Innovatech</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:ml-8 lg:flex lg:space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-700 hover:border-b-2 hover:border-black pb-1 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-sm text-gray-700 hover:underline flex items-center gap-1">
                All Innovatech <ChevronDown size={14} />
              </button>
              <Search size={20} className="text-gray-700 cursor-pointer" />
              <ShoppingCart size={20} className="text-gray-700 cursor-pointer" />
              <User size={20} className="text-gray-700 cursor-pointer" />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-black focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-50 border-b border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-4 px-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Search size={20} /> <span>Search</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <ShoppingCart size={20} /> <span>Cart</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <User size={20} /> <span>Sign in</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;