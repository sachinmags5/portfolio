import { useState, useEffect } from 'react';

/**
 * Tracks mouse position in real time.
 * @returns {{ x: number, y: number }}
 */
const useMousePosition = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return pos;
};

export default useMousePosition;