"use client";

import { skillsData } from '@/utils/data/skills';
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Skills() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle infinite scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleInfiniteScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const scrollEnd = scrollWidth / 3;

      if (scrollLeft >= scrollEnd) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = 0;
        container.style.scrollBehavior = 'smooth';
      }
    };

    container.addEventListener('scroll', handleInfiniteScroll);
    return () => container.removeEventListener('scroll', handleInfiniteScroll);
  }, []);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    
    const skillWidth = isMobile ? 128 : 144;
    const marginWidth = isMobile ? 16 : 20;
    const itemsToScroll = isMobile ? 3 : 6;
    const totalItemWidth = (skillWidth + marginWidth * 2) * itemsToScroll;
    
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    let newScroll;
    if (direction === 'left') {
      newScroll = Math.max(0, currentScroll - totalItemWidth);
    } else {
      newScroll = Math.min(maxScroll, currentScroll + totalItemWidth);
    }
    
    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  };

  const tripleSkills = [...skillsData, ...skillsData, ...skillsData];

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full animate-gradient" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12 relative">
        {/* Left Arrow */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a1443] text-white p-1.5 md:p-2 px-2 md:px-4 rounded-md hover:bg-violet-500 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
        >
          <FaChevronLeft className="text-sm md:text-lg" />
        </button>

        <div 
          ref={containerRef}
          className="overflow-x-auto overflow-y-hidden mx-8 md:mx-12 scroll-smooth
                     scrollbar scrollbar-track-[#1a1443] scrollbar-thumb-violet-500 
                     hover:scrollbar-thumb-violet-400 scrollbar-thumb-rounded-full
                     transition-colors duration-200 pb-4"
          style={{
            scrollbarWidth: 'auto',
            scrollbarColor: '#8B5CF6 #1a1443',
            '--scrollbar-thumb-height': '8px',
            '--scrollbar-track-height': '8px'
          }}
        >
          <div className="flex gap-4 md:gap-6 animate-slide-fastest">
            {tripleSkills.map((skill, id) => {
              const skillImg = skillsImage(skill);
              if (!skillImg) return null;

              return (
                <div
                  className="w-32 md:w-36 min-w-fit h-fit flex flex-col items-center justify-center 
                           transition-all duration-200 m-2 md:m-3 rounded-lg group relative 
                           hover:scale-[1.15] cursor-pointer flex-shrink-0 animate-fadeIn"
                  key={`${skill}-${id}`}
                  style={{
                    scrollSnapAlign: 'start',
                    animationDelay: `${id * 25}ms`
                  }}
                >
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] 
                                shadow-none shadow-gray-50 group-hover:border-violet-500 
                                transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/20">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-6">
                      <div className="h-6 sm:h-8 md:h-10 relative group-hover:animate-float">
                        <Image
                          src={skillImg}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg transition-all duration-300
                                   group-hover:rotate-12 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-violet-500/20 rounded-lg opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-300 
                                      animate-pulse"></div>
                      </div>
                      <p className="text-white text-xs md:text-sm lg:text-lg 
                                  group-hover:text-violet-400 transition-colors duration-300">{skill}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a1443] text-white p-1.5 md:p-2 px-2 md:px-4 rounded-md hover:bg-violet-500 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
        >
          <FaChevronRight className="text-sm md:text-lg" />
        </button>
      </div>
    </div>
  );
}

export default Skills;