'use client';
import React, { useEffect } from 'react';
import { Sun, MoonStar } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="flex items-center mb-5">
      <label className="relative inline-flex items-center cursor-pointer min-w-16 min-h-9">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="sr-only peer"
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
        />
        <div className="w-16 h-9 bg-warm-gray-soft peer-focus:outline-none peer-focus:ring-0 dark:bg-warm-gray-dark rounded-full peer peer-checked:bg-warm-gray-dark transition-colors"></div>
        <div className="absolute left-1 top-1 w-7 h-7 bg-comp-light dark:bg-accent-teal-light rounded-full shadow-md transition-transform duration-300 transform peer-checked:translate-x-7 flex items-center justify-center">
          {isDarkMode ? (
            <MoonStar className="w-5 h-5 dark:text-txt-primary-dark" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-500" />
          )}
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
