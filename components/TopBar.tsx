import React from 'react';
import Logo from './Logo';

export default function TopBar() {
  return (
    <header className="bg-[#0f2b5f] h-16 flex items-center px-4 shadow-md w-full shrink-0">
      <div className="flex items-center gap-3">
        <div className="relative flex flex-col justify-center items-center w-8 h-8">
          <div className="w-6 h-0.5 bg-white mb-1.5 rounded-full"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5 rounded-full"></div>
          <div className="w-6 h-0.5 bg-white rounded-full"></div>
          <div className="absolute -top-1 -right-1 bg-white rounded-full w-4 h-4 flex items-center justify-center">
            <svg className="w-3 h-3 text-[#0f2b5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <Logo variant="light" className="text-2xl" />
      </div>
    </header>
  );
}
