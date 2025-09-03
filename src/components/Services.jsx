import React, { useState, useEffect } from 'react';
import { skillCards } from '../data/index';
import NavigationCircles from './NavigationCircles';

const Services = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const getPositionClass = (card) => {
    const width = window.innerWidth >= 1024;
    const position = width ? card.hoverPosition.large : card.hoverPosition.small;
    return position === 'bottom' ? 'bottom-0' : 'top-0';
  };

  const getHoverPositionClass = (card) => {
    const width = window.innerWidth >= 1024;
    const position = width ? card.hoverPosition.large : card.hoverPosition.small;
    return position === 'bottom' ? 'bottom-full' : 'top-full';
  };

  useEffect(() => {
    const checkScreen = () => {
      const large = window.innerWidth >= 1024;
      const hoverable = window.matchMedia('(hover: hover)').matches;
      setIsLargeScreen(large && hoverable);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div
      id="services"
      className="min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10"
    >
      <h2 className="text-4xl font-light mb-32 xl:mt-0 mt-12">Skill-set</h2>
      <div className="w-full xl:w-[900px] lg:w-[850px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-32 lg:mb-0 mb-16">
        {skillCards.map((card, index) => {
          const isOpen =
            (isLargeScreen && hoveredCardIndex === index) ||
            (!isLargeScreen && openIndex === index);

          const handleClick = () => {
            if (!isLargeScreen) {
              setOpenIndex(openIndex === index ? null : index);
            }
          };

          return (
            <div
              key={index}
              className={`lg:max-w-[280px] md:max-w-[400px] max-w-[320px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate ${
                isLargeScreen ? '' : 'cursor-pointer'
              }`}
              onMouseEnter={isLargeScreen ? () => setHoveredCardIndex(index) : undefined}
              onMouseLeave={isLargeScreen ? () => setHoveredCardIndex(null) : undefined}
              onClick={handleClick}
            >
              <div className="p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500">
                <i
                  className={`${card.icon} md:text-4xl text-3xl text-gray-900 dark:text-white transition-colors duration-500`}
                ></i>
                <h3 className="md:text-2xl text-xl font-bold my-4 text-red-500 dark:text-yellow-500 transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-gray-900 dark:text-white md:h-28 h-24 md:text-base text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-colors duration-500">
                  {card.description}
                </p>
              </div>
              <div
                className={`w-full absolute left-0 ${getPositionClass(
                  card
                )} flex flex-col gap-y-5 py-4 transition-all duration-300 ${
                  isOpen ? getHoverPositionClass(card) : 'hidden'
                }`}
              >
                {isLargeScreen && card.hoverPosition.large === 'top' && (
                  <div className="flex justify-between">
                    {[...Array(card.projectCount)].map((_, i) => (
                      <a
                        href="#"
                        key={i}
                        className="text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full transition-colors"
                      >
                        {i + 1}
                      </a>
                    ))}
                  </div>
                )}
                <h2 className="text-2xl text-center text-gray-900 dark:text-white font-light tracking-wide">
                  Projects
                </h2>
                {(!isLargeScreen || (isLargeScreen && card.hoverPosition.large === 'bottom')) && (
                  <div className={`${isOpen ? 'flex' : 'hidden'} justify-between`}>
                    {[...Array(card.projectCount)].map((_, i) => (
                      <a
                        href="#"
                        key={i}
                        className="text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full transition-colors"
                      >
                        {i + 1}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <NavigationCircles section="services" />
    </div>
  );
};

export default Services;
