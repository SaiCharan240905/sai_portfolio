import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // hide on mobile safely
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[99999]"
      style={{
        transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        opacity: visible ? 1 : 0,
        transition: 'transform 0.08s linear'
      }}
    >
      <div className="w-10 h-10 rounded-full bg-primary/30 blur-xl" />
    </div>
  );
};

export default CursorFollower;