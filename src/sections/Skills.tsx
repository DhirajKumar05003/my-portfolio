"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
  { name: 'React.js', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
  { name: 'MongoDB', color: 'from-green-400 to-teal-500' },
  { name: 'MySQL', color: 'from-blue-400 to-indigo-500' },
  { name: 'Python', color: 'from-blue-400 to-purple-500' },
  { name: 'HTML5/CSS', color: 'from-orange-400 to-red-500' },
  { name: 'Express.js', color: 'from-gray-400 to-gray-600' },
  { name: 'C++', color: 'from-blue-400 to-indigo-500' },
  { name: 'jQuery', color: 'from-blue-400 to-cyan-500' },
];

export const SkillsSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Pause on hover handlers
  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => controls.start({ x: [0, '-50%'], transition: { repeat: Infinity, repeatType: 'loop', duration: 60, ease: 'linear' } });

  // Start animation on mount
  React.useEffect(() => {
    controls.start({ x: [0, '-50%'], transition: { repeat: Infinity, repeatType: 'loop', duration: 60, ease: 'linear' } });
  }, [controls]);

  return (
    <section id="skills" className="py-20 text-white flex flex-col md:flex-row items-center justify-center min-h-[60vh] relative overflow-x-hidden w-full">
      {/* Soft gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900/80" />
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center md:items-center md:justify-center gap-8 h-full min-h-[200px]">
        <div className="flex-1 flex flex-col items-center justify-center h-full min-h-[200px]">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">Skills & Technologies</motion.h2>
          <div className="relative w-full overflow-x-hidden flex items-center justify-center md:justify-start">
            <motion.div
              ref={marqueeRef}
              className="flex gap-4 sm:gap-8 md:gap-12 w-max items-center"
              animate={controls}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ willChange: 'transform' }}
            >
              {[...skills, ...skills].map((skill, i) => (
                <motion.div
                  key={i}
                  className={`min-w-[140px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[260px] xl:min-w-[320px] p-4 sm:p-6 md:p-10 rounded-2xl shadow-2xl text-base sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-br ${skill.color} border-4 border-white/10 hover:border-blue-400 transition-all duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center backdrop-blur relative group`}
                  tabIndex={0}
                  whileHover={{ scale: 1.08, boxShadow: '0 0 40px 8px rgba(0,255,255,0.25)' }}
                  animate={{
                    scale: [1, 1.04, 1],
                    boxShadow: [
                      '0 4px 32px 0 rgba(0,0,0,0.18)',
                      '0 8px 48px 8px rgba(0,255,255,0.18)',
                      '0 4px 32px 0 rgba(0,0,0,0.18)'
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: i * 0.2 }}
                >
                  <span className="drop-shadow-lg group-hover:text-blue-100 transition-colors duration-300">{skill.name}</span>
                  <span className="absolute -inset-1 rounded-2xl pointer-events-none group-hover:shadow-[0_0_40px_8px_rgba(0,255,255,0.18)]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center h-full min-h-[200px]">
          <Image src="/skill.png" alt="Skills" width={160} height={160} className="rounded-lg shadow-lg sm:w-[160px] sm:h-[160px] w-[160px] h-[160px]" />
        </div>
      </div>
    </section>
  );
}; 