'use client';

import { useState } from 'react';
import Opener from './components/Opener';
import Menu from './components/Menu';
import Moodboard from './components/Moodboard';
import Activities from './components/Activities';
import GeneralInfo from './components/GeneralInfo';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'opener' | 'menu' | 'moodboard' | 'activities' | 'general-info'>('opener');

  const handleYesClick = () => {
    setCurrentPage('menu');
  };

  const handleMoodboardClick = () => {
    setCurrentPage('moodboard');
  };

  const handleActivitiesClick = () => {
    setCurrentPage('activities');
  };

  const handleGeneralInfoClick = () => {
    setCurrentPage('general-info');
  };

  const handleBackToMenu = () => {
    setCurrentPage('menu');
  };

  if (currentPage === 'activities') {
    return <Activities onBackClick={handleBackToMenu} />;
  }

  if (currentPage === 'moodboard') {
    return <Moodboard onBackClick={handleBackToMenu} />;
  }

  if (currentPage === 'general-info') {
    return <GeneralInfo onBackClick={handleBackToMenu} onNDAClick={handleActivitiesClick} onMoodboardClick={handleMoodboardClick} />;
  }

  if (currentPage === 'menu') {
    return <Menu onMoodboardClick={handleMoodboardClick} onActivitiesClick={handleActivitiesClick} onGeneralInfoClick={handleGeneralInfoClick} />;
  }

  return <Opener onYesClick={handleYesClick} />;
}
