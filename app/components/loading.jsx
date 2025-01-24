"use client";
import { useState, useEffect } from 'react';

const LoadingPage = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const [elements, setElements] = useState([]);
  const [orbs, setOrbs] = useState([]);

  // Initialize random positions after component mounts (client-side only)
  useEffect(() => {
    // Generate random positions for cubes
    const newElements = Array(5).fill(null).map((_, i) => ({
      id: `cube-${i}`,
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 100)}%`,
      delay: `${i * 0.5}s`
    }));
    setElements(newElements);

    // Generate random positions for orbs
    const newOrbs = Array(3).fill(null).map((_, i) => ({
      id: `orb-${i}`,
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 100)}%`,
      delay: `${i * 0.7}s`,
      isEven: i % 2 === 0
    }));
    setOrbs(newOrbs);
  }, []);

  // Loading progress effect
  useEffect(() => {
    const steps = 50;
    const increment = 100 / steps;
    const timePerStep = 3000 / steps;

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= 100) {
        setCount(100);
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, timePerStep);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-[#0d1224] flex flex-col items-center justify-center z-50 perspective-1000 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 perspective-1000">
        {/* Floating Cubes */}
        {elements.map((element) => (
          <div
            key={element.id}
            className="absolute transform-style-3d animate-float-random"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay
            }}
          >
            <div className="cube">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
          </div>
        ))}
        
        {/* Animated Grid */}
        <div className="absolute inset-0">
          <div className="grid-bg animate-grid-spin"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute inset-0">
          {orbs.map((orb) => (
            <div
              key={orb.id}
              className="absolute w-32 h-32 rounded-full animate-orb-float"
              style={{
                background: `radial-gradient(circle, ${orb.isEven ? 'rgba(124, 58, 237, 0.2)' : 'rgba(236, 72, 153, 0.2)'} 0%, transparent 70%)`,
                left: orb.left,
                top: orb.top,
                animationDelay: orb.delay
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 animate-float">
        {/* 3D Rotating Container */}
        <div className="relative transform-style-3d animate-spin-slow">
          <div className="flex gap-4">
            <div className="loader hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
              <svg viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32"></circle>
              </svg>
            </div>
            
            <div className="loader triangle hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>
            
            <div className="loader hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
              <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
            </div>
          </div>
        </div>

        {/* Glowing Progress Bar */}
        <div className="w-64 h-2 bg-[#1a1443] rounded-full overflow-hidden relative perspective-1000">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 glow-bar transform-style-3d"
            style={{ width: `${count}%`, transform: 'translateZ(20px)' }}
          />
        </div>

        {/* Percentage Counter with Enhanced 3D Effect */}
        <div className="relative transform-style-3d group">
          <div className="text-6xl font-bold transform-style-3d animate-pulse-subtle transition-transform duration-300 group-hover:scale-110">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 relative inline-block transform-style-3d hover:rotate-y-180 transition-transform duration-500">
              {count}%
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-xl -z-10"></div>
            </span>
          </div>
        </div>

        {/* Loading Text with Glitch Effect */}
        <div className="text-gray-400 font-mono animate-pulse relative overflow-hidden glitch-text">
          <span className="glitch-text-main">Loading Experience...</span>
          <span className="glitch-text-r" aria-hidden="true">Loading Experience...</span>
          <span className="glitch-text-b" aria-hidden="true">Loading Experience...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage; 