import { Gift, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const GiftRegistry = () => {
  return (
    <section className="py-20 bg-gradient-romantic">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <div className="mb-8">
            <Gift className="w-16 h-16 text-strong-pink mx-auto mb-6 animate-float" />
            <h2 className="font-sacramento text-5xl md:text-6xl text-strong-pink mb-6">
              Hadiah & Doa
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border border-soft-pink/30 shadow-romantic">
            <div className="text-center">
              <Heart className="w-12 h-12 text-strong-pink mx-auto mb-6 animate-heart-pulse" />
              
              <h3 className="font-dancing text-3xl md:text-4xl text-strong-pink mb-6 font-bold">
                Hadiah Tradisional
              </h3>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                Kehadiran Anda di hari bahagia kami sudah merupakan hadiah yang sangat berharga. 
                Namun, jika Anda ingin memberikan hadiah, kami akan sangat menghargai hadiah tradisional 
                yang penuh makna dan berkat.
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p className="font-medium">
                  "Doa restu dari keluarga dan sahabat adalah hadiah terindah yang dapat kami terima"
                </p>
                
                <div className="w-24 h-0.5 bg-gradient-to-r from-strong-pink to-golden mx-auto my-6"></div>
                
                <p className="italic">
                  Semoga pernikahan kami menjadi awal dari kehidupan yang penuh berkah dan kebahagiaan
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, text: "Doa & Restu" },
              { icon: Gift, text: "Hadiah Tradisional" },
              { icon: Heart, text: "Kehadiran Anda" },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center py-6 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="w-8 h-8 text-strong-pink mx-auto mb-3" />
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;