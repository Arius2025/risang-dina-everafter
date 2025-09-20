import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface LoadingPageProps {
  onComplete: () => void;
}

const LoadingPage = ({ onComplete }: LoadingPageProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-hero flex flex-col items-center justify-center">
      {/* Animated Rings */}
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-golden rounded-full animate-rings-unite"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-strong-pink rounded-full animate-rings-unite-second"></div>
        </div>
        <Heart className="w-8 h-8 text-strong-pink animate-heart-pulse mx-auto" />
      </div>

      {/* Romantic Text */}
      <div className="text-center mb-8 px-4 animate-fade-in-up">
        <h1 className="font-sacramento text-4xl md:text-6xl text-strong-pink mb-4 drop-shadow-md">
          Risang & Dina
        </h1>
        <p className="text-strong-pink text-lg max-w-lg leading-relaxed drop-shadow-md">
          Kami mengundang Anda untuk berbagi kebahagiaan di hari istimewa kami
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-ivory rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-strong-pink to-golden transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Sparkle Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-golden rounded-full animate-sparkle opacity-70"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-strong-pink rounded-full animate-sparkle delay-1000 opacity-70"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-golden rounded-full animate-sparkle delay-2000 opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-strong-pink rounded-full animate-sparkle delay-500 opacity-70"></div>
    </div>
  );
};

export default LoadingPage;