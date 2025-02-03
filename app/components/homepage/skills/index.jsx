"use client";

import { skillsData } from '@/utils/data/skills';
import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
        {Object.values(skillsData).map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 0.1 : 0 }}
            transition={{ delay: i * 0.2 }}
            className={`absolute w-64 h-64 rounded-full blur-3xl bg-gradient-to-r ${category.color} opacity-10`}
            style={{
              left: `${(i * 30) % 100}%`,
              top: `${(i * 20) % 80}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(skillsData).map(([key, category], i) => (
            <motion.button
              key={key}
              custom={i}
              variants={categoryVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`
                px-6 py-3 rounded-full text-sm font-medium
                flex items-center gap-2 transition-all duration-300
                ${activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                }
              `}
            >
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skillsData[activeCategory].skills.map((skill, index) => {
              const skillImg = skillsImage(skill);
              if (!skillImg) return null;

              return (
                <motion.div
                  key={skill}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="group relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm
                           border border-gray-700/50 hover:border-violet-500/50
                           transition-all duration-300"
                >
                  <div className="relative flex flex-col items-center gap-4">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-16 h-16"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <Image
                        src={skillImg}
                        alt={skill}
                        width={64}
                        height={64}
                        className="relative object-contain transition-all duration-300 group-hover:scale-110"
                      />
                    </motion.div>

                    <h3 className="text-white font-medium text-center">
                      {skill}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skills;