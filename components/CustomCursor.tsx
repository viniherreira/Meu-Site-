'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 28, stiffness: 600, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 600, mass: 0.4 });

  const dotX = useSpring(cursorX, { damping: 40, stiffness: 900, mass: 0.2 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 900, mass: 0.2 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(!!isClickable);
    };

    const enter = () => setIsHidden(false);
    const leave = () => setIsHidden(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', checkPointer);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', checkPointer);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseleave', leave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          className="w-8 h-8 rounded-full border border-gold/60"
          animate={{
            scale: isPointer ? 1.8 : 1,
            opacity: isHidden ? 0 : 1,
            borderColor: isPointer ? 'rgba(192,154,92,0.9)' : 'rgba(192,154,92,0.6)',
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-gold translate-x-3 translate-y-3"
          animate={{
            scale: isPointer ? 0 : 1,
            opacity: isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
