'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuProps {
  onMoodboardClick: () => void;
  onActivitiesClick: () => void;
  onGeneralInfoClick: () => void;
}

export default function Menu({ onMoodboardClick, onActivitiesClick, onGeneralInfoClick }: MenuProps) {
  const handleMenuClick = (item: string) => {
    if (item === 'General info') {
      onGeneralInfoClick();
    } else if (item === 'Moodboards') {
      onMoodboardClick();
    } else if (item === 'Activity sign up') {
      onActivitiesClick();
    } else if (item === 'NDA') {
      onActivitiesClick();
    }
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: '#FF4400', minHeight: '100vh' }}>
      {/* Desert background elements */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-amber-200 via-amber-100 to-transparent"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-8 md:pt-12 h-screen px-8">
        
        {/* Title */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap"
          style={{ color: '#F0EDE5' }}
        >
          Rock the Casbah
        </motion.h1>

        {/* Menu items */}
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center space-y-2 "
        >
          {['General info', 'Moodboards', 'NDA'].map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer hover:scale-105 transition-transform duration-100"
              style={{ 
                color: '#F0EDE5'
              }}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>

      </div>


      {/* Bottom casbah image scaling with screen width */}
      <div className="absolute bottom-0 left-0 w-full" style={{ height: 'auto' }}>
        {/* Mobile/Narrow screen image */}
        <Image
          src="/casbah_menu.png"
          alt="Casbah"
          width={1920}
          height={400}
          className="w-full h-auto object-bottom md:hidden"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'bottom'
          }}
          priority
        />
        {/* Wide screen image */}
        <Image
          src="/footer_wide.png"
          alt="Casbah wide"
          width={2400}
          height={600}
          className="hidden md:block w-full h-auto object-bottom"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'bottom'
          }}
          priority
        />
      </div>
    </div>
  );
} 