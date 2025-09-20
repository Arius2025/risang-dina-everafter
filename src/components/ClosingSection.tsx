import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ClosingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-hero relative">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          {/* Thank You Message */}
          <Heart className="w-16 h-16 text-strong-pink mx-auto mb-8 animate-heart-pulse" />
          
          <h2 className="font-sacramento text-5xl md:text-6xl text-strong-pink mb-8">
            Terima Kasih
          </h2>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            Terima kasih telah meluangkan waktu untuk melihat undangan pernikahan kami. 
            Kehadiran dan doa restu Anda sangat berarti bagi kami dalam memulai perjalanan 
            hidup baru sebagai suami istri.
          </p>

          <div className="bg-card/80 backdrop-blur-sm border border-soft-pink/30 rounded-2xl p-8 md:p-12 shadow-romantic mb-12">
            <h3 className="font-dancing text-3xl md:text-4xl text-strong-pink mb-6 font-bold">
              Kami Menunggu Kehadiran Anda
            </h3>
            
            <p className="text-muted-foreground text-lg mb-6">
              Semoga Allah SWT mempertemukan kita dalam kebahagiaan di hari istimewa kami
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <p className="font-sacramento text-2xl text-strong-pink">Risang & Dina</p>
                <p className="text-sm text-muted-foreground">Calon Pengantin</p>
              </div>
            </div>
          </div>

          {/* Final Blessing */}
          <div className="mb-12">
            <p className="font-dancing text-2xl md:text-3xl text-strong-pink mb-4 font-medium">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
              isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya"
            </p>
            <p className="text-muted-foreground">
              - QS. Ar-Rum: 21
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-strong-pink to-golden hover:from-strong-pink/80 hover:to-golden/80 text-white px-8 py-4 rounded-full shadow-romantic transition-smooth"
          >
            <ArrowUp className="w-5 h-5 mr-2" />
            Kembali ke Atas
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-soft-pink/10 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-golden/10 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pale-pink/10 rounded-full animate-float delay-2000"></div>
        
        {/* Sparkle elements */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-golden rounded-full animate-sparkle"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-strong-pink rounded-full animate-sparkle delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-golden rounded-full animate-sparkle delay-2000"></div>
      </div>
    </section>
  );
};

export default ClosingSection;