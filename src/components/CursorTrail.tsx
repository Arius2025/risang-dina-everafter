import { useEffect, useState } from 'react';

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const [dots, setDots] = useState<TrailDot[]>([]);
  const [dotId, setDotId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newDot: TrailDot = {
        id: dotId,
        x: e.clientX,
        y: e.clientY,
      };

      setDots(prev => [...prev, newDot]);
      setDotId(prev => prev + 1);

      // Remove dots after animation
      setTimeout(() => {
        setDots(prev => prev.filter(dot => dot.id !== newDot.id));
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [dotId]);

  return (
    <>
      {dots.map(dot => (
        <div
          key={dot.id}
          className="cursor-trail"
          style={{
            left: dot.x,
            top: dot.y,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;