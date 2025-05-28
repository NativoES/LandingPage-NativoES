"use client"
import React, { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { Globe2, Menu, X } from 'lucide-react';

import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0)

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
      setScrollY(window.scrollY)

    } else {
      setShow(true);
      setScrollY(window.scrollY)
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, show,]);
  return (
    <nav className={`fixed top-0 z-50 bg-gray-900/95  w-full transition-all backdrop-blur-sm  ${show ? 'top-0' : 'top-[-100px]'} `}>

      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe2 className="h-8 w-8 text-[#ffb06f] " />
          <span className="text-xl font-bold text-white">NATIVOES</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {['about', 'teachers', 'services', 'pricing', 'reviews', 'contacts'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-300 hover:text-[#ffb06f] transition-colors"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white rounded-[3px] px-2 py-1 border border-gray-700"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="ru">Русский</option>
          </select>

          <button className="hidden md:inline-block bg-[#ffb06f] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
            {t('nav.startFree')}
          </button>
        </div>
      </div>
    </nav>
  );
}