import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 28 }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div 
        className="absolute inset-0 rounded-md bg-gradient-to-br from-primary to-secondary opacity-70 blur-sm"
        style={{ width: size, height: size }}
      />
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <rect width="32" height="32" rx="8" fill="#1E1E2E"/>
        <path d="M8 8L16 16L8 24" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8L24 16L16 24" stroke="#00D2FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default Logo;