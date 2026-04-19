import { useEffect, useRef, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition.js';

export default function Cursor() {
  const { x, y } = useMousePosition();
  const [expanded, setExpanded] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Smooth ring follow with rAF
  const ring = useRef({ x: 0, y: 0 });
  useEffect(() => {
    let animId;
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, x, 0.12);
      ring.current.y = lerp(ring.current.y, y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [x, y]);

  // Snap dot directly
  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.left = `${x}px`;
      dotRef.current.style.top = `${y}px`;
    }
  }, [x, y]);

  // Grow on interactive elements
  useEffect(() => {
    const grow = () => setExpanded(true);
    const shrink = () => setExpanded(false);
    const targets = document.querySelectorAll('a, button, [data-cursor-expand]');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    return () => {
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`cursor ${expanded ? 'expanded' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${expanded ? 'expanded' : ''}`} />
    </>
  );
}
