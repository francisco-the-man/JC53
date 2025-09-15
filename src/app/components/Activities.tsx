'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ActivitiesProps {
  onBackClick: () => void;
}

export default function Activities({ onBackClick }: ActivitiesProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#F0EDE5' }}>
      
      {/* Back Button */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onClick={onBackClick}
        className="absolute top-8 left-8 z-30 flex items-center space-x-2 text-2xl font-bold hover:scale-105 transition-transform duration-200 touch-manipulation"
        style={{ 
          color: '#312F2C',
          minHeight: '44px',
          minWidth: '44px',
          padding: '8px'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#312F2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>back</span>
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pb-80">
        
        {/* Activities Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4" style={{ color: '#312F2C' }}>
            Please sign our NDA
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium" style={{ color: '#FF4400' }}>
            yes, it&apos;s mandatory
          </p>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center relative z-20"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: '#312F2C' }}>
            Sign{' '}
            <motion.a
              href="https://docs.google.com/forms/d/1yPpmiEQarF2VXDYT5ERVgjOZQvaMS2vvsnE9pKBIbPk/viewform?ts=68c04ab7&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline transition-all duration-200 inline-block touch-manipulation"
              style={{ color: '#312F2C', minHeight: '44px', minWidth: '44px', padding: '8px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              here
            </motion.a>
          </p>
        </motion.div>
      </div>

      {/* Bottom Desert Image */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-80">
        <Image
          src="/footer.png"
          alt="Desert landscape"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
    </div>
  );
} 