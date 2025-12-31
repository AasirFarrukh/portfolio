import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-white/5' : 'bg-white/40'} backdrop-blur-2xl border-t ${isDark ? 'border-white/10' : 'border-white/40'} py-12 relative z-10 mt-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                A
              </div>
              <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Aasir Farrukh
              </span>
            </div>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
              © 2025 All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/AasirFarrukh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <Github size={28} className={isDark ? 'text-white' : 'text-gray-900'} />
            </a>
            <a
              href="https://www.linkedin.com/in/aasirfarrukh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={28} className={isDark ? 'text-white' : 'text-gray-900'} />
            </a>
            <a
              href="mailto:aasir.farrukh14@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              <Mail size={28} className={isDark ? 'text-white' : 'text-gray-900'} />
            </a>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${isDark ? 'border-white/10' : 'border-white/30'} text-center`}>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
            Built with React and Tailwind CSS • Design by Aasir Farrukh
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
