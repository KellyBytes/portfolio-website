import React from 'react';

const NavigationCircles = ({ section }) => {
  return (
    <div className="h-[300px] w-[1px] bg-red-500 dark:bg-yellow-500 absolute right-12 hidden lg:flex flex-col justify-between items-center transition-colors duration-500">
      <a
        href="#home"
        className={`w-5 aspect-square border border-red-500 dark:border-yellow-500 rounded-full ${
          section === 'home' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-300'
        } transition-colors duration-500 relative group`}
      >
        <span className="absolute right-6 top-0 mt-1 transform -translate-y-1/3 hidden group-hover:block bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 text-sm px-2 py-1 rounded">
          Home
        </span>
      </a>
      <a
        href="#services"
        className={`w-5 aspect-square border border-red-500 dark:border-yellow-500 rounded-full ${
          section === 'services' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-300'
        } transition-colors duration-500 relative group`}
      >
        <span className="absolute right-6 top-0 mt-1 transform -translate-y-1/3 hidden group-hover:block bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 text-sm px-2 py-1 rounded">
          Services
        </span>
      </a>
      <a
        href="#contact"
        className={`w-5 aspect-square border border-red-500 dark:border-yellow-500 rounded-full ${
          section === 'contact' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-300'
        } transition-colors duration-500 relative group`}
      >
        <span className="absolute right-6 top-0 mt-1 transform -translate-y-1/3 hidden group-hover:block bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 text-sm px-2 py-1 rounded">
          Contact
        </span>
      </a>
    </div>
  );
};

export default NavigationCircles;
