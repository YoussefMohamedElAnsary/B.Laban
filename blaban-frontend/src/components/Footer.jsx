import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import blabanlogo from '../assets/blabanlogo.png';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-coral text-white pt-10 pb-6 px-4 md:px-16 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 w-full">
        {/* Logo and Brand */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <img src={blabanlogo} alt="B.Laban Logo" className="w-20 h-20 mb-2" />
          <div className="text-2xl font-bold">B.Laban</div>
          <p className="text-sm opacity-80 max-w-xs mt-2">{t('Discover our delicious selection of dairy products, desserts, and traditional favorites')}</p>
        </div>
        {/* Navigation Links */}
        <div className="flex-1 flex flex-col gap-2 items-center md:items-start mb-8 md:mb-0">
          <div className="font-semibold mb-2">{t('Quick Links')}</div>
          <Link to="/" className="hover:underline transition-all duration-200 transform hover:scale-110 hover:text-blue-200">{t('Home')}</Link>
          <Link to="/about" className="hover:underline transition-all duration-200 transform hover:scale-110 hover:text-blue-200">{t('About')}</Link>
          <Link to="/menu" className="hover:underline transition-all duration-200 transform hover:scale-110 hover:text-blue-200">{t('Menu')}</Link>
          <Link to="/contact" className="hover:underline transition-all duration-200 transform hover:scale-110 hover:text-blue-200">{t('Contact')}</Link>
        </div>
        {/* Contact Info & Social */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-2">
          <div className="font-semibold mb-2">{t('Contact')}</div>
          <div className="text-sm">info@blaban.com</div>
          <div className="text-sm mb-3">+1 (555) 123-4567</div>
          <div className="flex gap-3 mt-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-blue-100 transition">
              <FontAwesomeIcon icon={faFacebookF} className="text-lg" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-blue-100 transition">
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-blue-100 transition">
              <FontAwesomeIcon icon={faTwitter} className="text-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-xs opacity-80">
        &copy; {new Date().getFullYear()} B.Laban. {t('All rights reserved.')}
      </div>
    </footer>
  );
} 