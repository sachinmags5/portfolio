import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean `isVisible` that becomes true
 * once the element scrolls into view.
 * @param {{ threshold?: number, rootMargin?: string }} options
 */
const useScrollReveal = ({ threshold = 0.1, rootMargin = '0px' } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

export default useScrollReveal;