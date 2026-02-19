import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Monitor, Phone, Mail, Facebook, 
  Twitter, Instagram, Linkedin, Search, 
  ChevronDown, ArrowRight 
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { 
      name: 'Services', 
      to: '/services', 
      dropdown: [
        { name: 'Installation', to: '/services/installation' },
        { name: 'AMC Support', to: '/services/amc-support' },
        { name: 'Training', to: '/services/training' },
        { name: 'Cloud Software', to: '/services/cloud-software' }
      ] 
    },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 transition-all duration-300">
      
      {/* 1. TOP BAR */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-blue-900 text-white text-[11px] py-2 overflow-hidden border-b border-blue-800/50 hidden md:block"
          >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-bold tracking-wider uppercase">
              <div className="flex items-center gap-6">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-300 transition">
                  <Phone size={12} className="text-blue-400" /> +91 98765 43210
                </a>
                <a href="mailto:info@digitalboardwala.com" className="flex items-center gap-2 hover:text-blue-300 transition lowercase font-medium italic">
                  <Mail size={12} className="text-blue-400" /> info@digitalboardwala.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-400">Regional Support: Agra • NCR • Lucknow</span>
                <div className="flex gap-3 border-l border-blue-800 ml-4 pl-4">
                  <Facebook size={12} className="cursor-pointer hover:text-blue-400" />
                  <Twitter size={12} className="cursor-pointer hover:text-blue-400" />
                  <Instagram size={12} className="cursor-pointer hover:text-blue-400" />
                  <Linkedin size={12} className="cursor-pointer hover:text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN NAVBAR */}
      <nav 
        className={`transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' 
            : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                <Monitor size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 leading-none tracking-tighter">
                  DigitalBoard<span className="text-blue-600">Wala</span>
                </span>
                <span className="text-[9px] text-slate-400 font-black tracking-[0.2em] uppercase">
                  Agra's Tech Hub
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative px-2 py-2"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink 
                    to={link.to} 
                    className={({isActive}) => `px-2 py-1 text-sm font-bold transition flex items-center gap-1.5 ${
                      isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  </NavLink>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-slate-100 overflow-hidden py-3 mt-2"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link 
                            key={subItem.to} 
                            to={subItem.to} 
                            className="block px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:block p-2 text-slate-400 hover:text-blue-600 transition">
                <Search size={20} />
              </button>
              <Link 
                to="/quote" 
                className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-black shadow-xl hover:bg-blue-600 transition flex items-center gap-2 active:scale-95"
              >
                Get Quote <ArrowRight size={16} />
              </Link>
              
              <button 
                onClick={() => setMobileMenuOpen(true)} 
                className="lg:hidden p-2 text-slate-900 bg-slate-100 rounded-lg active:scale-90 transition-transform"
              >
                <Menu size={24} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] h-screen flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b">
              <div className="flex items-center gap-2">
                <Monitor size={20} className="text-blue-600" />
                <span className="font-black text-slate-900 uppercase tracking-tighter">Menu</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-100 rounded-full text-slate-900">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-50 last:border-0 pb-2">
                  {link.dropdown ? (
                    <>
                      <button 
                        onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                        className="flex w-full justify-between items-center text-xl font-black text-slate-800 py-4"
                      >
                        {link.name}
                        <ChevronDown size={20} className={`transition-transform ${mobileSubMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {mobileSubMenuOpen && (
                        <div className="pl-4 space-y-4 mb-4">
                          {link.dropdown.map(subItem => (
                            <Link 
                              key={subItem.to} 
                              to={subItem.to} 
                              className="block text-slate-500 font-bold text-base"
                            >
                              • {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink 
                      to={link.to} 
                      className="flex justify-between items-center text-xl font-black text-slate-800 py-4"
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            <div className="p-8 bg-blue-600 text-white rounded-t-[3rem]">
              <h4 className="font-black text-lg mb-4">Ready to upgrade?</h4>
              <div className="space-y-3 opacity-90 font-bold text-sm">
                <div className="flex items-center gap-3"><Phone size={16}/> +91 98765 43210</div>
                <div className="flex items-center gap-3"><Mail size={16}/> sales@digitalboardwala.com</div>
              </div>
              <Link to="/contact" className="mt-8 block text-center bg-white text-blue-600 py-4 rounded-2xl font-black shadow-2xl">
                Book Free Site Survey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;