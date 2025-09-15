'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface MoodboardProps {
  onBackClick: () => void;
}

// Function to get all images from a folder
const getImagesFromFolder = async (folder: string): Promise<string[]> => {
  try {
    const response = await fetch(`/api/images/${folder}`);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data.images || [];
  } catch (error) {
    console.error(`Error fetching images from ${folder}:`, error);
    // Fallback to empty array if API fails
    return [];
  }
};

export default function Moodboard({ onBackClick }: MoodboardProps) {
  const [activeTab, setActiveTab] = useState<'desert' | 'casablanca'>('desert');
  const [desertImages, setDesertImages] = useState<string[]>([]);
  const [casablancaImages, setCasablancaImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Load images when component mounts
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const [desert, casablanca] = await Promise.all([
          getImagesFromFolder('desert'),
          getImagesFromFolder('casablanca')
        ]);
        setDesertImages(desert);
        setCasablancaImages(casablanca);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const currentImages = activeTab === 'desert' ? desertImages : casablancaImages;
  const basePath = activeTab === 'desert' ? '/moodboard/desert/' : '/moodboard/casablanca/';

  if (loading) {
    return (
      <div className="relative w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F0EDE5' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold"
          style={{ color: '#312F2C' }}
        >
          Loading moodboards...
        </motion.div>
      </div>
    );
  }

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

      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-center pt-8 pb-8"
        style={{ color: '#312F2C' }}
      >
        Rock the casbah
      </motion.h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 sticky top-0 z-40 py-4" style={{ backgroundColor: '#F0EDE5' }}>
        <div className="flex space-x-8">
          <motion.button
            onClick={() => setActiveTab('desert')}
            className={`text-2xl md:text-3xl font-bold px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === 'desert' ? 'shadow-lg' : 'hover:scale-105'
            }`}
            style={{ 
              color: activeTab === 'desert' ? '#F0EDE5' : '#312F2C',
              backgroundColor: activeTab === 'desert' ? '#312F2C' : 'transparent'
            }}
            whileHover={{ scale: activeTab === 'desert' ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Desert Night
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab('casablanca')}
            className={`text-2xl md:text-3xl font-bold px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === 'casablanca' ? 'shadow-lg' : 'hover:scale-105'
            }`}
            style={{ 
              color: activeTab === 'casablanca' ? '#F0EDE5' : '#312F2C',
              backgroundColor: activeTab === 'casablanca' ? '#3A3A3A' : 'transparent'
            }}
            whileHover={{ scale: activeTab === 'casablanca' ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Casablanca Chic
          </motion.button>
        </div>
      </div>

      {/* Pinterest-style Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={`${activeTab}-${image}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              className="break-inside-avoid mb-4 sm:mb-6 group cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={`${basePath}${image}`}
                  alt={`${activeTab} moodboard image ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 480px) 50vw, (max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 16vw, 14vw"
                  priority={index < 6}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer spacing */}
      <div className="h-16"></div>
    </div>
  );
} 