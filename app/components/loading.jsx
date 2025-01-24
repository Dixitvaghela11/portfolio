"use client";
import { useState, useEffect } from 'react';

const LoadingPage = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Calculate how many steps we need for smooth counting
    const steps = 50; // Number of steps to reach 100
    const increment = 100 / steps;
    const timePerStep = 3000 / steps; // Total time (3000ms) divided by steps

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= 100) {
        setCount(100);
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Small delay after reaching 100%
      } else {
        setCount(Math.floor(currentCount));
      }
    }, timePerStep);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-[#0d1224] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-64 h-4 bg-[#1a1443] rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300"
            style={{ width: `${count}%` }}
          />
        </div>
        <div className="mt-4 text-4xl font-bold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            {count}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage; 