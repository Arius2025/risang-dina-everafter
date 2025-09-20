import { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-12T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-16 bg-gradient-ethereal">
      <h2 className="font-sacramento text-4xl md:text-5xl text-strong-pink mb-8 animate-fade-in-up">
        Menuju Hari Bahagia
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {[
          { label: 'Hari', value: timeLeft.days },
          { label: 'Jam', value: timeLeft.hours },
          { label: 'Menit', value: timeLeft.minutes },
          { label: 'Detik', value: timeLeft.seconds },
        ].map((item, index) => (
          <div 
            key={item.label}
            className="bg-card p-6 rounded-2xl shadow-romantic border border-soft-pink/20 animate-fade-in-scale"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-3xl md:text-4xl font-bold text-strong-pink mb-2">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-muted-foreground font-medium tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;