import { ReactNode } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  return (
    <div 
      className={`animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

