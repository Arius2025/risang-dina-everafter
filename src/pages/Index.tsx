import { useState } from 'react';
import LoadingPage from '@/components/LoadingPage';
import CursorTrail from '@/components/CursorTrail';
import HeroSection from '@/components/HeroSection';
import Countdown from '@/components/Countdown';
import EventDetails from '@/components/EventDetails';
import GiftRegistry from '@/components/GiftRegistry';
import ClosingSection from '@/components/ClosingSection';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingPage onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <CursorTrail />
      <HeroSection />
      <Countdown />
      <EventDetails />
      <GiftRegistry />
      <ClosingSection />
    </div>
  );
};

export default Index;
