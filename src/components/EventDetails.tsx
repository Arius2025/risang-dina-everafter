import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const EventDetails = () => {
  const events = [
    {
      type: 'Akad',
      date: '12 Oktober 2025',
      time: '09.00',
      location: 'Kalisat',
      address: 'Kalisat, Jember',
      gradient: 'from-strong-pink to-golden',
    },
    {
      type: 'Walimatul Ursy',
      date: '12 Oktober 2025',
      time: '13.00',
      location: 'Kalisat',
      address: 'Kalisat, Jember',
      gradient: 'from-golden to-strong-pink',
    },
  ];

  return (
    <section id="details" className="py-20 bg-gradient-ethereal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-sacramento text-5xl md:text-6xl text-strong-pink mb-4">
            Detail Acara
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dengan penuh sukacita, kami mengundang Anda untuk hadir dan berbagi kebahagiaan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <Card 
              key={event.type}
              className="p-8 bg-card/80 backdrop-blur-sm border border-soft-pink/20 shadow-romantic hover:shadow-golden transition-smooth animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={`bg-gradient-to-r ${event.gradient} p-6 rounded-2xl mb-6 text-center`}>
                <h3 className="font-dancing text-3xl md:text-4xl text-white font-bold mb-2">
                  {event.type}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-strong-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tanggal</p>
                    <p className="text-lg font-medium text-foreground">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-strong-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Waktu</p>
                    <p className="text-lg font-medium text-foreground">{event.time} WIB</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-strong-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                    <p className="text-lg font-medium text-foreground">{event.location}</p>
                    <p className="text-sm text-muted-foreground">{event.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-soft-pink/20">
                <button
                  onClick={() => {
                    const query = encodeURIComponent(`${event.location}, ${event.address}`);
                    window.open(`https://maps.google.com/maps?q=${query}`, '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-soft-pink to-golden-light text-white py-3 rounded-full font-medium hover:shadow-lg transition-smooth"
                >
                  Buka di Google Maps
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;