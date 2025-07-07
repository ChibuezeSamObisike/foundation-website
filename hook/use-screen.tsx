'use client';

import { useEffect, useState } from 'react';

export const useResponsive = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    // Initial check
    handleResize();

    // Listen to resize events
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return {
    isSmallScreen,
    isLargeScreen: !isSmallScreen,
  };
};
