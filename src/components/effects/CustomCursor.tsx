import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);
  return (
    <>
      <div ref={cursorRef} className="fixed w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-exclusion" />
      <div ref={dotRef} className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block" />
    </>
  );
};

export default CustomCursor;

