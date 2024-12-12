import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticEffect({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    if (!magnetic.current) {
      console.error('Ref not assigned to a valid DOM element.');
      return;
    }

    const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, { x: 0, y: 0, duration: 1 });
    };

    magnetic.current.addEventListener('mousemove', mouseMove);
    magnetic.current.addEventListener('mouseleave', mouseLeave);

    return () => {
      magnetic.current.removeEventListener('mousemove', mouseMove);
      magnetic.current.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  if (!React.isValidElement(children)) {
    console.error('The `children` prop must be a valid React element.');
    return null;
  }

  return React.cloneElement(children, { ref: magnetic });
}