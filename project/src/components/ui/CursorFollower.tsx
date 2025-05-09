import React, { useEffect, useRef } from 'react';

const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Detect if device is touch-based
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Only show custom cursor on non-touch devices
    if (isTouchDevice) {
      cursor.style.display = 'none';
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      // Get the target element
      const target = e.target as HTMLElement;
      
      // Check if the element is a button, link, or other interactive element
      const isInteractive = 
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') || 
        target.closest('a');
      
      if (isInteractive) {
        // Expand cursor
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(2)`;
        cursor.style.backgroundColor = '#6C5CE7';
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // Reset cursor
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1)`;
      cursor.style.backgroundColor = '#FFFFFF';
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Add event listeners for all interactive elements
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="custom-cursor" 
      style={{ 
        backgroundColor: '#FFFFFF',
        transform: 'translate3d(-100px, -100px, 0)', // Start off-screen
      }}
    />
  );
};

export default CursorFollower;