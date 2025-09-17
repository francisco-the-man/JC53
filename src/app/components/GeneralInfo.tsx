'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GeneralInfoProps {
  onBackClick: () => void;
  onNDAClick: () => void;
  onMoodboardClick: () => void;
}

export default function GeneralInfo({ onBackClick, onNDAClick, onMoodboardClick }: GeneralInfoProps) {
  const [showVenmoLinks, setShowVenmoLinks] = useState(false);

  const handleVenmoClick = () => {
    setShowVenmoLinks(!showVenmoLinks);
  };

  return (
    <div className="relative w-full min-h-screen overflow-auto" style={{ backgroundColor: '#F0EDE5' }}>
      
      {/* Back Button */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onClick={onBackClick}
        className="fixed top-8 left-8 z-50 flex items-center space-x-2 text-2xl font-bold hover:scale-105 transition-transform duration-200 touch-manipulation"
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
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-16">
        
        {/* Title */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12"
          style={{ color: '#312F2C' }}
        >
          General Info
        </motion.h1>

        {/* Introduction */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: '#312F2C' }}>
            Very excited about this one and hoping you can join us. Some additional details on everyone&apos;s favorite topic (
            <span className="underline font-medium">schedule</span> and{' '}
            <span className="underline font-medium">logistics</span>) here:
          </p>
        </motion.div>

        {/* Logistics Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#312F2C' }}>
            Logistics
          </h2>
          <ul className="space-y-4 text-lg md:text-xl" style={{ color: '#312F2C' }}>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-full" style={{ backgroundColor: '#312F2C' }}></span>
              <span className="flex-1">
                We have booked a hotel 15 minutes outside of Marrakech for everyone, so no need to book your own accommodation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-full" style={{ backgroundColor: '#312F2C' }}></span>
              <span className="flex-1 relative">
                We will be collecting $400{' '}
                <div className="relative inline-block">
                  <motion.span 
                    className="underline font-medium cursor-pointer hover:opacity-70 transition-opacity duration-200 touch-manipulation"
                    onClick={handleVenmoClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ minHeight: '44px', minWidth: '44px', padding: '4px' }}
                  >
                    Venmos
                  </motion.span>
                  {showVenmoLinks && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border-2 p-3 z-50 min-w-[200px]"
                      style={{ borderColor: '#312F2C' }}
                    >
                      <div className="flex flex-col space-y-2">
                        <a
                          href="https://venmo.com/u/clarissabronfman"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-base font-medium"
                          onClick={() => setShowVenmoLinks(false)}
                        >
                          @clarissabronfman
                        </a>
                        <a
                          href="https://venmo.com/u/jlouis97"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline text-base font-medium"
                          onClick={() => setShowVenmoLinks(false)}
                        >
                          @jlouis97
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
                {' '}for partial compensation / accommodation for the weekend
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-full" style={{ backgroundColor: '#312F2C' }}></span>
              <span className="flex-1">
                Please fill out mandatory{' '}
                <motion.span 
                  className="underline font-medium cursor-pointer hover:opacity-70 transition-opacity duration-200 touch-manipulation"
                  onClick={onNDAClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ minHeight: '44px', minWidth: '44px', padding: '4px' }}
                >
                  NDA ASAP
                </motion.span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-full" style={{ backgroundColor: '#312F2C' }}></span>
              <span className="flex-1">
                There will be two themed nights (one at the hotel and one in the desert), please refer to{' '}
                <motion.span 
                  className="underline font-medium cursor-pointer hover:opacity-70 transition-opacity duration-200 touch-manipulation"
                  onClick={onMoodboardClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ minHeight: '44px', minWidth: '44px', padding: '4px' }}
                >
                  mood boards
                </motion.span>
                {' '}for more details and expecting some serious fits
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Schedule Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#312F2C' }}>
            Schedule
          </h2>

          {/* Thursday */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#E5E0D8' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#312F2C' }}>
              Thursday
            </h3>
            <div className="space-y-2 text-lg md:text-xl" style={{ color: '#312F2C' }}>
              <p><span className="font-medium">Arrival 12-6pm</span></p>
              <p><span className="font-medium">8:30</span> Drinks</p>
              <p><span className="font-medium">9:30</span> Departure for dinner</p>
            </div>
          </div>

          {/* Friday */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#E5E0D8' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#312F2C' }}>
              Friday
            </h3>
            <div className="space-y-2 text-lg md:text-xl" style={{ color: '#312F2C' }}>
              <p><span className="font-medium">9-11am</span> rolling breakfast</p>
              <p><span className="font-medium">1:30pm</span> Lunch by the pool</p>
              <p><span className="font-medium">Activities</span></p>
              <p><span className="font-medium">8:30pm</span> Drinks at Hotel Sky Bar</p>
              <p><span className="font-medium">9:45pm</span> &quot;Casablanca Chic&quot; Dinner at Hotel Pool</p>
            </div>
          </div>

          {/* Saturday */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#E5E0D8' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#312F2C' }}>
              Saturday
            </h3>
            <div className="space-y-2 text-lg md:text-xl" style={{ color: '#312F2C' }}>
              <p><span className="font-medium">9-11am</span> rolling breakfast</p>
              <p><span className="font-medium">Activities</span></p>
              <p><span className="font-medium">1:30pm</span> Lunch by the pool</p>
              <p><span className="font-medium">6pm</span> Departure for Agafay Desert</p>
              <p><span className="font-medium">7:15</span> Dune in the Desert</p>
            </div>
          </div>

          {/* Sunday */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#E5E0D8' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#312F2C' }}>
              Sunday
            </h3>
            <div className="space-y-2 text-lg md:text-xl" style={{ color: '#312F2C' }}>
              <p><span className="font-medium">9-11am</span> rolling breakfast</p>
              <p><span className="font-medium">Departures</span></p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
} 