import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });
  const dotX = useSpring(0, { damping: 40, stiffness: 700 });
  const dotY = useSpring(0, { damping: 40, stiffness: 700 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktops)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);

      if (!hasMoved) {
        setHasMoved(true);
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = !!target.closest('a, button, input, textarea, select, [role="button"], .clickable');
        setIsPointer(interactive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, hasMoved]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-electric/40 bg-electric/5 backdrop-blur-[0.5px]"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 44 : 32,
          height: isPointer ? 44 : 32,
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-electric shadow-sm"
        style={{
          x: dotX,
          y: dotY,
          width: isPointer ? 6 : 8,
          height: isPointer ? 6 : 8,
          backgroundColor: isPointer ? '#FF827A' : '#527BFF',
          transition: 'background-color 0.2s ease, width 0.2s ease, height 0.2s ease',
        }}
      />
    </>
  );
};

