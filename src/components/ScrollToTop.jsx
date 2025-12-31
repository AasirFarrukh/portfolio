import React from 'react';
import { ChevronDown } from 'lucide-react';

function ScrollToTop({ visible }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 p-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl shadow-2xl shadow-cyan-500/50 hover:scale-110 transition-all z-50 ${
        visible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <ChevronDown className="transform rotate-180 text-white" size={28} />
    </button>
  );
}

export default ScrollToTop;
