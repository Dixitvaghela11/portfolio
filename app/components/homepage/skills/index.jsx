"use client";

import { skillsData } from '@/utils/data/skills';
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const containerRef = useRef(null);

  return (
    <div id="skills" className="relative z-50 border-t my-8 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-11/12 sm:w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full animate-gradient" />
        </div>
      </div>

      <div className="flex justify-center my-4 sm:my-5 lg:py-8">
        <div className="flex items-center">
          <span className="hidden sm:block w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-3 sm:px-5 text-lg sm:text-xl rounded-md">
            Skills
          </span>
          <span className="hidden sm:block w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md transition-all duration-300 ${
              activeCategory === category
                ? 'bg-violet-500 text-white'
                : 'bg-[#1a1443] text-gray-300 hover:bg-violet-500/50'
            }`}
          >
            {skillsData[category].title}
          </button>
        ))}
      </div>

      <div className="w-full my-8 sm:my-12">
        <div 
          ref={containerRef}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {skillsData[activeCategory].skills.map((skill, id) => {
              const skillImg = skillsImage(skill);
              if (!skillImg) return null;

              return (
                <div
                  className="w-full min-w-[120px] sm:min-w-[140px] md:min-w-[160px] h-fit 
                             perspective-1000 group"
                  key={`${skill}-${id}`}
                  style={{
                    animationDelay: `${id * 25}ms`
                  }}
                >
                  <div className="relative transform-style-3d transition-transform duration-500 w-full
                                  group-hover:rotate-y-180">
                    <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] 
                                    backface-hidden
                                    shadow-none shadow-gray-50 group-hover:border-violet-500 
                                    transition-all duration-500">
                      <div className="flex -translate-y-[1px] justify-center">
                        <div className="w-3/4">
                          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6">
                        <div className="h-5 sm:h-6 md:h-8 lg:h-10 relative animate-float">
                          <Image
                            src={skillImg}
                            alt={skill}
                            width={40}
                            height={40}
                            className="h-full w-auto rounded-lg transition-all duration-300
                                     group-hover:scale-110"
                          />
                        </div>
                        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg 
                                    group-hover:text-violet-400 transition-colors duration-300">{skill}</p>
                      </div>
                    </div>
                    
                    {/* Back side of card */}
                    <div className="absolute inset-0 h-full w-full rounded-lg border border-violet-500 
                                    bg-[#11152c] backface-hidden rotate-y-180
                                    flex items-center justify-center p-4">
                      <p className="text-violet-400 text-center text-sm">
                        {skill}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;