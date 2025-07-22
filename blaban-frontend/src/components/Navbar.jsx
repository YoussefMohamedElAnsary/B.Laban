import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import blabanlogo from '../assets/blabanlogo.png';

function Navbar() {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-row items-center justify-between w-full h-25 p-2.5 bg-coral text-nowrap px-4 md:px-10 relative">
      {/* Logo and Brand */}
      <div className="flex flex-row items-center">
        <Link to="/">
          <img className="w-16 h-14 md:w-24 md:h-20 px-2" src={blabanlogo} alt="Logo" />
        </Link>
        <Link to="/" className="text-white text-lg md:text-2xl font-bold hover:text-gray-200 transition-colors">
          {t('Brand')}
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white text-xl font-bold flex-row items-center text-nowrap">
        <li className='mr-5'><Link to="/" className="hover:text-gray-200 transition-colors">{t('Home')}</Link></li>
        <li className='mr-5'><Link to="/about" className="hover:text-gray-200 transition-colors">{t('About')}</Link></li>
        <li className='mr-5'><Link to="/menu" className="hover:text-gray-200 transition-colors">{t('Our Menu')}</Link></li>
        <li className='mr-5'><Link to="/contact" className="hover:text-gray-200 transition-colors">{t('Contact Us')}</Link></li>
      </ul>

      {/* Language Toggle and Mobile Menu Button */}
      <div className="flex items-center space-x-2">
        <button onClick={toggleLanguage} className="px-2 py-1 text-gray-500 rounded bg-white hover:bg-gray-300 transition-all duration-200 hover:scale-110 text-sm md:text-base">
          {i18n.language === 'en' ? 'العربية' : 'English'}
        </button>
        {/* Auth Button */}
        {isAuthenticated ? (
          <button
            onClick={signOut}
            className="ml-2 px-4 py-2 bg-white text-coral rounded font-semibold hover:bg-gray-200 transition-all text-sm md:text-base"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="ml-2 px-4 py-2 bg-white text-coral rounded font-semibold hover:bg-gray-200 transition-all text-sm md:text-base"
          >
            Sign In
          </Link>
        )}
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-coral shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col text-white text-lg font-bold py-4">
          <li className='px-4 py-3 hover:bg-coral-dark transition-colors'>
            <Link to="/" onClick={closeMenu}>{t('Home')}</Link>
          </li>
          <li className='px-4 py-3 hover:bg-coral-dark transition-colors'>
            <Link to="/about" onClick={closeMenu}>{t('About')}</Link>
          </li>
          <li className='px-4 py-3 hover:bg-coral-dark transition-colors'>
            <Link to="/menu" onClick={closeMenu}>{t('Our Menu')}</Link>
          </li>
          <li className='px-4 py-3 hover:bg-coral-dark transition-colors'>
            <Link to="/contact" onClick={closeMenu}>{t('Contact Us')}</Link>
          </li>
          <li className='px-4 py-3 hover:bg-coral-dark transition-colors'>
            {isAuthenticated ? (
              <button onClick={() => { signOut(); closeMenu(); }} className="w-full text-left">Sign Out</button>
            ) : (
              <Link to="/login" onClick={closeMenu} className="w-full inline-block">Sign In</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
