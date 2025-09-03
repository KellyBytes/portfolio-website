import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const isScrollingRef = useRef(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    isScrollingRef.current = true; // scrolled by clicking the links, not manual scrolling
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return; // when scrolling by clicking the links

      const sections = ['home', 'services', 'contact'];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(sectionId);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full md:h-12 sm:max-h-14 h-18 flex flex-col md:flex-row justify-center md:justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="flex items-center sm:gap-x-4 gap-x-2">
        <a href="#" className="md:text-2xl sm:text-xl text-lg">
          Eriko Iwashita
        </a>
        <i
          className={`bx bx-${
            darkMode ? 'sun' : 'moon'
          } md:text-3xl sm:text-2xl text-xl text-gray-600 dark:text-gray-200 sm:ml-4 ml-2 cursor-pointer`}
          onClick={toggleDarkMode}
        ></i>
      </div>
      <div>
        <a
          href="#home"
          className={`group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide relative ${
            activeSection === 'home'
              ? 'text-red-500 dark:text-yellow-500'
              : 'text-gray-600 dark:text-white'
          }`}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
          <span
            className={`absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition duration-300 ${
              activeSection === 'home'
                ? 'bg-red-500 dark:bg-yellow-500 scale-x-100'
                : 'bg-gray-600 dark:bg-white scale-x-0'
            }`}
          ></span>
        </a>
        <a
          href="#services"
          className={`group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide relative ${
            activeSection === 'services'
              ? 'text-red-500 dark:text-yellow-500'
              : 'text-gray-600 dark:text-white'
          }`}
          onClick={(e) => handleNavClick(e, 'services')}
        >
          Services
          <span
            className={`absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition duration-300 ${
              activeSection === 'services'
                ? 'bg-red-500 dark:bg-yellow-500 scale-x-100'
                : 'bg-gray-600 dark:bg-white scale-x-0'
            }`}
          ></span>
        </a>
        <a
          href="#contact"
          className={`group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide relative ${
            activeSection === 'contact'
              ? 'text-red-500 dark:text-yellow-500'
              : 'text-gray-600 dark:text-white'
          }`}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
          <span
            className={`absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition duration-300 ${
              activeSection === 'contact'
                ? 'bg-red-500 dark:bg-yellow-500 scale-x-100'
                : 'bg-gray-600 dark:bg-white scale-x-0'
            }`}
          ></span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
