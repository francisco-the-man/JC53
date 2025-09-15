'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OpenerProps {
  onYesClick: () => void;
}

export default function Opener({ onYesClick }: OpenerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    onYesClick();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#FF4400' }}>
      {/* Full Width Casbah Container */}
      <div className="relative w-full h-screen z-0">

        {/* Scrolling Text Animation - Behind image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
          <div className="relative w-screen h-screen">
            {/* Multiple instances of the text for continuous scroll */}
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute whitespace-nowrap text-5xl md:text-6xl lg:text-7xl font-bold opacity-100 text-center w-full"
                style={{ color: '#F0EDE5' }}
                animate={{
                  y: ['-15vh', '115vh'],
                }}
                transition={{
                  duration: 16,
                  delay: index * 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                initial={{
                  y: `${-15 + (index * 15)}vh`,
                }}
              >
                Rock the Casbah!
              </motion.div>
            ))}
          </div>
        </div>

        {/* Responsive Casbah Image - Clickable */}
        <motion.div 
          className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center p-4 sm:p-8 md:p-0"
          onClick={handleClick}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[80vh] md:max-w-none md:max-h-none md:w-full md:h-full">
            <Image
              src="/opener/casbah_full.png"
              alt="Casbah scene"
              fill
              className="object-contain md:object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Swipe Up / Click Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          {isMobile ? (
            /* Mobile: Swipe Up Indicator */
            <motion.div
              className="flex flex-col items-center text-white"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="mb-2"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <p className="text-lg font-medium" style={{ fontFamily: 'Athelas, serif' }}>
                swipe
              </p>
            </motion.div>
          ) : (
            /* Desktop: Click Arrow Indicator */
            <motion.div
              className="flex flex-col items-center text-white cursor-pointer"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="mb-2"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <p className="text-lg font-medium" style={{ fontFamily: 'Athelas, serif' }}>
                click
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
} 