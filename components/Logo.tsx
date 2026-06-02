import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // dark for welcome page, light for topbar
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const qualColor = variant === 'dark' ? 'text-[#285ebb]' : 'text-[#85a9ea]';
  const checkColor = variant === 'dark' ? 'text-[#a4c2f4]' : 'text-white';

  return (
    <div className={`font-bold tracking-tight ${className}`}>
      <span className={qualColor}>Qual</span>
      <span className={checkColor}>Check</span>
    </div>
  );
}
