import { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Effect untuk menginisialisasi audio
  useEffect(() => {
    const audioElement = new Audio('/src/components/music/beautiful-in-white.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.3;
    setAudio(audioElement);

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.removeAttribute('src'); 
        audioElement.load();
      }
    };
  }, []);

  // Effect untuk mendengarkan interaksi pengguna (scroll) dan memutar musik
  useEffect(() => {
    const handleScroll = () => {
      if (audio && !isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error("Autoplay was prevented:", error);
        });
        // Hapus event listener setelah interaksi pertama
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Pastikan listener dihapus saat komponen tidak lagi digunakan
      window.removeEventListener('scroll', handleScroll);
    };
  }, [audio, isPlaying]);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLihatUndanganClick = () => {
    // Mulai memutar musik saat tombol diklik
    if (audio && !isPlaying) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
    // Lanjutkan ke aksi scroll yang sudah ada
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-hero relative overflow-hidden px-4">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-soft-pink/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-golden/10 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-pale-pink/10 rounded-full animate-float delay-2000"></div>
      </div>

      {/* Music Control */}
      <button
        className="absolute top-6 right-6 p-2 rounded-full bg-card/80 border border-soft-pink/30 hover:bg-soft-pink/20 transition-all z-20"
        onClick={toggleMusic}
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-strong-pink" />
        ) : (
          <VolumeX className="w-4 h-4 text-strong-pink" />
        )}
      </button>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Wedding Date */}
        <div className="mb-8 animate-fade-in-up">
          <p className="text-strong-pink text-lg md:text-xl font-medium mb-2">
            Minggu, 12 Oktober 2025
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-strong-pink to-golden mx-auto"></div>
        </div>

        {/* Couple Names */}
        <div className="mb-8 animate-fade-in-scale">
          <h1 className="font-sacramento text-6xl md:text-8xl lg:text-9xl text-strong-pink mb-4 drop-shadow-md">
            Risang
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-golden"></div>
            <Heart className="w-6 h-6 text-strong-pink mx-4 animate-heart-pulse" />
            <div className="w-12 h-0.5 bg-golden"></div>
          </div>
          <h1 className="font-sacramento text-6xl md:text-8xl lg:text-9xl text-strong-pink drop-shadow-md">
            Dina
          </h1>
        </div>

        {/* Invitation Text */}
        <div className="animate-fade-in-up delay-500">
          <h2 className="font-sacramento text-4xl md:text-5xl text-strong-pink mb-6 drop-shadow-md">
            Terima kasih, Ya Allah
          </h2>
          <p className="text-strong-pink text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-8">
            Semoga pernikahan kami dipenuhi dengan cinta, tawa, dan berkat yang tak terhingga.
            Jadikanlah kami sepasang kekasih yang selalu saling mengasihi,
            hingga maut memisahkan kami.
          </p>
          
          <button 
            className="bg-gradient-to-r from-strong-pink to-golden hover:from-strong-pink/80 hover:to-golden/80 text-white px-8 py-4 text-lg font-medium rounded-full shadow-romantic transition-all"
            onClick={handleLihatUndanganClick}
          >
            Lihat Undangan
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-strong-pink rounded-full flex justify-center">
          <div className="w-1 h-3 bg-strong-pink rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
